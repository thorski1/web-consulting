import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default function FeaturedBlogArticles({
	articles,
}: {
	articles: Post[];
}) {
	return (
		<section className="w-full py-6 xl:py-9">
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{articles.map((art) => (
					<a
						key={art._id}
						href={`/blog/${art.slug}`}
						className="rounded-lg border bg-background p-4 shadow-sm transition-all hover:shadow-md"
					>
						<Image
							src={art.coverImage!.image}
							width={640}
							height={360}
							alt={art.coverImage?.alt || ""}
							className="mb-4 aspect-video w-full rounded-md object-cover"
						/>
						<h3 className="mb-2 text-xl font-semibold">
							{art.title}
						</h3>
						<div className="mb-4 flex flex-wrap gap-2">
							{art.tags?.map((tag, i) => (
								<Badge variant="default" key={i}>
									{tag}
								</Badge>
							))}
						</div>
						<p className="mb-4 text-muted-foreground">
							{art.excerpt}
						</p>
						<div className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80">
							Read more
							<ArrowRightIcon className="h-4 w-4" />
						</div>
					</a>
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
