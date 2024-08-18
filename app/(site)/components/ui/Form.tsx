"use client";

import React, { FormEvent, useState } from "react";
import { submitForm } from "../../actions/google-sheets.action";

interface IFormProps {
	setIsLoading: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	setIsSuccessful: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	transactionalId?: string;
}

const Form = ({
	setIsLoading,
	setIsSuccessful,
	transactionalId
}: IFormProps) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [company, setCompany] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (
		e: FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		setIsLoading(true);
		let form = {
			name,
			email,
			company,
			transactionalId
		};

		try {
			await submitForm(form);
			setIsSuccessful(true);

			setCompany("");
			setName("");
			setEmail("");
		} catch (err: any) {
			// Handle specific errors if needed
			if (err.message === "Invalid email format") {
				setError("Please enter a valid email address.");
			} else {
				setError(
					"An error occurred while submitting the form. Please try again later."
				);
			}
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<form onSubmit={handleSubmit} className="grid gap-4">
			<div className="grid gap-2">
				<label
					htmlFor="name"
					className="text-foreground font-medium"
				>
					Name
				</label>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					name="name"
					id="name"
					placeholder="Enter your name"
					required
					className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-base text-neutral-900 placeholder-neutral-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>
			<div className="grid gap-2">
				<label
					htmlFor="email"
					className="text-foreground font-medium"
				>
					Email
				</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					name="email"
					id="email"
					placeholder="Enter your email"
					required
					className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-base text-neutral-900 placeholder-neutral-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>
			<div className="grid gap-2">
				<label
					htmlFor="company"
					className="text-foreground font-medium"
				>
					Company
				</label>
				<input
					value={company}
					onChange={(e) => setCompany(e.target.value)}
					type="company"
					name="company"
					id="company"
					placeholder="Enter your company name"
					required
					className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-base text-neutral-900 placeholder-neutral-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>
			<button
				type="submit"
				className="inline-flex h-10 items-center justify-center rounded-md bg-popover px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
