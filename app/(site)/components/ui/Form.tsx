"use client";

import React, { FormEvent, useState } from "react";
import { submitForm } from "../../actions/google-sheets.action";

/**
 * Props for the Form component
 * @interface IFormProps
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setIsLoading - Function to set loading state
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setIsSuccessful - Function to set success state
 * @property {string} [transactionalId] - Optional transactional ID for the form submission
 */
interface IFormProps {
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setIsSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
	transactionalId?: string;
}

/**
 * Form component for collecting user information
 * @param {IFormProps} props - The props for the Form component
 * @returns {JSX.Element} The rendered Form component
 */
const Form: React.FC<IFormProps> = ({
	setIsLoading,
	setIsSuccessful,
	transactionalId
}) => {
	// State for form fields and error message
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [company, setCompany] = useState("");
	const [error, setError] = useState("");

	/**
	 * Handles form submission
	 * @param {FormEvent<HTMLFormElement>} e - The form submission event
	 */
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		
		const formData = {
			name,
			email,
			company,
			transactionalId
		};

		try {
			await submitForm(formData);
			setIsSuccessful(true);
			resetForm();
		} catch (err: any) {
			handleError(err);
		} finally {
			setIsLoading(false);
		}
	};

	/**
	 * Resets the form fields
	 */
	const resetForm = () => {
		setCompany("");
		setName("");
		setEmail("");
	};

	/**
	 * Handles errors during form submission
	 * @param {any} err - The error object
	 */
	const handleError = (err: any) => {
		if (err.message === "Invalid email format") {
			setError("Please enter a valid email address.");
		} else {
			setError(
				"An error occurred while submitting the form. Please try again later."
			);
		}
		console.error(err);
	};

	/**
	 * Renders an input field
	 * @param {Object} props - The props for the input field
	 * @param {string} props.id - The ID of the input field
	 * @param {string} props.label - The label for the input field
	 * @param {string} props.type - The type of the input field
	 * @param {string} props.value - The current value of the input field
	 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - The onChange handler for the input field
	 * @returns {JSX.Element} The rendered input field
	 */
	const renderInput = ({ id, label, type, value, onChange }: {
		id: string;
		label: string;
		type: string;
		value: string;
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	}) => (
		<div className="grid gap-2">
			<label htmlFor={id} className="text-primary font-medium">
				{label}
			</label>
			<input
				id={id}
				name={id}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={`Enter your ${id}`}
				required
				className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary"
			/>
		</div>
	);

	return (
		<form onSubmit={handleSubmit} className="grid gap-4 bg-card p-6 rounded-lg shadow-md">
			{renderInput({ id: "name", label: "Name", type: "text", value: name, onChange: (e) => setName(e.target.value) })}
			{renderInput({ id: "email", label: "Email", type: "email", value: email, onChange: (e) => setEmail(e.target.value) })}
			{renderInput({ id: "company", label: "Company", type: "text", value: company, onChange: (e) => setCompany(e.target.value) })}
			<button
				type="submit"
				className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
			>
				Submit
			</button>
			{error && <p className="text-destructive mt-2">{error}</p>}
		</form>
	);
};

export default Form;
