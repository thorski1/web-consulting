"use client"

import React from "react";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import ShineBorder from "./magicui/shine-border";
import BlurFade from "./magicui/blur-fade";

/**
 * Props for the FeaturedBlogArticles component
 * @interface FeaturedBlogArticlesProps
 */
interface FeaturedBlogArticlesProps {
	/** Array of blog post objects to be featured */
	articles: Post[];
}

/**
 * FeaturedBlogArticles component for displaying a grid of featured blog articles
 * @param {FeaturedBlogArticlesProps} props - The props for the FeaturedBlogArticles component
 * @returns {JSX.Element} The rendered FeaturedBlogArticles component
 */
export default function FeaturedBlogArticles({ articles }: FeaturedBlogArticlesProps): JSX.Element {
	return (
		<section className="w-full py-6 xl:py-9 bg-gradient-1">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{articles.map((art, i) => (
						<BlurFade key={i} delay={0.1 * i} inView>
							<ShineBorder
								borderWidth={3}
								color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
								className="relative flex h-auto w-full flex-col items-start overflow-hidden border md:shadow-xl bg-card text-card-foreground shadow-md rounded-lg p-4"
							>
								<Link
									href={`/blog/${art.slug!.current}`}
									className="z-10 w-full"
								>
									<Image
										src={art.coverImage!.image}
										width={640}
										height={360}
										alt={art.coverImage?.alt || ""}
										className="mb-4 aspect-video w-full rounded-md object-cover"
									/>
									<h3 className="mb-2 text-xl font-semibold text-primary-foreground">
										{art.title}
									</h3>
									<div className="mb-4 flex flex-wrap gap-2">
										{art.tags?.map((tag, i) => (
											<Badge key={i} variant="secondary" className="bg-primary/10 text-primary-foreground">
												{tag.name}
											</Badge>
										))}
									</div>
									<p className="mb-4 text-primary-foreground/80">
										{art.excerpt?.slice(0, 50)}...
									</p>
									<div className="z-10 text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary/80">
										Read more
										<ArrowRightIcon className="h-4 w-4" />
									</div>
								</Link>
							</ShineBorder>
						</BlurFade>
					))}
				</div>
			</div>
		</section>
	);
}

/**
 * ArrowRightIcon component for displaying a right arrow icon
 * @param {React.SVGProps<SVGSVGElement>} props - The props for the SVG element
 * @returns {JSX.Element} The rendered ArrowRightIcon component
 */
function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
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
			<path d="M5 12h14" />
			<path d="m12 5 7 7-7 7" />
		</svg>
	);
}
