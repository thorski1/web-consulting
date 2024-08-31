import CTASection from "@/components/cta-section";
import { Hero } from "../../components/ui/Hero";
import { TwoColumnSection } from "@/components/two-column-section";
import { TwoByTwoGrid } from "@/components/two-by-two-grid";
import TextBlock from "@/components/text-block";
import { ItemList } from "@/components/item-list";
import { Metadata, ResolvingMetadata } from "next";
import HeroNoImage from "@/components/hero-no-image";

export async function generateMetadata(
	// @ts-ignore
	{ params, searchParams },
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		metadataBase: new URL("https://recodepros.dev"),
		title: "Digital Marketing - Recode Pros",
		description:
			"Connect with your ideal customers through Recode Pros' AI-powered digital marketing services. We create tailored campaigns that deliver results.",
		openGraph: {
			title:
				"Personalized Digital Marketing | AI-Driven Campaigns",
			description:
				"Connect with your ideal customers through Recode Pros' AI-powered digital marketing services. We create tailored campaigns that deliver results.",
			url: `https://recodepros.dev/services/digital-marketing`,
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
				"Personalized Digital Marketing | AI-Driven Campaigns",
			description:
				"Connect with your ideal customers through Recode Pros' AI-powered digital marketing services. We create tailored campaigns that deliver results.",
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

const DigitalMarketingServicePage = async () => {
	const itemList = {
		header: "How We Use AI",
		items: [
			{
				header: "Audience Segmentation",
				subheader:
					"We leverage AI to analyze customer data and segment your audience into distinct groups based on demographics, interests, and behaviors.",
				image: {
					url: "/icons/audience-segmentation-dark.svg",
					alt: "Audience Segmentation",
				},
			},
			{
				header: "Personalized Messaging",
				subheader:
					"Our AI tools craft tailored messages and offers that resonate with each audience segment, increasing engagement and conversions.",
				image: {
					url: "/icons/personalized-messaging-dark.svg",
					alt: "Personalized Messaging",
				},
			},
			{
				header: "Intelligent Ad Targeting",
				subheader:
					"We use AI to optimize your ad campaigns across various platforms, ensuring your ads reach the most relevant audience at the optimal time.",
				image: {
					url: "/icons/intelligent-ad-targeting-dark.svg",
					alt: "Intelligent Ad Targeting",
				},
			},
			{
				header: "Predictive Analytics",
				subheader:
					"We use AI to forecast campaign performance, identify potential bottlenecks, and make data-driven adjustments for better results.",
				image: {
					url: "/icons/predictive-analytics-dark.svg",
					alt: "Predictive Analytics",
				},
			},
			{
				header: "Automated Optimization",
				subheader:
					"Our AI-powered tools continuously monitor and optimize your campaigns, maximizing efficiency and ensuring your budget is used effectively.",
				image: {
					url: "/icons/automated-optimization-dark.svg",
					alt: "Automated Optimization",
				},
			},
		],
    };
    const twoColumnConfig = {
			header: "The ReCode Pros Difference",
			eyebrow: "What We Offer",
			items: [
				{
					header: "AI-Driven Personalization",
					subheader:
						"We deliver hyper-personalized experiences that resonate with your audience and drive action.",
				},
				{
					header: "Full-Funnel Marketing",
					subheader:
						"We create comprehensive strategies that cover the entire customer journey, from awareness to conversion and beyond.",
				},
				{
					header: "Data-Driven Optimization",
					subheader:
						"We track and measure every aspect of your campaigns, using data to continuously refine and improve your results.",
				},
				{
					header: "Results-Oriented Approach",
					subheader:
						"We focus on delivering tangible outcomes, whether it's increased website traffic, lead generation, or improved sales.",
				},
			],
		};
	const twoByTwoConfig = {
		header: "Our Digital Marketing Services",
		items: [
			{
				header: "Search Engine Marketing (SEM)",
				subheader:
					"Get immediate visibility and drive targeted traffic with our PPC advertising campaigns. We'll conduct in-depth keyword research, craft compelling ad copy, and optimize your campaigns for maximum ROI. Our AI-powered tools help us monitor ad performance, adjust bids in real-time, and identify new opportunities for growth.",
				image: {
					url: "/services/digital-marketing/search-engine-marketing.svg",
					alt: "Search Engine Marketing (SEM)",
				},
			},
			{
				header: "Social Media Marketing (SMM)",
				subheader:
					"Connect with your audience on the platforms they love. We'll develop a comprehensive social media strategy, create engaging content, and manage your social media presence across multiple channels. Our AI-powered tools help us analyze audience demographics and behaviors, allowing us to target your ads and content for maximum engagement and reach.",
				image: {
					url: "/services/digital-marketing/social-media-marketing.svg",
					alt: "Social Media Marketing (SMM)",
				},
			},
			{
				header: "Content Marketing",
				subheader:
					"Establish your brand as a thought leader and attract organic traffic with high-quality content. We'll develop a content strategy that aligns with your business goals, create informative blog posts, articles, and other content assets, and distribute them across relevant channels. Our AI tools help us identify trending topics, optimize content for search engines, and personalize content recommendations for your audience.",
				image: {
					url: "/services/digital-marketing/content-marketing.svg",
					alt: "Content Marketing",
				},
			},
			{
				header: "Email Marketing",
				subheader:
					"Nurture leads and build lasting relationships with your customers. We'll design eye-catching email templates, segment your audience for targeted messaging, and automate your email campaigns for maximum efficiency. Our AI-powered tools can help you personalize email content, optimize send times, and track campaign performance to improve results over time.",
				image: {
					url: "/services/digital-marketing/email-marketing.svg",
					alt: "Email Marketing",
				},
			},
			{
				header: "Display Advertising",
				subheader:
					"Increase brand awareness and reach a wider audience with visually appealing display ads. We'll create eye-catching banner ads, strategically place them on relevant websites, and optimize your campaigns for maximum visibility and engagement. Our AI tools can help us target the right audience, track ad performance, and make data-driven decisions to improve your results.",
				image: {
					url: "/services/digital-marketing/display-advertising.svg",
					alt: "Content Marketing",
				},
			},
		],
	};
	
	return (
		<div className="w-full">
			<HeroNoImage
				header="Personalized Digital Marketing: Connect with Your Ideal Customers"
				subheader="AI-Powered Campaigns for Maximum Impact"
				hasCta
			/>
			<TextBlock
				text={[
					"In the digital age, reaching the right audience with the right message is essential for business growth. Our AI-powered digital marketing services cut through the noise, deliver personalized experiences, and maximize your return on investment.",
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
			<CTASection
				header="Ready to supercharge your marketing efforts with AI?"
				subheader=""
				ctaLabel="Get Started with AI-Driven Marketing"
			/>
		</div>
	);
};

export default DigitalMarketingServicePage;
