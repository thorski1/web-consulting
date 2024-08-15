import CTASection from "@/components/cta-section";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { Hero } from "./components/ui/Hero";
import { ItemList } from "@/components/item-list";
import { TwoColumnSection } from "@/components/two-column-section";
import TextBlock from "@/components/text-block";
import { HeaderSection } from "@/components/header-section";

export async function generateMetadata(
	// @ts-ignore
	{ params, searchParams },
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		metadataBase: new URL("https://recodepros.dev"),
		title: "Recode Pros",
		description:
			"Unlock your business's full potential with Recode Pros' AI-driven web development, SEO, and digital marketing services. We craft custom solutions that deliver measurable results.",
		openGraph: {
			title:
				"Recode Pros | AI-Powered Web Solutions for Business Growth",
			description:
				"Unlock your business's full potential with Recode Pros' AI-driven web development, SEO, and digital marketing services. We craft custom solutions that deliver measurable results.",
			url: `https://recodepros.dev/blog`,
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
				"Recode Pros | AI-Powered Web Solutions for Business Growth",
			description:
				"Unlock your business's full potential with Recode Pros' AI-driven web development, SEO, and digital marketing services. We craft custom solutions that deliver measurable results.",
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

export default async function Home() {
	// const profile: ProfileType[] = await getProfile();
	const itemListConfig = {
		header: "Our AI-Powered Services",
		items: [
			{
				image: {
					url: "/icons/web-development.svg",
					alt: "web development",
				},
				header: "Web Development",
				slug: "/services/web-development",
				subheader:
					"We build lightning-fast, responsive websites and web apps that are as beautiful as they are functional.",
			},
			{
				image: {
					url: "/icons/seo.svg",
					alt: "seo",
				},
				header: "SEO",
				slug: "/services/seo",
				subheader:
					"We don't just play the SEO game; we rewrite the rules. Our AI-driven SEO strategies get your website seen by the right people, at the right time.",
			},
			{
				image: {
					url: "/icons/digital-marketing.svg",
					alt: "digital marketing",
				},
				header: "Digital Marketing",
				slug: "/services/digital-marketing",
				subheader:
					"We don't just broadcast your message; we personalize it. Our AI-powered marketing campaigns reach your ideal customers with pinpoint accuracy.",
			},
			{
				image: {
					url: "/icons/project-design.svg",
					alt: "UI/UX Design",
				},
				header: "UI/UX Design",
				slug: "/services/design",
				subheader:
					"We don't just create interfaces; we craft experiences. Our AI-backed UI/UX designs are intuitive, engaging, and keep users coming back for more.",
			},
			{
				image: {
					url: "/icons/consulting-strategy.svg",
					alt: "Consultation and Strategy",
				},
				header: "Consultation & Strategy",
				slug: "/services/strategy",
				subheader:
					"We don't just advise; we empower. Our strategic consultation leverages AI to unlock your business's full potential, driving business growth through data-driven strategies.",
			},
		],
	};

	const twoColumnConfig = {
		header: "What Sets Us Apart",
		eyebrow: "Key Differentiators",
		items: [
			{
				header: "Agile & Adaptive",
				subheader:
					"We embrace change and leverage AI to respond quickly to market shifts.",
			},
			{
				header: "Transparent & Collaborative",
				subheader:
					"We believe in open communication and working hand-in-hand with our clients.",
			},
			{
				header: "Client-Focused",
				subheader:
					"Your success is our success. We measure our performance by the results we deliver for you.",
			},
		],
	};

	return (
		<main>
			<Hero
				title={"AI-Powered Web Solutions That Drive Growth"}
				image="/transform-online-presence.svg"
				subtitle="Harnessing the Power of AI for Unparalleled Digital Success"
			/>
			<TextBlock
				text={[
					"In today's fast-paced digital world, your business needs more than just a website; it needs an online powerhouse. At ReCode Pros, we harness the power of artificial intelligence and machine learning to create custom websites and web applications that accelerate your growth.",
				]}
			/>
			<section className="w-full py-6 xl:py-12">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
					<HeaderSection header="Why Choose ReCode Pros?" />
					<div className="mx-auto grid max-w-5xl items-center gap-6 pb-12 lg:grid-cols-2 lg:gap-12">
						<Image
							src="/services-rendered.svg"
							width="550"
							height="310"
							alt="web collaboration"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center =w-full"
						/>
						<div className="flex flex-col justify-center space-y-4">
							<ul className="grid gap-6">
								<li>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">
											AI-First Approach
										</h3>
										<p className="text-muted-foreground text-left">
											We&apos;re not just tech-savvy;
											we&apos;re AI-obsessed. Our team uses
											cutting-edge AI tools and data-driven
											insights to optimize every aspect of
											your web presence, from design to
											marketing.
										</p>
									</div>
								</li>
								<li>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">
											Data-Driven Decisions
										</h3>
										<p className="text-muted-foreground text-left">
											We don&apos;t just guess; we analyze.
											Our AI-powered solutions give you the
											edge, ensuring your website works
											smarter, not harder.
										</p>
									</div>
								</li>
								<li>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">
											Proven Results
										</h3>
										<p className="text-muted-foreground text-left">
											We&apos;re not just another agency; we&apos;re
											your growth partner. Our track record
											speaks for itself—we deliver
											measurable results that impact your
											bottom line.
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<ItemList
				header={itemListConfig.header}
				items={itemListConfig.items}
			/>
			<TwoColumnSection
				header={twoColumnConfig.header}
				eyebrow={twoColumnConfig.eyebrow}
				items={twoColumnConfig.items}
			/>
			<CTASection />
		</main>
	);
}
