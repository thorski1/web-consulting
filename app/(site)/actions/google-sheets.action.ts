"use server";

import nodemailer from "nodemailer";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const prisma = new PrismaClient();

export async function submitForm(formData: {
	name: string;
	email: string;
	company: string;
}) {
	try {
		console.log("Form Data Received:");

		const { name, email, company } = formData;

		// 1. Create or find the user
		console.log("Looking for user in database...");
		let user = await prisma.user.findUnique({
			where: { email },
		});

		if (!user) {
			console.log("User not found, creating new user...");
			user = await prisma.user.create({
				data: {
					email,
					name,
					companyName: company,
				},
			});
		} else {
			console.log("User found");
		}

		// 2. Save information as a lead, linked to the user
		console.log("Saving lead information...");
		const lead = await prisma.lead.create({
			data: {
				user: { connect: { id: user.id } },
				source: "Website Form",
				status: "New",
			},
		});
		console.log("Lead saved");

		// 3. Load service account key file and create JWT client
		console.log("Loading service account key file...");
		const keyFile = JSON.parse(
			process.env.GOOGLE_EMAIL_SENDER_KEYFILE!
		);
		console.log("Creating JWT client...");
		const jwtClient = new google.auth.JWT(
			keyFile.client_email,
			// @ts-ignore
			null,
			keyFile.private_key,
			["https://mail.google.com/"]
		);
		console.log("JWT client created:");

		// 4. Get access token
		const tokens = await jwtClient.getAccessToken();
		console.log("Access token generated:");

		// Manually construct the XOAUTH2 string
		const authString = `user=${process.env.GMAIL_USER}\x01auth=Bearer ${tokens.token}\x01\x01`;
		const authStringBase64 =
			Buffer.from(authString).toString("base64");

		// 5. Set up Nodemailer transporter with direct SMTP configuration
		console.log("Setting up Nodemailer transporter...");
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASSWORD,
			},
			logger: true,
			debug: true,
			socketTimeout: 10000,
			connectionTimeout: 10000,
		} as SMTPTransport.Options);

		console.log("transporter set up");

		// 6. Send notification to yourself
		const notificationMailOptions = {
			from: `<${process.env.GMAIL_USER}>`,
			to: `<${process.env.GMAIL_USER}>`,
			subject: "New Lead from Website",
			text: `
        A new lead has been created:
        Name: ${name}
        Email: ${email}
        Company: ${company}
      `,
		};

		console.log("Sending email notification...");
		await transporter.sendMail(notificationMailOptions);
		console.log("Email sent successfully.");

		return { success: true };
	} catch (error) {
		console.error(
			"Error occurred during form submission:",
			error
		);
		throw new Error(
			`Error handling form submission: ${error}`
		);
	} finally {
		console.log("Disconnecting Prisma...");
		await prisma.$disconnect();
		console.log("Prisma disconnected.");
	}
}
