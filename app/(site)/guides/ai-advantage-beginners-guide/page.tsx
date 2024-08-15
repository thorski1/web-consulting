import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

export async function generateMetadata(
	// @ts-ignore
	{ params, searchParams },
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		metadataBase: new URL("https://recodepros.dev"),
		title: "Contact - Recode Pros",
		description:
			"Ready to transform your digital presence? Contact Recode Pros today for a free consultation and discover how our AI-powered solutions can help your business thrive.",
		openGraph: {
			title:
				"Contact Recode Pros | Get a Free Consultation",
			description:
				"Ready to transform your digital presence? Contact Recode Pros today for a free consultation and discover how our AI-powered solutions can help your business thrive.",
			url: `https://recodepros.dev/guides/ai-advantage-beginners-guide`,
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
				"Contact Recode Pros | Get a Free Consultation",
			description:
				"Ready to transform your digital presence? Contact Recode Pros today for a free consultation and discover how our AI-powered solutions can help your business thrive.",
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

export default function ContactPage() {
	return (
		<main>
			<section className="w-full py-6 lg:py-12">
				<div className="container px-4 md:px-6 text-center">
					<div className="max-w-5xl mx-auto space-y-6">
						<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-muted-foreground">
							The AI Advantage: A Beginner's Guide to
							Leveraging Artificial Intelligence for
							Business Growth
						</h1>
						<p className="text-xl md:text-2xl text-muted-foreground">
							Demystify AI and Discover its Potential for
							Your Business
						</p>
						<p className="text-lg md:text-xl text-muted-foreground">
							Understand AI, use it for web development,
							digital marketing, and UX design, make
							data-driven decisions, and implement AI in
							your business.
						</p>
						<Link
							href="#"
							className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
							prefetch={false}
						>
							Get My Free Guide
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
