"use client";
import React from "react";
import ShineBorder from "./magicui/shine-border";
import BlurFade from "./magicui/blur-fade";
import Link from "next/link";

/**
 * Interface for a blog post
 * @interface BlogPost
 */
interface BlogPost {
  /** The title of the blog post */
  title: string;
  /** A short excerpt or summary of the blog post */
  excerpt: string;
  /** The URL slug for the blog post */
  slug: string;
}

/**
 * Interface for a blog tag
 * @interface BlogTag
 */
interface BlogTag {
  /** The name of the tag */
  name: string;
  /** A short description or excerpt for the tag */
  excerpt: string;
}

/**
 * Props for the MainBlogSection component
 * @interface MainBlogSectionProps
 */
interface MainBlogSectionProps {
  /** Array of blog posts to display */
  posts: BlogPost[];
  /** Array of blog tags to display */
  tags: BlogTag[];
}

/**
 * MainBlogSection component for displaying recent blog posts and popular topics
 * @param {MainBlogSectionProps} props - The props for the MainBlogSection component
 * @returns {JSX.Element} The rendered MainBlogSection component
 */
const MainBlogSection: React.FC<MainBlogSectionProps> = ({ posts, tags }) => {
  return (
    <section className="w-full py-12 lg:py-20 bg-gradient-1">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <LatestArticles posts={posts} />
          <PopularTopics tags={tags} />
        </div>
      </div>
    </section>
  );
};

/**
 * Props for the LatestArticles component
 * @interface LatestArticlesProps
 */
interface LatestArticlesProps {
  /** Array of blog posts to display */
  posts: BlogPost[];
}

/**
 * LatestArticles component for displaying a list of recent blog posts
 * @param {LatestArticlesProps} props - The props for the LatestArticles component
 * @returns {JSX.Element} The rendered LatestArticles component
 */
const LatestArticles: React.FC<LatestArticlesProps> = ({ posts }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-primary-foreground">Latest Articles</h2>
      <div className="space-y-4">
        {posts.map((post, i) => (
          <BlurFade key={i} delay={0.25 + i * 0.05} inView>
            <ShineBorder
              borderWidth={3}
              className="relative flex h-auto w-full flex-col items-start overflow-hidden border md:shadow-xl bg-card shadow-md rounded-lg p-4"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <h3 className="text-xl font-semibold mb-2 text-primary-foreground">{post.title}</h3>
              <p className="text-primary-foreground/80 mb-2">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="z-10 text-primary hover:underline text-left"
              >
                Read more
              </Link>
            </ShineBorder>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

/**
 * Props for the PopularTopics component
 * @interface PopularTopicsProps
 */
interface PopularTopicsProps {
  /** Array of blog tags to display */
  tags: BlogTag[];
}

/**
 * PopularTopics component for displaying a grid of popular blog topics
 * @param {PopularTopicsProps} props - The props for the PopularTopics component
 * @returns {JSX.Element} The rendered PopularTopics component
 */
const PopularTopics: React.FC<PopularTopicsProps> = ({ tags }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-primary-foreground">Popular Topics</h2>
      <div className="grid grid-cols-2 gap-4">
        {tags.map((topic, i) => (
          <BlurFade key={i} delay={0.25 + i * 0.05} inView>
            <ShineBorder
              borderWidth={3}
              className="relative flex h-auto w-full flex-col items-start overflow-hidden border md:shadow-xl bg-card shadow-md rounded-lg p-4"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <h3 className="text-lg font-semibold mb-2 text-primary-foreground">{topic.name}</h3>
              <Link
                href={`/blog/tags/${topic.name.split(" ").join("-")}`}
                className="z-10 text-primary hover:underline"
              >
                Explore articles
              </Link>
            </ShineBorder>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default MainBlogSection;
