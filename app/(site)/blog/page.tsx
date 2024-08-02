import BlogCategories from '@/components/blog-categories';
import CTASection from '@/components/cta-section';
import FeaturedBlogArticles from '@/components/featured-blog-articles';
import { getBlogs } from '@/sanity/sanity.query';
import Link from 'next/link';
import React from 'react'

const BlogHomepage = async () => {
    const posts = await getBlogs()
  return (
		<main>
			<section className="w-full py-6 xl:py-12">
				<div className="container px-4 md:px-6 text-center">
					<div className="space-y-4">
						<h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
							Stay up-to-date with the latest web
							development and digital marketing insights
						</h1>
						<p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground">
							Our blog covers a wide range of topics, from
							emerging technologies to effective marketing
							strategies.
						</p>
						<Link
							href="#"
							className="text-center inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
							prefetch={false}
						>
							Explore the Blog
						</Link>
					</div>
				</div>
			</section>
			<FeaturedBlogArticles articles={posts.slice(0, 3)} />
			<BlogCategories />
			<CTASection />
		</main>
	);
}

export default BlogHomepage