import CTASection from "@/components/cta-section";
import FeaturedBlogArticles from "@/components/featured-blog-articles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DateComponent from "@/components/ui/date";
import CustomPortableText from "@/components/ui/portable-text";
import { getSingleBlogArticle } from "@/sanity/sanity.query";
import { Post } from "@/types";

/**
 * Props for the BlogArticle component
 * @typedef {Object} Props
 * @property {Object} params - URL parameters
 * @property {string} params.slug - The slug of the blog article
 */
type Props = {
	params: { slug: string };
};

/**
 * BlogArticle component - Renders a single blog article page
 * @param {Props} props - Component props
 * @returns {Promise<JSX.Element>} Rendered blog article page
 */
export default async function BlogArticle({ params }: Props): Promise<JSX.Element> {
	const { article: blog, relatedPosts } = await getSingleBlogArticle(params.slug);

	return (
		<div className="">
			<div className="w-11/12 md:w-4/5 py-8 xl:py-16 mx-auto">
				<article className="prose prose-slate mx-auto dark:prose-invert">
					<BlogHeader blog={blog} />
					<BlogCoverImage blog={blog} />
					<BlogContent blog={blog} />
				</article>
				<RelatedArticles relatedPosts={relatedPosts} />
				<CTASection />
			</div>
		</div>
	);
}

/**
 * BlogHeader component - Renders the header of the blog article
 * @param {Object} props - Component props
 * @param {Post} props.blog - Blog post data
 * @returns {JSX.Element} Rendered blog header
 */
function BlogHeader({ blog }: { blog: Post }): JSX.Element {
	return (
		<div className="space-y-4 not-prose">
			<h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem] text-indigo-700 dark:text-indigo-300">
				{blog.title}
			</h1>
			<div className="flex items-center space-x-4">
				<AuthorInfo author={blog.author} />
				<PublishDate date={blog.date} />
			</div>
		</div>
	);
}

/**
 * AuthorInfo component - Renders author information
 * @param {Object} props - Component props
 * @param {Post['author']} props.author - Author data
 * @returns {JSX.Element} Rendered author information
 */
function AuthorInfo({ author }: { author: Post['author'] }): JSX.Element {
	return (
		<div className="flex items-center space-x-2">
			<Avatar className="h-8 w-8 rounded-full">
				<AvatarImage src={author?.picture?.image} />
				<AvatarFallback>{author?.name?.charAt(0)}</AvatarFallback>
			</Avatar>
			<div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
				{author?.name}
			</div>
		</div>
	);
}

/**
 * PublishDate component - Renders the publication date
 * @param {Object} props - Component props
 * @param {string} props.date - Publication date
 * @returns {JSX.Element} Rendered publication date
 */
function PublishDate({ date }: { date: string | undefined }): JSX.Element {
	return (
		<div className="text-sm text-slate-500 dark:text-slate-400">
			Published on <DateComponent dateString={date!} />
		</div>
	);
}

/**
 * BlogCoverImage component - Renders the blog cover image
 * @param {Object} props - Component props
 * @param {Post} props.blog - Blog post data
 * @returns {JSX.Element} Rendered blog cover image
 */
function BlogCoverImage({ blog }: { blog: Post }): JSX.Element {
	return (
		<figure className="my-8">
			<img
				width={1250}
				src={blog.coverImage?.image}
				height={340}
				alt={blog.coverImage?.alt || "Blog cover image"}
				className="aspect-video w-full object-cover rounded-lg shadow-md"
			/>
		</figure>
	);
}

/**
 * BlogContent component - Renders the main content of the blog
 * @param {Object} props - Component props
 * @param {Post} props.blog - Blog post data
 * @returns {JSX.Element | null} Rendered blog content or null if no content
 */
function BlogContent({ blog }: { blog: Post }): JSX.Element | null {
	if (!blog.content?.length) return null;
	
	return (
		<CustomPortableText
			className="text-lg dark:text-slate-300"
			value={blog.content}
		/>
	);
}

/**
 * RelatedArticles component - Renders related blog articles
 * @param {Object} props - Component props
 * @param {Post[]} props.relatedPosts - Array of related blog posts
 * @returns {JSX.Element | null} Rendered related articles or null if no related posts
 */
function RelatedArticles({ relatedPosts }: { relatedPosts: Post[] | undefined }): JSX.Element | null {
	if (!relatedPosts) return null;
	
	return <FeaturedBlogArticles articles={relatedPosts} />;
}
