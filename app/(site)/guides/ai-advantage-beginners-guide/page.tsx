import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import ClientSide from "./client-side";

export async function generateMetadata(
	// @ts-ignore
	{ params, searchParams },
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		metadataBase: new URL("https://recodepros.dev"),
		title: "Contact - Recode Pros",
		description:
			"Ready to transform your digital presence? Contact Recode Pros today for a free consultation and discover how our AI-powered solutions can help your business thrive.",
		openGraph: {
			title:
				"Contact Recode Pros | Get a Free Consultation",
			description:
				"Ready to transform your digital presence? Contact Recode Pros today for a free consultation and discover how our AI-powered solutions can help your business thrive.",
			url: `https://recodepros.dev/guides/ai-advantage-beginners-guide`,
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
				"Contact Recode Pros | Get a Free Consultation",
			description:
				"Ready to transform your digital presence? Contact Recode Pros today for a free consultation and discover how our AI-powered solutions can help your business thrive.",
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

export default function ContactPage() {
	return (
		<ClientSide />
	);
}
