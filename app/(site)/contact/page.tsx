import { Metadata, ResolvingMetadata } from "next";
import ScheduleConsultationSection from "../schedule-consultation/ScheduleConsultationSection";
import HeroNoImage from "@/components/hero-no-image";

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
			url: `https://recodepros.dev/contact`,
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
		<div>
			<HeroNoImage
				header="Let's Talk: Your AI-Powered Transformation Starts Here"
				subheader="Connect with our team to learn how our AI-powered solutions can help transform your digital presence and drive business."
			/>
			<ScheduleConsultationSection />
		</div>
	);
}
