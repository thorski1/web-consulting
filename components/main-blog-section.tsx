"use client"
import React from 'react'
import ShineBorder from './magicui/shine-border';
import { motion } from "framer-motion";

const MainBlogSection = ({posts, tags}: {posts: any, tags: any}) => {
  return (
		<motion.section
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="grid md:grid-cols-2 gap-8 mb-12"
		>
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
					{tags.map(
						(
							topic: { name: string; excerpt: string },
							i: number
						) => (
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
						)
					)}
				</div>
			</div>
		</motion.section>
	);
}

export default MainBlogSection