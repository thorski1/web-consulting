import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import ShineBorder from "./magicui/shine-border";

export default function FeaturedBlogArticles({
	articles,
}: {
	articles: Post[];
	}) {
	return (
		<section className="w-full py-6 xl:py-9">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{articles.map((art, i) => (
					<ShineBorder
						key={i}
						borderWidth={3}
						color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
						className="relative flex h-auto w-full flex-col items-start overflow-hidden border md:shadow-xl bg-muted-foreground shadow-md rounded-lg p-4"
					>
						<a
							href={`/blog/${art.slug}`}
							className="z-10"
						>
							<Image
								src={art.coverImage!.image}
								width={640}
								height={360}
								alt={art.coverImage?.alt || ""}
								className="mb-4 aspect-video w-full rounded-md object-cover"
							/>
							<h3 className="mb-2 text-xl font-semibold text-background">
								{art.title}
							</h3>
							<div className="mb-4 flex flex-wrap gap-2">
								{art.tags?.map((tag, i) => (
									<Badge className="bg-background" variant="default" key={i}>
										{tag.name}
									</Badge>
								))}
							</div>
							<p className="mb-4 text-background">
								{art.excerpt?.slice(0,50)}...
							</p>
							<div className="z-10 text-background inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-background/80">
								Read more
								<ArrowRightIcon className="h-4 w-4" />
							</div>
						</a>
					</ShineBorder>
				))}
			</div>
		</section>
	);
}

function ArrowRightIcon(props: any) {
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
