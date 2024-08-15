import CTASection from "@/components/cta-section";
import { Hero } from "../../components/ui/Hero";
import { FourColumnIconSection } from "@/components/four-column-icon-section";
import { TwoColumnSection } from "@/components/two-column-section";
import { TwoByTwoGrid } from "@/components/two-by-two-grid";
import TextBlock from "@/components/text-block";
import { ItemList } from "@/components/item-list";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
	// @ts-ignore
	{ params, searchParams },
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		metadataBase: new URL("https://recodepros.dev"),
		title:
			"Consultation and Strategy Development - Recode Pros",
		description:
			"Unlock your business potential with Recode Pros' expert consultation and AI-driven strategies. Make informed decisions and achieve sustainable growth.",
		openGraph: {
			title:
				"AI-Powered Business Consulting | Data-Driven Strategies",
			description:
				"Unlock your business potential with Recode Pros' expert consultation and AI-driven strategies. Make informed decisions and achieve sustainable growth.",
			url: `https://recodepros.dev/services/strategy`,
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
				"AI-Powered Business Consulting | Data-Driven Strategies",
			description:
				"Unlock your business potential with Recode Pros' expert consultation and AI-driven strategies. Make informed decisions and achieve sustainable growth.",
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

const StrategyServicePage = async () => {
	const itemList = {
		header: "How We Use AI",
		items: [
			{
				header: "Data Analysis and Insights",
				subheader:
					"We leverage AI algorithms to analyze vast amounts of data from various sources, including market trends, competitor analysis, and customer behavior. This allows us to uncover hidden patterns and identify growth opportunities that you might have missed.",
				image: {
					url: "/icons/data-analysis-insights.svg",
					alt: "Data Analysis and Insights",
				},
			},
			{
				header: "Predictive Modeling",
				subheader:
					"Our AI models can forecast future trends and potential outcomes, helping you make proactive decisions and stay ahead of the curve.",
				image: {
					url: "/icons/predictive-modeling.svg",
					alt: "Predictive Modeling",
				},
			},
			{
				header: "Scenario Planning",
				subheader:
					"We use AI to simulate different scenarios and evaluate the potential impact of various strategies, enabling you to make informed choices with confidence.",
				image: {
					url: "/icons/scenario-planning.svg",
					alt: "Scenario Planning",
				},
			},
			{
				header: "Personalized Recommendations",
				subheader:
					"We leverage AI to tailor our recommendations to your specific business needs, goals, and resources.",
				image: {
					url: "/icons/personalized-recommendations.svg",
					alt: "Personalized Recommendations",
				},
			},
			{
				header: "Continuous Optimization",
				subheader:
					"Our AI-powered tools continuously monitor and analyze your progress, allowing us to adjust your strategies in real-time for maximum effectiveness.",
				image: {
					url: "/icons/continuous-optimization.svg",
					alt: "Continuous Optimization",
				},
			},
		],
	};

	const twoColumnConfig = {
		header: "The ReCode Pros Difference",
		eyebrow: "What We Offer",
		items: [
			{
				header: "AI-Driven Insights",
				subheader:
					"We leverage the power of AI to provide you with deeper insights and more accurate predictions than traditional consulting methods.",
			},
			{
				header: "Holistic Approach",
				subheader:
					"We don't just focus on one aspect of your business. We consider the entire ecosystem to develop comprehensive strategies that address your unique challenges and opportunities.",
			},
			{
				header: "Proven Expertise",
				subheader:
					"Our team of experienced consultants has a track record of helping businesses across various industries achieve their digital goals.",
			},
			{
				header: "Personalized Guidance",
				subheader:
					"We take the time to understand your business inside and out, tailoring our recommendations to your specific needs and objectives.",
			},
			{
				header: "Commitment to Results",
				subheader:
					"We're not just advisors; we're partners in your success. We're dedicated to helping you achieve tangible, measurable results that drive your business forward.",
			},
		],
	};
	const twoByTwoConfig = {
		header: "Our Consultation & Strategy Services",
		items: [
			{
				header: "Digital Transformation Strategy",
				subheader:
					"We'll collaborate with you to develop a comprehensive roadmap for digital transformation, leveraging AI-powered insights to align your technology and marketing efforts seamlessly with your overall business goals.",
				image: {
					url: "/services/strategy/digital-transformation-strategy.svg",
					alt: "Digital Transformation Strategy",
				},
			},
			{
				header: "Growth Strategy Development",
				subheader:
					"We'll harness the power of AI to identify and prioritize high-impact growth opportunities, crafting actionable plans and providing hands-on guidance to ensure successful implementation and sustainable growth.",
				image: {
					url: "/services/strategy/growth-strategy-development.svg",
					alt: "Growth Strategy Development",
				},
			},
			{
				header: "Technology Assessment & Roadmap",
				subheader:
					"Our AI-driven analysis will evaluate your existing technology stack, identifying areas for improvement and recommending cutting-edge solutions to optimize your operations, enhance efficiency, and fuel innovation.",
				image: {
					url: "/services/strategy/technology-assessment-roadmap.svg",
					alt: "Technology Assessment & Roadmap",
				},
			},
			{
				header: "Visual Design",
				subheader:
					"We create visually stunning interfaces that leave a lasting impression. Our talented designers will craft a unique aesthetic that aligns with your brand identity and appeals to your target audience. We'll use color, typography, imagery, and animation to create a cohesive and engaging visual experience.",
				image: {
					url: "/services/strategy/visual-design.svg",
					alt: "Visual Design",
				},
			},
			{
				header: "Competitive Analysis",
				subheader:
					"We'll go beyond surface-level observations, utilizing AI to conduct in-depth competitive analysis, uncovering hidden strengths and weaknesses to help you gain a decisive edge in the market.",
				image: {
					url: "/services/strategy/competitive-analysis.svg",
					alt: "Usability Testing",
				},
			},
			{
				header: "Market Research & Insights",
				subheader:
					"We'll delve deep into your target market using AI-powered tools, identifying key trends, consumer behaviors, and untapped opportunities to inform your marketing and product strategies.",
				image: {
					url: "/services/strategy/market-research-insights.svg",
					alt: "Market Research & Insights",
				},
			},
		],
	};
	return (
		<main>
			<Hero
				image="/services/strategy/strategy-hero.svg"
				title="Elevate Your Business with AI-Powered Strategy"
				subtitle="Data-Driven Insights for Informed Decision-Making"
				hasCta
			/>
			<TextBlock
				text={[
					"In today's rapidly evolving digital landscape, making informed decisions is crucial for business success. Our AI-powered consultation and strategy development services empower you with data-driven insights, expert guidance, and actionable plans to navigate the complexities of the digital world and achieve your goals.",
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
				header="Ready to unlock your business's full potential?"
				subheader=""
				ctaLabel="Schedule a Consultation"
			/>
		</main>
	);
};

export default StrategyServicePage;