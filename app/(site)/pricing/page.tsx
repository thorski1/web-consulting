import ShineBorder from "@/components/magicui/shine-border";
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
			<section className="py-6 lg:py-12">
				<div className="mx-auto px-4 md:px-6">
					<div className="mx-auto max-w-3xl text-center">
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
							AI-Powered Solutions for Your Business
						</h1>
						<p className="mt-4 text-muted-foreground md:text-xl">
							Unlock the power of AI to transform your
							online presence and drive business growth.
						</p>
					</div>
				</div>
			</section>
			<section className="py-6 lg:py-12">
				<div className="container mx-auto px-4 md:px-6">
					<div className="grid grid-cols-1 gap-10 md:grid-cols-3">
						<ShineBorder
							borderWidth={3}
							className="rounded-lg text-background border bg-background shadow-sm flex flex-col justify-between items-start w-full"
							color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
						>
							<div className="flex-grow">
								<h2 className="text-2xl font-bold text-background">
									Small Business Starter Pack
								</h2>
								<p className="mt-2 text-background">
									Ideal for new or small businesses
								</p>
								<ul className="mt-6 space-y-4 text-background">
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Basic Website Development
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Basic SEO
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Social Media Setup & Consultation
									</li>
								</ul>
							</div>
							<div className="self-center mt-8 flex justify-between flex-col gap-4">
								<p className="text-xl text-center font-bold text-background">
									Starting at $4,500
								</p>
								<Link
									href="/schedule-consultation"
									className="inline-flex h-10 items-center justify-center rounded-md bg-popover px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
									prefetch={false}
								>
									Get started
								</Link>
							</div>
						</ShineBorder>
						<ShineBorder
							borderWidth={3}
							className="rounded-lg text-background border bg-background shadow-sm flex flex-col justify-between items-start w-full"
							color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
						>
							<div className="flex-grow">
								<h2 className="text-2xl font-bold text-background">
									AI-Powered Web Development
								</h2>
								<p className="mt-2  text-background">
									Tailored websites and web apps with
									AI-powered personalization and
									optimization
								</p>
								<ul className="mt-6 space-y-4 text-background">
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Custom website design
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Responsive design
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Basic SEO optimization
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										CMS integration
									</li>
								</ul>
							</div>
							<div className="self-center mt-8 flex justify-between flex-col gap-4">
								<p className="text-xl text-center font-bold text-background">
									Starting at $10,000
								</p>
								<Link
									href="/schedule-consultation"
									className="inline-flex h-10 items-center justify-center rounded-md bg-popover px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
									prefetch={false}
								>
									Get a quote
								</Link>
							</div>
						</ShineBorder>
						<ShineBorder
							borderWidth={3}
							className="rounded-lg text-background border bg-background shadow-sm flex flex-col justify-between items-start w-full"
							color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
						>
							<div className="flex-grow">
								<h2 className="text-2xl font-bold text-background">
									Enterprise AI Suite
								</h2>
								<p className="mt-2 text-background">
									Comprehensive AI-driven solutions for
									large businesses
								</p>
								<ul className="mt-6 space-y-4 text-background">
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Advanced website/web app development
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										AI-powered marketing automation
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Predictive analytics
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Dedicated support
									</li>
								</ul>
							</div>
							<div className="self-center mt-8 flex justify-between flex-col gap-4">
								<p className="text-xl text-center font-bold text-background">
									Custom (contact us)
								</p>
								<Link
									href="/schedule-consultation"
									className="inline-flex h-10 items-center justify-center rounded-md bg-popover px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
									prefetch={false}
								>
									Contact sales
								</Link>
							</div>
						</ShineBorder>
					</div>
				</div>
			</section>
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
