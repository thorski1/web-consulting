import CTASection from "@/components/cta-section";
import { Hero } from "../../components/ui/Hero";
import { FourColumnIconSection } from "@/components/four-column-icon-section";
import { TwoColumnSection } from "@/components/two-column-section";
import { TwoByTwoGrid } from "@/components/two-by-two-grid";
import TextBlock from "@/components/text-block";
import { ItemList } from "@/components/item-list";
import { Metadata, ResolvingMetadata } from "next";
import { BentoGridSection } from "@/components/bento-grid-section";
import {
	BellIcon,
	CalendarIcon,
	FileTextIcon,
	GlobeIcon,
	InputIcon,
} from "@radix-ui/react-icons";

export async function generateMetadata(
	// @ts-ignore
	{ params, searchParams },
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		metadataBase: new URL("https://recodepros.dev"),
		title: "UI/UX Design - Recode Pros",
		description:
			"Enhance usability and drive conversions with Recode Pros' AI-powered UI/UX design services. We create user-centric interfaces that delight and engage.",
		openGraph: {
			title:
				"Intuitive UI/UX Design | Craft Exceptional User Experiences",
			description:
				"Enhance usability and drive conversions with Recode Pros' AI-powered UI/UX design services. We create user-centric interfaces that delight and engage.",
			url: `https://recodepros.dev/services/design`,
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
				"Intuitive UI/UX Design | Craft Exceptional User Experiences",
			description:
				"Enhance usability and drive conversions with Recode Pros' AI-powered UI/UX design services. We create user-centric interfaces that delight and engage.",
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

const DesignServicePage = async () => {
	const features = [
		{
			Icon: FileTextIcon,
			name: "User Research & Analysis",
			description:
				"We believe that understanding your users is the foundation of great design. We conduct in-depth research using surveys, interviews, and analytics to gain insights into your target audience's behaviors, needs, and pain points. This information guides our design decisions, ensuring that your product or website truly resonates with your users.",
			background: (
				<img
					src="/services/design/user-research-analysis.svg"
					alt="User Research & Analysis"
					className="absolute -right-0 -top-0 opacity-60"
				/>
			),
			className:
				"lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-3",
		},
		{
			Icon: InputIcon,
			name: "Information Architecture",
			description:
				"We create a clear and logical structure for your content and navigation. Our information architects will organize your information in a way that is intuitive and easy for users to find what they're looking for. We'll develop sitemaps, wireframes, and user flows to ensure a seamless and enjoyable user experience.",
			// href: "/",
			// cta: "Learn more",
			background: (
				<img
					src="/services/design/information-architecture.svg"
					alt="Information Architecture"
					className="absolute -right-0 -top-0 opacity-60"
				/>
			),
			className:
				"lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
		},
		{
			Icon: GlobeIcon,
			name: "Wireframing & Prototyping",
			description:
				"We bring your ideas to life with interactive prototypes. Our designers will create low-fidelity wireframes to visualize the basic structure and layout of your product or website. We'll then develop interactive prototypes that simulate the user experience, allowing you to test and refine the design before moving to the development phase.",
			// href: "/",
			// cta: "Learn more",
			background: (
				<img
					src="/services/design/wireframing-prototyping.svg"
					alt="Wireframing & Prototyping"
					className="absolute opacity-60"
				/>
			),
			className:
				"lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-5",
		},
		{
			Icon: CalendarIcon,
			name: "Visual Design",
			description:
				"We create visually stunning interfaces that leave a lasting impression. Our talented designers will craft a unique aesthetic that aligns with your brand identity and appeals to your target audience. We'll use color, typography, imagery, and animation to create a cohesive and engaging visual experience.",
			// href: "/",
			// cta: "Learn more",
			background: (
				<img
					src="/services/design/visual-design.svg"
					alt="Visual Design"
					className="absolute -right-0 -top-0 opacity-60"
				/>
			),
			className:
				"lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-5",
		},
		{
			Icon: BellIcon,
			name: "Usability Testing",
			description:
				"We ensure that your product or website is easy to use and navigate. Our team conducts rigorous usability testing with real users to identify any potential pain points or areas for improvement. We then iterate on the design based on user feedback, ensuring a smooth and intuitive experience for everyone.",
			// href: "/",
			// cta: "Learn more",
			background: (
				<img
					src="/services/design/usability-testing.svg"
					alt="Usability Testing"
					className="absolute -right-0 -top-0 opacity-60"
				/>
			),
			className:
				"lg:col-start-1 lg:col-end-4 lg:row-start-5 lg:row-end-6",
		},
	];
	const itemList = {
		header: "How We Use AI",
		items: [
			{
				header: "User Research & Analysis",
				subheader:
					"We utilize AI to analyze user behavior, preferences, and pain points, providing valuable insights to inform our design decisions.",
				image: {
					url: "/icons/user-research-analysis.svg",
					alt: "User Research & Analysis",
				},
			},
			{
				header: "AI-Powered Prototyping",
				subheader:
					"We leverage AI tools to quickly generate interactive prototypes, allowing for early testing and validation of design concepts.",
				image: {
					url: "/icons/ai-powered-prototyping.svg",
					alt: "AI-Powered Prototyping",
				},
			},
			{
				header: "Personalized Recommendations",
				subheader:
					"Our AI algorithms can suggest design elements and layouts that are tailored to your target audience's preferences.",
				image: {
					url: "/icons/personalized-web-development.svg",
					alt: "Personalized Recommendations",
				},
			},
			{
				header: "Automated Usability Testing",
				subheader:
					"We use AI to simulate user interactions and identify potential usability issues before launch.",
				image: {
					url: "/icons/automated-usability-testing.svg",
					alt: "Automated Usability Testing",
				},
			},
			{
				header: "Continuous Optimization",
				subheader:
					"We monitor user behavior post-launch and utilize AI to suggest refinements for ongoing improvement.",
				image: {
					url: "/icons/automated-optimization.svg",
					alt: "Continuous Optimization",
				},
			},
		],
	};
	const twoByTwoConfig = {
		header: "Our UI/UX Design Services",
		items: [
			{
				header: "User Research & Analysis",
				subheader:
					"We believe that understanding your users is the foundation of great design. We conduct in-depth research using surveys, interviews, and analytics to gain insights into your target audience's behaviors, needs, and pain points. This information guides our design decisions, ensuring that your product or website truly resonates with your users.",
				image: {
					url: "/services/design/user-research-analysis.svg",
					alt: "User Research & Analysis",
				},
			},
			{
				header: "Information Architecture",
				subheader:
					"We create a clear and logical structure for your content and navigation. Our information architects will organize your information in a way that is intuitive and easy for users to find what they're looking for. We'll develop sitemaps, wireframes, and user flows to ensure a seamless and enjoyable user experience.",
				image: {
					url: "/services/design/information-architecture.svg",
					alt: "Information Architecture",
				},
			},
			{
				header: "Wireframing & Prototyping",
				subheader:
					"We bring your ideas to life with interactive prototypes. Our designers will create low-fidelity wireframes to visualize the basic structure and layout of your product or website. We'll then develop interactive prototypes that simulate the user experience, allowing you to test and refine the design before moving to the development phase.",
				image: {
					url: "/services/design/wireframing-prototyping.svg",
					alt: "Wireframing & Prototyping",
				},
			},
			{
				header: "Visual Design",
				subheader:
					"We create visually stunning interfaces that leave a lasting impression. Our talented designers will craft a unique aesthetic that aligns with your brand identity and appeals to your target audience. We'll use color, typography, imagery, and animation to create a cohesive and engaging visual experience.",
				image: {
					url: "/services/design/visual-design.svg",
					alt: "Visual Design",
				},
			},
			{
				header: "Usability Testing",
				subheader:
					"We ensure that your product or website is easy to use and navigate. Our team conducts rigorous usability testing with real users to identify any potential pain points or areas for improvement. We then iterate on the design based on user feedback, ensuring a smooth and intuitive experience for everyone.",
				image: {
					url: "/services/design/usability-testing.svg",
					alt: "Usability Testing",
				},
			},
		],
	};
	const twoColumnConfig = {
		header: "The ReCode Pros Difference",
		eyebrow: "What We Offer",
		items: [
			{
				header: "User-Centric Design",
				subheader:
					"We prioritize user needs and goals throughout the design process.",
			},
			{
				header: "Data-Driven Decision-Making",
				subheader:
					"We use AI-powered insights to inform our design choices.",
			},
			{
				header: "Iterative Approach",
				subheader:
					"We believe in continuous improvement and testing to refine the user experience.",
			},
			{
				header: "Creative & Technical Expertise",
				subheader:
					"Our team combines artistic vision with technical know-how to create exceptional designs that also function flawlessly.",
			},
		],
    };
    
	return (
		<main>
			<Hero
				image="/services/design/craft-exceptional-experiences.svg"
				title="Intuitive UI/UX Design: Craft Exceptional User Experiences"
				subtitle="AI-Powered Design for Seamless Interactions"
				hasCta
			/>
			<TextBlock
				text={[
					"In a world of endless digital choices, a seamless user experience can make all the difference. We create intuitive, engaging interfaces that guide users effortlessly through your product or website, leaving a lasting positive impression.",
				]}
			/>
			<ItemList
				header={itemList.header}
				items={itemList.items}
			/>
                <TwoColumnSection
                    header={twoColumnConfig.header}
                    eyebrow={twoColumnConfig.eyebrow}
                    items={twoColumnConfig.items}
                />
			<TwoByTwoGrid
				header={twoByTwoConfig.header}
				items={twoByTwoConfig.items}
			/>
			{/* <BentoGridSection features={features} /> */}
			<CTASection
				header="Ready to create a digital experience that your users will love?"
				subheader=""
				ctaLabel="Explore Our UI/UX Design Services"
			/>
		</main>
	);
};

export default DesignServicePage;
