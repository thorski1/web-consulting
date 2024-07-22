"use client";

import React, { FormEvent, useState } from "react";
import { postSheetData } from "../../actions/google-sheets.action";

interface IFormProps {
	setIsLoading: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	setIsSuccessful: React.Dispatch<
		React.SetStateAction<boolean>
	>;
}

const Form = ({ setIsLoading, setIsSuccessful }: IFormProps) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
	const handleSubmit = async (
		e: FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
        setIsLoading(true)
		let form = {
			name,
			email,
			message,
        };
		const response = await postSheetData(
			name,
			email,
			message
        ).then(res => {
            setIsLoading(false)
            setIsSuccessful(true)
        })
        
		setMessage("");
		setName("");
        setEmail("");
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
					className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-base text-neutral-900 placeholder-neutral-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>
			<div className="grid gap-2">
				<label
					htmlFor="message"
					className="text-foreground font-medium"
				>
					Message
				</label>
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					id="message"
					rows={4}
					placeholder="Enter your message"
					className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-base text-neutral-900 placeholder-neutral-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>
			<button
				type="submit"
				className="rounded-md bg-primary px-4 py-2 text-base font-medium text-primary-foreground hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
