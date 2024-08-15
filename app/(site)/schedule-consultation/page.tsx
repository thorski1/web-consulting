import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import ScheduleConsultationSection from "./ScheduleConsultationSection";

export async function generateMetadata(
	// @ts-ignore
	{ params, searchParams },
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		metadataBase: new URL("https://recodepros.dev"),
		title: "Schedule a Consultation - Recode Pros",
		description:
			"Book a free consultation with Recode Pros' experts to discuss your digital goals and discover how our AI-powered solutions can transform your business.",
		openGraph: {
			title:
				"Schedule a Free Consultation | Recode Pros",
			description:
				"Book a free consultation with Recode Pros' experts to discuss your digital goals and discover how our AI-powered solutions can transform your business.",
			url: `https://recodepros.dev/schedule-consultation`,
			siteName: "ReCode Pros",
			images: [
				{
					url: `https://recodepros.dev/people-lightbulb.png`, // Must be an absolute URL
					width: 800,
					height: 600,
				},
				{
					url: `https://recodepros.dev/people-lightbulb.png`, // Must be an absolute URL
					width: 1800,
					height: 1600,
					alt: "My custom alt",
				},
			],
			locale: "en-US",
			type: "website",
		},
		twitter: {
			card: "summary",
			title:
				"Schedule a Free Consultation | Recode Pros",
			description:
				"Book a free consultation with Recode Pros' experts to discuss your digital goals and discover how our AI-powered solutions can transform your business.",
			// siteId: "1012501",
			creator: "@SamThoyre",
			creatorId: "1012501",
			images: [
				"https://recodepros.dev/people-lightbulb.png",
			],
		},
		robots: {
			index: true,
			follow: true,
			nocache: false,
			googleBot: {
				index: true,
				follow: true,
				noimageindex: false,
			},
		},
	};
}

export default function ScheduleConsultationPage() {
	return (
            <main>
                <ScheduleConsultationSection />
			</main>
		);
	
};
