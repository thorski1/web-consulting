import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";
import { Metadata, ResolvingMetadata } from "next";
import { Hero } from "../components/ui/Hero";

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
	const profile: ProfileType[] = await getProfile();

	return (
		<main>
			<Hero
				title="Welcome to ReCode Pros - Your Partner in Digital Success"
				subtitle="At ReCode Pros, our mission is to empower businesses with cutting-edge web solutions that drive growth and innovation."
				hasCta={false}
			/>
			<section className="w-full py-6 xl:py-12">
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
						<div className="flex flex-col justify-center space-y-4">
							<div className="grid gap-1">
								<h3 className="text-xl font-bold">
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
						<img
							src="/people-lightbulb.png"
							width="550"
							height="310"
							alt="Our Founders"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
						/>
					</div>
				</div>
			</section>
			<section className="w-full py-6 xl:py-12">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center pb-6">
					Our Values
				</h2>
				<div className="container grid items-start justify-center gap-8 px-4 md:px-6 lg:grid-cols-3">
					<div className="space-y-4">
						<h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
							Commitment to Excellence
						</h3>
						<p className="text-muted-foreground">
							We are committed to delivering top-notch web
							solutions that meet the highest standards of
							quality and performance. Our work is driven by
							a dedication to excellence in every project.
						</p>
					</div>
					<div className="space-y-4">
						<h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
							Customer-Centric Approach
						</h3>
						<p className="text-muted-foreground">
							At [Your Company Name], our clients are at the
							heart of everything we do. We take the time to
							understand your unique needs and tailor our
							services to help you achieve your goals.
						</p>
					</div>
					<div className="space-y-4">
						<h3 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
							Innovation and Adaptability
						</h3>
						<p className="text-muted-foreground">
							In the ever-evolving digital landscape,
							innovation is key. We stay ahead of the curve
							by embracing the latest technologies and
							trends, ensuring that our clients benefit from
							cutting-edge solutions.
						</p>
					</div>
				</div>
			</section>
			<section className="w-full py-6 xl:py-12">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-6 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Comprehensive Web Consulting Services
							</h2>
							<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Our team of experts offers a wide range of
								web consulting services to help your
								business succeed online. From strategy to
								implementation, we&apos;ve got you covered.
							</p>
						</div>
					</div>
					<div className="mx-auto grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
						<div className="grid gap-4">
							<div className="bg-accent h-12 rounded-md p-4 flex items-center justify-center">
								<CodeIcon className="w-6 h-6 text-primary-foreground" />
							</div>
							<div>
								<h3 className="text-xl font-bold">
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
						<div className="grid gap-4">
							<div className="bg-accent-foreground h-12 rounded-md p-4 flex items-center justify-center">
								<SearchIcon className="w-6 h-6 text-accent-foreground" />
							</div>
							<div>
								<h3 className="text-xl font-bold">
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
						<div className="grid gap-4">
							<div className="bg-secondary h-12 rounded-md p-4 flex items-center justify-center">
								<Megaphone className="w-6 h-6 text-accent-foreground" />
							</div>
							<div>
								<h3 className="text-xl font-bold">
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
						<div className="grid gap-4">
							<div className="bg-secondary-foreground h-12 bg-success rounded-md p-4 flex items-center justify-center">
								<BrushIcon className="w-6 h-6 text-secondary-foreground" />
							</div>
							<div>
								<h3 className="text-xl font-bold">
									UX/UI Design
								</h3>
								<p className="text-muted-foreground">
									Create exceptional digital experiences
									with our UX/UI design services. We focus
									on crafting intuitive and engaging
									interfaces that enhance user satisfaction
									and drive conversions. Our process
									includes wireframing, prototyping, user
									testing, and visual design to ensure a
									seamless user journey.
								</p>
							</div>
						</div>
						<div className="grid gap-4">
							<div className="bg-muted h-12 rounded-md p-4 flex items-center justify-center">
								<PresentationIcon className="w-6 h-6 text-warning-foreground" />
							</div>
							<div>
								<h3 className="text-xl font-bold">
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
			</section>
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