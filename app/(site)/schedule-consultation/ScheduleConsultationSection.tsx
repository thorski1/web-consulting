"use client";
import React, { useState } from "react";
import Form from "../components/ui/Form";
import ThankYouPage from "../components/ui/ThankYouPage";
import LoadingSpinnerPage from "../components/global/LoadingSpinner";
import BlurFade from "@/components/magicui/blur-fade";

export default function ScheduleConsultationSection() {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);
	if (isLoading) {
		return <LoadingSpinnerPage />;
	}
	if (isSuccessful) {
		return (
			<ThankYouPage
				content="Thank you for your interest! We will reach out to
					you via email shortly to schedule your free
					10-minute consultation. We look forward to
					discussing how we can help elevate your website.
					Talk to you soon!"
			/>
		);
	} else {
		return (
			<section className="flex flex-col md:flex-row justify-center gap-8 py-6 xl:py-9">
				<BlurFade delay={0.25} inView className="flex-1 space-y-4">
					<BlurFade delay={0.25} inView>
						<h2 className="text-lg font-bold tracking-tighter sm:text-xl md:text-3xl">
							Free 10-Minute Web Development Consultation
						</h2>
					</BlurFade>
					<BlurFade delay={0.5} inView>
						<p className="text-muted-foreground md:text-lg">
							Are you looking to elevate your online
							presence and drive more traffic to your
							website? By scheduling a free 10-minute
							consultation, you can gain valuable insights
							into how modern web development practices can
							transform your site into a high-performing,
							user-friendly platform. In just 10 minutes,
							we&apos;ll discuss your current challenges,
							future aspirations, and how I can help you
							achieve your objectives. From responsive
							design and SEO optimization to seamless
							navigation and engaging content, my expertise
							covers all aspects of web development.
							Don&apos;t miss this opportunity to get expert
							advice tailored to your needs—all at no cost.
							Schedule your consultation today and take the
							first step towards a more successful online
							presence.
						</p>
					</BlurFade>
				</BlurFade>
				<BlurFade delay={0.75} inView className="flex-1 self-start w-full max-w-md bg-card rounded-lg shadow-lg">
					<Form
						setIsLoading={setIsLoading}
						setIsSuccessful={setIsSuccessful}
					/>
				</BlurFade>
			</section>
		);
	}
}
