import React from "react";
import MainPage from "./MainPage";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
    // @ts-ignore
	{ params, searchParams },
	parent: ResolvingMetadata
): Promise<Metadata> {

	return {
		metadataBase: new URL(
			"https://new-portfolio-three-gamma.vercel.app"
		),
		title: "Free 10-Minute Web Development Consultation",
		description:
			"Schedule your free 10-minute consultation with our expert web developers. Discover how we can enhance your online presence and achieve your goals.",
		openGraph: {
			title: "Free 10-Minute Web Development Consultation",
			description:
				"Schedule your free 10-minute consultation with our expert web developers. Discover how we can enhance your online presence and achieve your goals.",
			url: `https://new-portfolio-three-gamma.vercel.app/schedule-consultation`,
			siteName: "ST Web Consulting",
			images: [
				{
					url: `https://new-portfolio-three-gamma.vercel.app/DKcTWlyZOE.png`, // Must be an absolute URL
					width: 800,
					height: 600,
				},
				{
					url: `https://new-portfolio-three-gamma.vercel.app/DKcTWlyZOE.png`, // Must be an absolute URL
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
			title: "Free 10-Minute Web Development Consultation",
			description:
				"Schedule your free 10-minute consultation with our expert web developers. Discover how we can enhance your online presence and achieve your goals.",
			// siteId: "1012501",
			creator: "@SamThoyre",
			// creatorId: "1012501",
			images: [
				"https://new-portfolio-three-gamma.vercel.app/DKcTWlyZOE.png",
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
                <MainPage />
			</main>
		);
	
};
