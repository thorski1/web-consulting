import CTASection from "@/components/cta-section";
import { Hero } from "../../components/ui/Hero";
import { FourColumnIconSection } from "@/components/four-column-icon-section";
import { TwoColumnSection } from "@/components/two-column-section";
import { TwoByTwoGrid } from "@/components/two-by-two-grid";
import TextBlock from "@/components/text-block";
import { ItemList } from "@/components/item-list";

const SEOServicePage = async () => {
	const itemList = {
		header: "How We Use AI",
		items: [
			{
				header: "Data-Driven Keyword Research",
				subheader:
					"Our AI algorithms analyze search trends and competition to identify the most valuable keywords for your industry and target audience.",
				image: {
					url: "/icons/smart-content-recommendations.svg",
					alt: "Data-Driven Keyword Research",
				},
			},
			{
				header: "Intelligent Content Optimization",
				subheader:
					"We use AI to optimize your website's content, ensuring it's not only engaging for humans but also optimized for search engine crawlers.",
				image: {
					url: "/icons/intelligent-content-optimization.svg",
					alt: "Intelligent Content Optimization",
				},
			},
			{
				header: "Automated Technical Audits",
				subheader:
					"Our AI-powered tools perform in-depth technical audits, identifying and fixing issues that hinder your search rankings.",
				image: {
					url: "/icons/automated-technical-audits.svg",
					alt: "Automated Technical Audits",
				},
			},
			{
				header: "Predictive Analytics",
				subheader:
					"We use AI to forecast trends and anticipate changes in search algorithms, keeping your SEO strategy ahead of the curve.",
				image: {
					url: "/icons/predictive-analytics.svg",
					alt: "Predictive Analytics",
				},
			},
			{
				header: "Performance Tracking & Reporting",
				subheader:
					"Our AI-driven dashboards provide real-time insights into your SEO performance, allowing for continuous optimization and improvement.",
				image: {
					url: "/icons/performance-tracking-reporting.svg",
					alt: "Performance Tracking & Reporting",
				},
			},
		],
	};
	const twoColumnConfig = {
		header: "The ReCode Pros Difference",
		eyebrow: "What We Offer",
		items: [
			{
				header: "AI-Powered Expertise",
				subheader:
					"Our team of SEO experts combines deep knowledge with the latest AI tools to deliver exceptional results.",
			},
			{
				header: "Proven Track Record",
				subheader:
					"We have a history of helping businesses achieve higher rankings, increased traffic, and improved conversions through our SEO strategies.",
			},
			{
				header: "Tailored Solutions",
				subheader:
					"We understand that every business is unique. We create customized SEO plans that align with your specific goals and budget.",
			},
			{
				header: "Transparent Reporting",
				subheader:
					"We provide regular reports and transparent communication, keeping you informed of our progress and results.",
			},
		],
	};
	const twoByTwoConfig = {
		header: "Our SEO Services",
		items: [
			{
				header: "Technical SEO",
				subheader:
					"We lay a solid foundation for your website's search engine visibility. Our technical SEO experts conduct in-depth audits to identify and resolve any issues that might hinder search engine crawlers from accessing and indexing your site. We'll optimize your site's speed, mobile responsiveness, and overall technical health, ensuring a seamless user experience and maximum search engine friendliness.",
				image: {
					url: "/services/seo/technical-seo.svg",
					alt: "Technical SEO",
				},
			},
			{
				header: "On-Page SEO",
				subheader:
					"We craft content that resonates with both your audience and search engines. Our team of SEO specialists will conduct thorough keyword research, optimize your meta tags and headings, and refine your content structure for maximum relevance and visibility. We'll also analyze your internal linking structure, ensuring that search engines can easily crawl and understand your website's hierarchy.",
				image: {
					url: "/services/seo/on-page-seo.svg",
					alt: "On-Page SEO",
				},
			},
			{
				header: "Off-Page SEO",
				subheader:
					"We build your website's authority and reputation. Our off-page SEO strategies focus on earning high-quality backlinks from reputable websites, engaging in strategic link-building campaigns, and monitoring your brand's online presence. We'll help you establish your website as a trusted source of information in your industry, driving organic traffic and improving your search rankings.",
				image: {
					url: "/services/seo/off-page-seo.svg",
					alt: "Off-Page SEO",
				},
			},
			{
				header: "Local SEO",
				subheader:
					"Reach customers in your area with targeted local SEO. We'll optimize your Google My Business profile, build local citations, and ensure your business appears in relevant local search results. We'll also help you gather and manage online reviews, building trust and credibility with potential customers.",
				image: {
					url: "/services/seo/local-seo.svg",
					alt: "Local SEO",
				},
			},
			{
				header: "Content Marketing",
				subheader:
					"Attract and engage your audience with valuable content. Our content marketing experts will develop a data-driven content strategy that aligns with your business goals and resonates with your target audience. We'll create high-quality blog posts, articles, infographics, and other content assets that inform, educate, and inspire your readers, establishing you as a thought leader in your industry.",
				image: {
					url: "/services/seo/content-marketing.svg",
					alt: "Content Marketing",
				},
			},
		],
	};

	return (
		<main>
			<Hero
				image="/services/seo/seo-hero.svg"
				title="Intelligent SEO Optimization: Dominate Search Results"
				subtitle="AI-Driven Strategies for Organic Growth"
				hasCta
			/>
			<TextBlock
				text={[
					"In today's crowded digital landscape, your website needs to stand out. Our AI-powered SEO services leverage cutting-edge technology to boost your visibility, attract qualified traffic, and fuel your business growth.",
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
				header="Ready to dominate search results and unleash your website's full potential?"
				subheader=""
				ctaLabel="Request a Free SEO Audit"
			/>
		</main>
	);
};

export default SEOServicePage;
