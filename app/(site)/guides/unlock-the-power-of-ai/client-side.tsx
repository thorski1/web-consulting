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
		return <ThankYouPage content='Your free eBook, "Unlocking the Power of AI," is on its way to your inbox. In the meantime, feel free to explore our website to see how AI can transform your business. We look forward to helping you unlock your digital potential!' />;
	} else {
		return (
			<div className="mx-auto px-4 py-12 min-h-screen">
				<HeaderSection
					header="Unlock the Power of AI: Fuel Your Business Growth"
					subheader="Download Your Free Guide to AI-Powered Success"
				/>
				<TextBlock
					alignment="left"
						text={[
							"In today's fast-paced digital world, businesses that harness the power of AI are poised to thrive. Our comprehensive guide provides practical insights and actionable strategies to help you leverage AI for:",
						]}
					/>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, ease: "easeOut" }} className="prose max-w-none mb-8 mt-[-2rem]">
						<ul className="list-disc pl-6 mt-4 space-y-2 text-white">
							<li>Smarter Web Development</li>
							<li>Targeted Digital Marketing</li>
							<li>Enhanced User Experiences</li>
							<li>Data-Driven Decision Making</li>
						</ul>
					</motion.div>

					<motion.div
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, ease: "easeOut" }} className="space-y-6">
						<AnimatedShinyText
							className="text-xl font-semibold mb-4 "
							as={"h3"}
						>
							Enter your details below to receive your free
							copy and start your AI-powered journey today!
						</AnimatedShinyText>
						<div className="max-w-sm mx-auto">
							<Form
								setIsLoading={setIsLoading}
								setIsSuccessful={setIsSuccessful}
								transactionalId="clzyj5xml00da3on379i7ys71"
							/>
					</div>
				</motion.div>
			</div>
		);
	}
};

export default ClientSide;
