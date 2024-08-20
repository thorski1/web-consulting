import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
	return client.fetch(
		groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills,
      hobbies
    }`
	);
}

export async function getBlogs() {
	return client.fetch(
		groq`*[_type == "post"] | order(date desc){
      _id,
      "status": select(_originalId in path("drafts.**") => "draft", "published"),
      "title": coalesce(title, "Untitled"),
      "slug": slug.current,
      excerpt,
      coverImage {alt, "image": asset->url},
      tags[]->{name, excerpt},  // Fetch name and excerpt from the referenced tag documents
      "date": coalesce(date, _updatedAt),
      "author": author->{"name": coalesce(name, "Anonymous"), "picture": {alt, "image": asset->url}},
    }`
	);
}

export async function getUniqueTags(): Promise<
	{ name: string; excerpt: string }[]
> {
	return client.fetch(
		groq`*[_type == "tag"]{name, excerpt}`
	);
}

export async function getTagByName(tagName: string) {
	return client.fetch(
		groq`*[_type == "tag" && name == $tagName][0]{
      _id,
      name,
      excerpt
    }`,
		{ tagName }
	);
}

export async function getProjects() {
	return client.fetch(
		groq`*[_type == "project"]{
      _id, 
      name,
      "slug": slug.current,
      tagline,
      "logo": logo.asset->url,
    }`
	);
}

export async function getSingleBlogArticle(slug: string) {
	// Fetch the main article along with its tags
	const article = await client.fetch(
		groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      content,
      excerpt,
      coverImage { alt, "image": asset->url },
      tags[]->{_id, name, excerpt},
      "date": coalesce(date, _updatedAt),
      "author": author->{"name": coalesce(name, "Anonymous"), "picture": { alt, "image": asset->url }},
    }
    `,
		{ slug }
	);

	// If the article has tags, fetch related posts
	let relatedPosts = [];
	if (article?.tags?.length > 0) {
		const tagIds = article.tags.map((tag: any) => tag._id);

		relatedPosts = await client.fetch(
			groq`
      *[_type == "post" && slug.current != $slug && count(tags[@._ref in $tagIds]) > 0] | order(date desc)[0...3] {
        _id,
        title,
        excerpt,
        slug,
        coverImage { alt, "image": asset->url },
        tags[]->{name, excerpt},
        "date": coalesce(date, _updatedAt),
        "author": author->{"name": coalesce(name, "Anonymous"), "picture": { alt, "image": asset->url }},
      }
      `,
			{ slug, tagIds }
		);
	}

	return { article, relatedPosts };
}

export async function getPostsByTag(tagId: string) {
	return client.fetch(
		groq`*[_type == "post" && $tagId in tags[]._ref] | order(date desc) {
      _id,
      "status": select(_originalId in path("drafts.**") => "draft", "published"),
      "title": coalesce(title, "Untitled"),
      "slug": slug.current,
      excerpt,
      coverImage {alt, "image": asset->url},
      tags[]->{name, excerpt},
      "date": coalesce(date, _updatedAt),
      "author": author->{"name": coalesce(name, "Anonymous"), "picture": {alt, "image": asset->url}},
    }`,
		{ tagId }
	);
}

export async function getSingleProject(slug: string) {
	return client.fetch(
		groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      projectUrl,
      coverImage { alt, "image": asset->url },
      tagline,
      description
    }`,
		{ slug }
	);
}
