import ShineBorder from "@/components/magicui/shine-border";
import {
	getPostsByTag,
	getTagByName,
} from "@/sanity/sanity.query";
import { Post } from "@/types";
import { ArrowLeftIcon } from "lucide-react";

export default async function TagsPage({
	params,
}: {
	params: any;
}) {
	let tag = await getTagByName(
		params.tag.split("-").join(" ")
	)
	if (!tag) {
		tag = await getTagByName(params.tag);
	}
	if (!tag) {
		return
	}
	const articles = await getPostsByTag(tag?._id);
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="mb-6">
				<a
					href="/blog"
					className="inline-flex items-center text-muted-foreground hover:underline"
				>
					<ArrowLeftIcon className="w-4 h-4 mr-2" />
					Back to Homepage
				</a>
			</div>

			<h1 className="text-4xl font-bold mb-4">
				{tag.name}
			</h1>

			<p className="text-lg text-muted-foreground pb-6">
				{tag.excerpt}
			</p>

			<h2 className="text-2xl font-semibold mb-4">
				Articles in this Category
			</h2>

			<div className="grid gap-6 md:grid-cols-2">
				{articles.map((article: Post, index: number) => (
					<ShineBorder
						key={index}
						borderWidth={3}
						className="relative flex h-auto w-full flex-col items-start overflow-hidden border md:shadow-xl bg-muted-foreground shadow-md rounded-lg p-4 text-background"
						color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
					>
						<h3 className="text-xl font-semibold mb-2 text-background">
							{article.title}
						</h3>
						<p className="text-background mb-2">
							{article.excerpt}
						</p>
						<a
							href={`/blog/${article.slug}`}
							className="z-10 text-blue-600 hover:underline text-left"
						>
							Read more
						</a>
					</ShineBorder>
				))}
			</div>
		</div>
	);
}
