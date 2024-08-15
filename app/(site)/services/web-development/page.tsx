import CTASection from "@/components/cta-section";
import { Hero } from "../../components/ui/Hero";
import { FourColumnIconSection } from "@/components/four-column-icon-section";
import { TwoByTwoGrid } from "@/components/two-by-two-grid";
import TextBlock from "@/components/text-block";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
	// @ts-ignore
	{ params, searchParams },
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		metadataBase: new URL("https://recodepros.dev"),
		title: "Web Development - Recode Pros",
		description:
			"Build your digital empire with Recode Pros' AI-driven web development services. We create stunning, high-performing websites and web apps tailored to your business needs.",
		openGraph: {
			title:
				"AI-Powered Web Development | Custom Websites & Web Apps",
			description:
				"Build your digital empire with Recode Pros' AI-driven web development services. We create stunning, high-performing websites and web apps tailored to your business needs.",
			url: `https://recodepros.dev/services/web-development`,
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
				"AI-Powered Web Development | Custom Websites & Web Apps",
			description:
				"Build your digital empire with Recode Pros' AI-driven web development services. We create stunning, high-performing websites and web apps tailored to your business needs.",
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

const WebDevelopmentServicePage = async () => {
	const fourColumnConfig = {
		header: "How We Use AI",
		items: [
			{
				header: "Personalized User Experiences",
				subheader:
					"We tailor the user journey based on individual preferences and behaviors, increasing engagement and conversions.",
				image: {
					url: "/icons/personalized-web-development.svg",
					alt: "Personalized User Experiences",
				},
			},
			{
				header: "Smart Content Recommendations",
				subheader:
					"We use AI to suggest relevant content to your visitors, keeping them on your site longer.",
				image: {
					url: "/icons/smart-content-recommendations.svg",
					alt: "Smart Content Recommendations",
				},
			},
			{
				header: "Predictive Analytics",
				subheader:
					"We anticipate user needs and proactively address them, enhancing customer satisfaction.",
				image: {
					url: "/icons/predictive-analytics.svg",
					alt: "Predictive Analytics",
				},
			},
			{
				header: "Automated Optimization",
				subheader:
					"We continuously refine your website's performance using AI-powered tools, ensuring optimal speed and functionality.",
				image: {
					url: "/icons/automated-optimization.svg",
					alt: "Automated Optimization",
				},
			},
		],
    };
    const twoColumnConfig = {
			header: "Our Web Development Services",
			items: [
				{
					header: "Custom Website Design",
					subheader:
						"We don't believe in cookie-cutter solutions. Our team will work closely with you to understand your brand, target audience, and goals, crafting a unique website that visually captures your essence and engages visitors. We use AI-powered tools to analyze user behavior and preferences, ensuring your site is not only beautiful but also intuitive and easy to navigate. From captivating visuals to seamless user flows, your custom website will leave a lasting impression.",
					image: {
						url: "/services/web-development/custom-website-design.svg",
						alt: "Custom Website Design",
					},
				},
				{
					header: "E-commerce Development",
					subheader:
						"Launch your online store with confidence. We build high-performing e-commerce platforms that are visually appealing, user-friendly, and optimized for conversions. Our AI-powered solutions can help you with inventory management, product recommendations, and dynamic pricing, ensuring your customers have a seamless shopping experience. We'll also implement secure payment gateways and robust security measures to protect your customers' data and your business.",
					image: {
						url: "/services/web-development/e-commerce-development.svg",
						alt: "E-commerce Development",
					},
				},
				{
					header: "Web Application Development",
					subheader:
						"Need a custom web application tailored to your unique business needs? Our team excels at developing robust, scalable web applications that streamline your operations, enhance productivity, and drive innovation. Whether you need a customer relationship management (CRM) system, a project management tool, or a data visualization platform, we'll leverage AI to create a solution that empowers your team and delivers tangible results.",
					image: {
						url: "/services/web-development/web-app-development.svg",
						alt: "Web Application Development",
					},
				},
				{
					header: "Content Management Systems (CMS)",
					subheader:
						"Take control of your website's content with a user-friendly CMS. We'll help you choose the right platform (e.g., WordPress, Drupal, Contentful) and customize it to meet your specific needs. Our AI-powered CMS integrations can streamline content creation, automate publishing workflows, and even suggest personalized content recommendations for your visitors, ensuring your website remains fresh and engaging.",
					image: {
						url: "/services/web-development/content-management-systems.svg",
						alt: "Content Management Systems (CMS)",
					},
				},
			],
		};
	return (
		<main>
			<Hero
				image="/services/web-development/web-dev-header.svg"
				title="AI-Powered Web Development: Build Your Digital Empire"
				subtitle="Custom Websites & Web Apps That Drive Results"
				hasCta
			/>
			<TextBlock
				text={[
					"Your website is more than just an online brochure; it's your digital storefront, your 24/7 salesperson, and your brand ambassador. We leverage AI to craft websites that not only look stunning but also perform exceptionally.",
				]}
			/>
			<FourColumnIconSection
				header={fourColumnConfig.header}
				items={fourColumnConfig.items}
			/>
			<TwoByTwoGrid
				header={twoColumnConfig.header}
				items={twoColumnConfig.items}
			/>
			<CTASection
				header="Ready to transform your website into a powerful growth engine?"
				subheader=""
				ctaLabel="Get a Free Web Development Quote"
			/>
		</main>
	);
};

export default WebDevelopmentServicePage