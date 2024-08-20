import CTASection from '@/components/cta-section';
import { getBlogs, getPostsByTag, getUniqueTags } from '@/sanity/sanity.query';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react'
import { BookOpenIcon } from "lucide-react";
import TextBlock from '@/components/text-block';
import ShineBorder from '@/components/magicui/shine-border';

export async function generateMetadata(
	// @ts-ignore
	{ params, searchParams },
	parent: ResolvingMetadata
): Promise<Metadata> {
	return {
		metadataBase: new URL("https://recodepros.dev"),
		title: "Blog - Recode Pros",
		description:
			"Stay informed and inspired with the latest insights on AI, web development, and digital marketing from the experts at Recode Pros.",
		openGraph: {
			title:
				"Recode Pros Blog | Insights on AI, Web & Marketing",
			description:
				"Stay informed and inspired with the latest insights on AI, web development, and digital marketing from the experts at Recode Pros.",
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
				"Recode Pros Blog | Insights on AI, Web & Marketing",
			description:
				"Stay informed and inspired with the latest insights on AI, web development, and digital marketing from the experts at Recode Pros.",
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

const BlogHomepage = async () => {
	const posts = await getBlogs()
	const tags: { name: string; excerpt: string }[] = await getUniqueTags()
  return (
		<main>
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-4xl font-bold text-center">
					Insights & Inspiration for the AI-Driven Business
				</h1>
				<TextBlock
					text={[
						"Welcome to our blog, where we share our expertise, insights, and latest developments in the world of AI-powered web solutions. Stay informed, get inspired, and learn how to leverage AI to take your business to new heights.",
					]}
				/>

				<div className="grid md:grid-cols-2 gap-8 mb-12">
					<div>
						<h2 className="text-2xl font-semibold mb-4">
							Latest Articles
						</h2>
						<div className="space-y-4">
							{posts.map((post: any, i: number) => (
								<ShineBorder
									key={i}
									borderWidth={3}
									className="relative flex h-auto w-full flex-col items-start overflow-hidden border md:shadow-xl bg-muted-foreground shadow-md rounded-lg p-4"
									color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
								>
									<h3 className="text-xl font-semibold mb-2 text-background">
										{post.title}
									</h3>
									<p className="text-background mb-2">
										{post.excerpt}
									</p>
									<a
										href={`/blog/${post.slug}`}
										className="z-10 text-blue-600 hover:underline text-left"
									>
										Read more
									</a>
								</ShineBorder>
							))}
						</div>
					</div>
					<div>
						<h2 className="text-2xl font-semibold mb-4">
							Popular Topics
						</h2>
						<div className="grid grid-cols-2 gap-4">
						  {tags.map((topic: { name: string; excerpt: string}, i: number) => (
								<ShineBorder
									key={i}
									borderWidth={3}
									className="relative flex h-auto w-full flex-col items-start overflow-hidden border md:shadow-xl bg-muted-foreground shadow-md rounded-lg p-4"
									color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
								>
									<h3 className="text-lg font-semibold mb-2 text-background">
										{topic.name}
									</h3>
									<a
										href={`/blog/tags/${topic.name.split(" ").join("-")}`}
										className="z-10 text-blue-600 hover:underline"
									>
										Explore articles
									</a>
								</ShineBorder>
							))}
						</div>
					</div>
				</div>
							{/* TODO: SET THIS UP */}
				{/* <div className="bg-muted-foreground shadow-md rounded-lg p-6 mb-8">
					<h2 className="text-2xl font-semibold mb-2 text-background">
						Subscribe to Our Newsletter
					</h2>
					<p className="text-background mb-4">
						Get the latest AI trends and insights delivered
						straight to your inbox.
					</p>
					<form className="flex gap-2">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<button
							type="submit"
							className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>
							Subscribe Now
						</button>
					</form>
				</div> */}
				{/* TODO: SET THIS UP */}
				{/* <div className="bg-muted-foreground shadow-md rounded-lg p-6">
					<h2 className="text-2xl font-semibold mb-2 flex items-center text-background">
						<BookOpenIcon className="mr-2 text-background" />
						Free Resources
					</h2>
					<p className="text-gray-600 mb-4">
						Enhance your AI knowledge with our collection of
						free e-books, guides, and checklists on various
						AI topics. These resources are designed to help
						you stay ahead in the rapidly evolving world of
						AI technology.
					</p>
					<button className="px-4 py-2 border-popover border-2 text-popover font-bold rounded-md hover:bg-popover/80 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
						Get Free Resources
					</button>
				</div> */}
			</div>
			<CTASection />
		</main>
	);
}

export default BlogHomepage