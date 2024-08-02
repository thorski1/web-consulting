/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QzpLRHGx4cO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import CTASection from "@/components/cta-section";
import FeaturedBlogArticles from "@/components/featured-blog-articles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DateComponent from "@/components/ui/date";
import CustomPortableText from "@/components/ui/portable-text";
import { getSingleBlogArticle } from "@/sanity/sanity.query";
import { Post } from "@/types";

type Props = {
	params: { slug: string };
};

export default async function BlogArticle({
	params,
}: Props) {
	const blog: Post = await getSingleBlogArticle(
		params.slug
	);
	return (
		<div className="bg-background text-foreground">
			<div className="w-[80%] py-6 xl:py-12 mx-auto">
				<article className="prose prose-gray mx-auto dark:prose-invert">
					<div className="space-y-4 not-prose">
						<h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
							{blog.title}
						</h1>
						<div className="flex items-center space-x-4">
							<div className="flex items-center space-x-2">
								<Avatar className="h-8 w-8 rounded-full">
									<AvatarImage
										src={blog.author?.picture?.image}
									/>
									<AvatarFallback></AvatarFallback>
								</Avatar>
								<div className="text-sm font-medium">
									{blog.author?.name}
								</div>
							</div>
							<div className="text-sm text-muted-foreground">
								Published on{" "}
								<DateComponent dateString={blog.date!} />
							</div>
						</div>
					</div>
					<figure className="my-8">
						<img
							width={1250}
							src={blog.coverImage?.image}
							height={340}
							alt={blog.coverImage?.alt || "image"}
							className="aspect-video w-full object-cover"
						/>
					</figure>

					{blog.content?.length && (
						<CustomPortableText
							className=""
							value={blog.content}
						/>
					)}
				</article>
				{blog.relatedArticles && (
					<FeaturedBlogArticles
						articles={blog.relatedArticles}
					/>
				)}
				<CTASection />
			</div>
		</div>
	);
}
