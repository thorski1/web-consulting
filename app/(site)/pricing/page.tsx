import { HeaderSection } from "@/components/header-section";
import HeroNoImage from "@/components/hero-no-image";
import ShineBorder from "@/components/magicui/shine-border";
import ThreeBoxSection from "@/components/three-box-section";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

export async function generateMetadata(
	// @ts-ignore
	{ params, searchParams },
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		metadataBase: new URL("https://recodepros.dev"),
		title: "Pricing - Recode Pros",
		description:
			"Explore Recode Pros' affordable and customizable pricing options for AI-powered web development, SEO, digital marketing, and more.",
		openGraph: {
			title:
				"Recode Pros Pricing | Transparent & Flexible Plans",
			description:
				"Explore Recode Pros' affordable and customizable pricing options for AI-powered web development, SEO, digital marketing, and more.",
			url: `https://recodepros.dev/pricing`,
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
				"Recode Pros Pricing | Transparent & Flexible Plans",
			description:
				"Explore Recode Pros' affordable and customizable pricing options for AI-powered web development, SEO, digital marketing, and more.",
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

const PricingPage = () => {
	return (
		<div className="w-full">
			<HeroNoImage
				header="AI-Powered Solutions for Your Business"
				subheader="Unlock the power of AI to transform your online presence and drive business growth."
				hasCta={true}
			/>
			<ThreeBoxSection />
		</div>
	);
};

function CheckIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="hsl(120, 60%, 40% )"
			strokeWidth="4"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M20 6 9 17l-5-5" />
		</svg>
	);
}

export default PricingPage;
