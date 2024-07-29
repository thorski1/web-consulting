import CTASection from "@/components/cta-section";
import { FeaturedSection } from "@/components/featured-section";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(
	// @ts-ignore
	{ params, searchParams },
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		metadataBase: new URL(
			"https://new-portfolio-three-gamma.vercel.app"
		),
		title: "Expert Web Development & Consulting Services | ReCode Pros",
		description:
			"Transform your online presence with our expert web development and consulting services. Schedule a free consultation today!",
		openGraph: {
			title: "Expert Web Development & Consulting Services | ReCode Pros",
			description:
				"Transform your online presence with our expert web development and consulting services. Schedule a free consultation today!",
			url: `https://new-portfolio-three-gamma.vercel.app/`,
			siteName: "ReCode Pros",
			images: [
				{
					url: `https://new-portfolio-three-gamma.vercel.app/DKcTWlyZOE.png`, // Must be an absolute URL
					width: 800,
					height: 600,
				},
				{
					url: `https://new-portfolio-three-gamma.vercel.app/DKcTWlyZOE.png`, // Must be an absolute URL
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
			title: "Expert Web Development & Consulting Services | ReCode Pros",
			description:
				"Transform your online presence with our expert web development and consulting services. Schedule a free consultation today!",
			// siteId: "1012501",
			creator: "@SamThoyre",
			// creatorId: "1012501",
			images: [
				"https://new-portfolio-three-gamma.vercel.app/DKcTWlyZOE.png",
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

	return (
		<main>
			<section className="w-full py-6 xl:py-12">
				<div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
					<div className="space-y-3 text-center">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
							Transform Your Online Presence
						</h1>
						<p className="text-muted-foreground md:text-xl lg:text-2xl">
							Expert Web Development and Consulting Services
						</p>
					</div>
					<Link
						href="/schedule-consultation"
						className="text-center inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
						prefetch={false}
					>
						Schedule Your Free Consultation
					</Link>
				</div>
			</section>
			<section className="w-full py-6 xl:py-12">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
					<div className="space-y-3">
						<h2 className="text-2xl font-bold tracking-tighter md:text-3xl/tight">
							We are a leading web development and
							consulting company dedicated to helping
							businesses thrive online. Our team of experts
							offers a comprehensive range of services
							tailored to meet your unique needs.
						</h2>
					</div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
						<Image
							src="/screens.png"
							width="550"
							height="310"
							alt="web collaboration"
							className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center =w-full lg:order-last"
						/>
						<div className="flex flex-col justify-center space-y-4">
							<ul className="grid gap-6">
								<li>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">
											Web Development
										</h3>
										<p className="text-muted-foreground">
											Our team of experienced web developers
											create custom, responsive websites
											that are optimized for performance and
											user experience.
										</p>
									</div>
								</li>
								<li>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">
											Consulting
										</h3>
										<p className="text-muted-foreground">
											Our consultants provide expert
											guidance and strategic advice to help
											you achieve your business goals and
											maximize your online presence.
										</p>
									</div>
								</li>
								<li>
									<div className="grid gap-1">
										<h3 className="text-xl font-bold">
											Digital Marketing
										</h3>
										<p className="text-muted-foreground">
											We offer a range of digital marketing
											services, including SEO, PPC, social
											media, and content marketing, to drive
											traffic and generate leads.
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<FeaturedSection />
			<CTASection />
		</main>
	);
}
