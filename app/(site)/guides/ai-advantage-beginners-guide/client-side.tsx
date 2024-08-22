"use client";
import { HeaderSection } from "@/components/header-section";
import TextBlock from "@/components/text-block";
import React, { useState } from "react";
import Form from "../../components/ui/Form";
import LoadingSpinnerPage from "../../components/global/LoadingSpinner";
import ThankYouPage from "../../components/ui/ThankYouPage";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { motion } from "framer-motion";

const ClientSide = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);
	if (isLoading) {
		return <LoadingSpinnerPage />;
	}
	if (isSuccessful) {
		return (
			<ThankYouPage content='Your free guide, "The AI Advantage," is on its way to your inbox. In the meantime, feel free to explore our website or [schedule a free consultation] to discuss how AI can transform your business. We look forward to helping you unlock your digital potential!' />
		);
	} else {
		return (
			<div className="mx-auto px-4 py-12 min-h-screen">
				<main>
					<HeaderSection
						header="The AI Advantage: A Beginner's Guide to Leveraging Artificial Intelligence for Business Growth"
						subheader="Demystify AI and Discover its Potential for Your Business"
					/>
					<TextBlock
						alignment="center"
						text={[
							"Understand AI, use it for web development, digital marketing, and UX design, make data-driven decisions, and implement AI in your business.",
						]}
					/>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, ease: "easeOut" }}
						className="space-y-6"
					>
						<AnimatedShinyText
							className="text-xl font-semibold mb-4 text-center"
							as={"h3"}
						>
							Enter your details below to receive your free
							copy and start your AI-powered journey today!
						</AnimatedShinyText>
						<div className="max-w-sm mx-auto">
							<Form
								setIsLoading={setIsLoading}
								setIsSuccessful={setIsSuccessful}
								transactionalId="clzzgyrk200b8p750z86tqbgp"
							/>
						</div>
					</motion.div>
				</main>
			</div>
		);
	}
};

export default ClientSide;
