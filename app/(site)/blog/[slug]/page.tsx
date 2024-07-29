/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QzpLRHGx4cO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import CTASection from "@/components/cta-section";
import FeaturedBlogArticles from "@/components/featured-blog-articles";
import DateComponent from "@/components/ui/date";
import CustomPortableText from "@/components/ui/portable-text";
import { getSingleBlogArticle } from "@/sanity/sanity.query";
import { Post } from "@/types";

type Props = {
	params: { slug: string };
};

export default async function BlogArticle({ params }: Props) {
    const blog: Post = await getSingleBlogArticle(params.slug)
	return (
		<div className="text-foreground">
			<header className="py-6 xl:py-9">
				<div className="space-y-4">
					<h1 className="text-5xl font-bold tracking-tight">
						{blog.title}
					</h1>
					<div className="flex items-center space-x-4 text-muted-foreground">
						<p className="text-sm font-medium">
							{blog.author?.name}
						</p>
						<span className="h-4 w-px bg-muted" />
						<p className="text-sm">
							Published on{" "}
							<DateComponent dateString={blog.date!} />
						</p>
					</div>
				</div>
			</header>
			<article className="py-6 xl:pr-72 xl:py-9">
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
	);
}
