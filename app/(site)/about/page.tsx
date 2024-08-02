import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";
import { Metadata, ResolvingMetadata } from "next";
import { Hero } from "../components/ui/Hero";
import CTASection from "@/components/cta-section";
import TextBlock from "@/components/text-block";
import { ThreeFeatureSection } from "@/components/featured-section";
import { ItemList } from "@/components/item-list";
import { HeaderSection } from "@/components/header-section";

// export async function generateMetadata(
// 	// @ts-ignore
// 	{ params, searchParams },
// 	parent: ResolvingMetadata
// ): Promise<Metadata> {
// 	return {
// 		metadataBase: new URL(
// 			"https://new-portfolio-three-gamma.vercel.app"
// 		),
// 		title: "Free 10-Minute Web Development Consultation",
// 		description:
// 			"Schedule your free 10-minute consultation with our expert web developers. Discover how we can enhance your online presence and achieve your goals.",
// 		openGraph: {
// 			title: "Free 10-Minute Web Development Consultation",
// 			description:
// 				"Schedule your free 10-minute consultation with our expert web developers. Discover how we can enhance your online presence and achieve your goals.",
// 			url: `https://new-portfolio-three-gamma.vercel.app/about`,
// 			siteName: "ST Web Consulting",
// 			images: [
// 				{
// 					url: `https://new-portfolio-three-gamma.vercel.app/DKcTWlyZOE.png`, // Must be an absolute URL
// 					width: 800,
// 					height: 600,
// 				},
// 				{
// 					url: `https://new-portfolio-three-gamma.vercel.app/DKcTWlyZOE.png`, // Must be an absolute URL
// 					width: 1800,
// 					height: 1600,
// 					alt: "My custom alt",
// 				},
// 			],
// 			locale: "en-US",
// 			type: "website",
// 		},
// 		twitter: {
// 			card: "summary",
// 			title: "Free 10-Minute Web Development Consultation",
// 			description:
// 				"Schedule your free 10-minute consultation with our expert web developers. Discover how we can enhance your online presence and achieve your goals.",
// 			// siteId: "1012501",
// 			creator: "@SamThoyre",
// 			creatorId: "1012501",
// 			images: [
// 				"https://new-portfolio-three-gamma.vercel.app/DKcTWlyZOE.png",
// 			],
// 		},
// 		robots: {
// 			index: true,
// 			follow: true,
// 			nocache: false,
// 			googleBot: {
// 				index: true,
// 				follow: true,
// 				noimageindex: false,
// 			},
// 		},
// 	};
// }

export default async function About() {
	const threeFeatureConfig = {
		header: "What sets us apart?",
		items: [
			{
				header: "AI-First Philosophy",
				subheader:
					"We integrate AI into every aspect of our work, from website development and SEO to digital marketing and UI/UX design.",
				image: { url: "/ai-first-philosophy.svg", alt: "AI-First Philosophy" },
			},
			{
				header: "Personalized Attention",
				subheader:
					"We offer dedicated focus and personalized attention to each client, ensuring your vision is realized.",
				image: { url: "/personalized-attention.svg", alt: "Personalized Attention" },
			},
			{
				header: "Data-Driven Strategies",
				subheader:
					"We don't rely on guesswork. We use AI-powered analytics to make informed decisions that drive results.",
				image: { url: "data-driven-strategies.svg", alt: "Data-Driven Strategies" },
			},
		],
	};

	return (
		<main>
			<Hero
				title="The AI-Powered Approach to Digital Transformation"
				subtitle="Your Partner in Innovation and Growth"
				hasCta={false}
				image="/success-partner.svg"
			/>
			<TextBlock
				text={[
					"At ReCode Pros, we're not your typical web development and digital marketing agency. I'm Sam Thoyre, a passionate innovator fueled by a love for technology and a drive to help businesses thrive in the digital age.",
					"Our mission is simple: to empower your business with AI-driven solutions that deliver real, measurable results. We believe in the power of data, the efficiency of automation, and the limitless possibilities of artificial intelligence.",
				]}
			/>
			<ThreeFeatureSection
				header={threeFeatureConfig.header}
				items={threeFeatureConfig.items}
			/>
			{/* <section className="w-full py-6 xl:py-12">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl pb-6">
								Our Story
							</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Founded in 2024, our company was created
								with a vision to transform the digital
								landscape for businesses. While we&apos;re a
								new player in the industry, our team
								comprises seasoned professionals with a deep
								passion for web development and digital
								marketing.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
						<Image
							src="/experienced-professionals.svg"
							width="550"
							height="310"
							alt="Experienced Professionals"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
						/>
						<div className="flex flex-col justify-center space-y-4">
							<div className="grid gap-1">
								<h3 className="text-xl font-bold pb-4">
									Fresh Approach:
								</h3>
								<p className="text-muted-foreground">
									At ReCode Pros, we combine fresh
									perspectives with proven methodologies.
									Our team consists of experienced
									professionals who are not only skilled in
									web development and digital marketing but
									are also creative thinkers who embrace new
									challenges. We understand that each
									project is unique, and we pride ourselves
									on providing tailored solutions that align
									with our clients’ specific goals and
									visions. Our focus on collaboration
									ensures that we build strong, lasting
									relationships with our clients, fostering
									growth and success together.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<ItemList
				header={"Why AI Matters"}
				subheader={
					"Artificial Intelligence (AI) isn't just a buzzword; it's a game-changer for businesses in every industry. At Recode Pros, we harness the power of AI to give your business a competitive edge and drive unprecedented growth. Here's how:"
				}
				items={[
					{
						header: "Smarter Web Development:",
						subheader:
							"AI enables us to build websites and applications that are more than just pretty – they're intuitive, adaptive, and tailor-made for your users. Through machine learning, your site learns and improves over time, delivering personalized experiences that keep visitors coming back for more.",
						image: {
							url: "/icons/web-development.svg",
							alt: "web development icon",
						},
					},
					{
						header: "Targeted Digital Marketing",
						subheader:
							"Gone are the days of generic campaigns. AI allows us to dive deep into customer data, crafting laser-focused marketing strategies that resonate with your ideal audience. This means more engagement, higher conversions, and a better return on your investment.",
						image: {
							url: "/icons/digital-marketing.svg",
							alt: "digital marketing icon",
						},
					},
					{
						header: "Data-Driven Decision Making",
						subheader:
							"AI-powered analytics uncover hidden patterns and insights in your data, transforming raw information into actionable strategies. You'll make decisions based on facts, not guesswork, leading to smarter choices and better business outcomes.",
						image: {
							url: "/icons/seo.svg",
							alt: "Data-Driven Decision Making",
						},
					},
					{
						header:
							"Streamlined Processes and Increased Efficiency",
						subheader:
							"AI automates repetitive tasks, freeing up your valuable time and resources to focus on what matters most – growing your business.",
						image: {
							url: "/icons/project-design.svg",
							alt: "Processes",
						},
					},
					{
						header: "Enhanced Customer Experience",
						subheader:
							"AI-powered chatbots, personalized recommendations, and predictive analytics create a seamless and engaging customer experience, building loyalty and driving sales.",
						image: {
							url: "/icons/consulting-strategy.svg",
							alt: "Customer Experience",
						},
					},
				]}
			/>
			<section className="w-full py-6 xl:py-12">
				<HeaderSection header="Our Values" />
				<div className="container grid items-start justify-center gap-8 px-4 md:px-6 lg:grid-cols-3">
					<div className="space-y-4 text-center">
						<Image
							src="/icons/ribbon.svg"
							width="100"
							height="100"
							alt="ribbon icon"
							className="mx-auto overflow-hidden object-cover object-center w-32 fill-white"
						/>
						<h3 className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl">
							Commitment to Excellence
						</h3>
						<p className="text-muted-foreground text-left">
							We are committed to delivering top-notch web
							solutions that meet the highest standards of
							quality and performance. Our work is driven by
							a dedication to excellence in every project.
						</p>
					</div>
					<div className="space-y-4 text-center">
						<Image
							src="/icons/customer-centric.svg"
							width="100"
							height="100"
							alt="customer-centric icon"
							className="mx-auto overflow-hidden object-cover object-center w-32 fill-white"
						/>
						<h3 className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl">
							Customer-Centric Approach
						</h3>
						<p className="text-muted-foreground text-left">
							At ReCode Pros, our clients are at the heart
							of everything we do. We take the time to
							understand your unique needs and tailor our
							services to help you achieve your goals.
						</p>
					</div>
					<div className="space-y-4 text-center">
						<Image
							src="/icons/innovation-adaptability.svg"
							width="100"
							height="100"
							alt="lightbulb icon"
							className="mx-auto overflow-hidden object-cover object-center w-32 fill-white"
						/>
						<h3 className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl">
							Innovation and Adaptability
						</h3>
						<p className="text-muted-foreground text-left">
							In the ever-evolving digital landscape,
							innovation is key. We stay ahead of the curve
							by embracing the latest technologies and
							trends, ensuring that our clients benefit from
							cutting-edge solutions.
						</p>
					</div>
				</div>
			</section>
			{/* <section className="w-full py-6 xl:py-12">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-6 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
								Comprehensive Web Consulting Services
							</h2>
							<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Our team of experts offers a wide range of
								web consulting services to help your
								business succeed online. From strategy to
								implementation, we&apos;ve got you covered.
							</p>
						</div>
					</div>
					<div className="mx-auto grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
						<div className="flex gap-4 flex-col">
							<div className="rounded-md flex items-center justify-center">
								<Image
									src="/icons/web-development.svg"
									width="100"
									height="100"
									alt="web development icon"
									className="mx-auto overflow-hidden object-cover object-center w-32"
								/>
							</div>
							<div>
								<h3 className="text-xl font-bold pb-4">
									Web Development
								</h3>
								<p className="text-muted-foreground">
									Our skilled developers create custom,
									responsive websites and web applications
									tailored to your business needs. We use
									the latest technologies to ensure optimal
									performance and user experience.
								</p>
							</div>
						</div>
						<div className="flex gap-4 flex-col">
							<div className="rounded-md flex items-center justify-center">
								<Image
									src="/icons/seo.svg"
									width="100"
									height="100"
									alt="seo icon"
									className="mx-auto overflow-hidden object-cover object-center w-32"
								/>
							</div>
							<div>
								<h3 className="text-xl font-bold pb-4">
									Search Engine Optimization (SEO)
								</h3>
								<p className="text-muted-foreground">
									ncrease your visibility and attract more
									organic traffic with our comprehensive SEO
									services. We offer on-page and off-page
									optimization, keyword research, technical
									SEO audits, and link-building strategies
									to help your website rank higher in search
									engine results.
								</p>
							</div>
						</div>
						<div className="flex gap-4 flex-col">
							<div className="rounded-md flex items-center justify-center">
								<Image
									src="/icons/digital-marketing.svg"
									width="100"
									height="100"
									alt="digital marketing icon"
									className="mx-auto overflow-hidden object-cover object-center w-32"
								/>
							</div>
							<div>
								<h3 className="text-xl font-bold pb-4">
									Digital Marketing
								</h3>
								<p className="text-muted-foreground">
									Expand your reach and engage with your
									target audience through our digital
									marketing services. From social media
									marketing and pay-per-click (PPC)
									advertising to content marketing and email
									campaigns, we create tailored strategies
									that drive traffic and boost conversions.
								</p>
							</div>
						</div>
						<div className="flex gap-4 flex-col">
							<div className="rounded-md flex items-center justify-center">
								<Image
									src="/icons/project-design.svg"
									width="100"
									height="100"
									alt="digital marketing icon"
									className="mx-auto overflow-hidden object-cover object-center w-32"
								/>
								<BrushIcon className="w-6 h-6 text-secondary-foreground" />
							</div>
							<div>
								<h3 className="text-xl font-bold pb-4">
									UI/UX Design
								</h3>
								<p className="text-muted-foreground">
									Create exceptional digital experiences
									with our UI/UX design services. We focus
									on crafting intuitive and engaging
									interfaces that enhance user satisfaction
									and drive conversions. Our process
									includes wireframing, prototyping, user
									testing, and visual design to ensure a
									seamless user journey.
								</p>
							</div>
						</div>
						<div className="flex gap-4 flex-col">
							<div className="rounded-md flex items-center justify-center">
								<Image
									src="/icons/consulting-strategy.svg"
									width="100"
									height="100"
									alt="digital marketing icon"
									className="mx-auto overflow-hidden object-cover object-center w-32"
								/>
							</div>
							<div>
								<h3 className="text-xl font-bold pb-4">
									Consultation and Strategy Development
								</h3>
								<p className="text-muted-foreground">
									Transform your digital presence with our
									strategic consulting services. We provide
									digital strategy planning, brand strategy
									development, competitive analysis, and
									digital transformation consulting. Our
									goal is to help you align your digital
									initiatives with your business objectives,
									identify growth opportunities, and
									implement effective strategies for
									long-term success.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section> */}
			<CTASection
				header="Ready to experience the ReCode Pros difference?"
				subheader=""
			/>
		</main>
	);
}

function BrushIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
			<path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
		</svg>
	);
}
function PresentationIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M2 3h20" />
			<path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
			<path d="m7 21 5-5 5 5" />
		</svg>
	);
}


function CodeIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="16 18 22 12 16 6" />
			<polyline points="8 6 2 12 8 18" />
		</svg>
	);
}

function DatabaseIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<ellipse cx="12" cy="5" rx="9" ry="3" />
			<path d="M3 5V19A9 3 0 0 0 21 19V5" />
			<path d="M3 12A9 3 0 0 0 21 12" />
		</svg>
	);
}

function SearchIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m13 13.5 2-2.5-2-2.5" />
			<path d="m21 21-4.3-4.3" />
			<path d="M9 8.5 7 11l2 2.5" />
			<circle cx="11" cy="11" r="8" />
		</svg>
	);
}

function Megaphone(props: any) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M3 9v6h2l7 3V6L5 9H3z"></path>
			<path d="M13 9a4 4 0 0 1 0 6"></path>
			<line x1="22" y1="4" x2="22" y2="20"></line>
		</svg>
	);
}