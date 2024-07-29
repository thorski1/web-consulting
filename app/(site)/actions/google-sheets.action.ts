"use server";
import { google } from "googleapis";
import EmailTemplate from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function postSheetData(
	name: string,
	email: string,
	message: string
) {
	const glAuth = await google.auth.getClient({
		projectId: process.env.GOOGLE_PROJECT_ID,
		credentials: {
			type: "service_account",
			project_id: process.env.GOOGLE_PROJECT_ID,
			private_key_id: process.env.GOOGLE_PRIVAT_KEY_ID,
			private_key: process.env
				.GOOGLE_PRIVATE_KEY!.split(String.raw`\n`)
				.join("\n"),
			client_email: process.env.GOOGLE_CLIENT_EMAIL,
			universe_domain: "googleapis.com",
		},
		scopes: [
			"https://www.googleapis.com/auth/spreadsheets",
		],
	});

	const glSheets = google.sheets({
		version: "v4",
		auth: glAuth,
	});

	const data = await glSheets.spreadsheets.values
		.append({
			spreadsheetId: process.env.GOOGLE_SHEET_ID,
			range: "A1:C1",
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values: [[name, email, message]],
			},
		})
		.then(async (res) => {
			const { data: emailData, error } = await resend.emails
				.send({
					from: "Recode Pros <onboarding@resend.dev>",
					to: [email],
					subject: "Test!",
					react: EmailTemplate({ name }),
				})
				// @ts-ignore
				.then((res) => {
					console.log(res);
					return new Response(JSON.stringify(emailData), {
						status: 200,
					});
				});
		})
		.catch(
			(e) =>
				new Response(JSON.stringify(e), {
					status: 400,
				})
		);
}
