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
      tags,
      "date": coalesce(date, _updatedAt),
      "author": author->{"name": coalesce(name, "Anonymous"), "picture": {alt, "image": asset->url}},
    }`
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
	return client.fetch(
		groq`*[_type == "post" && slug.current == $slug] [0]{
      content,
      _id,
      "status": select(_originalId in path("drafts.**") => "draft", "published"),
      "title": coalesce(title, "Untitled"),
      "slug": slug.current,
      excerpt,
      coverImage {alt, "image": asset->url},
      tags,
      "date": coalesce(date, _updatedAt),
      "author": author->{"name": coalesce(name, "Anonymous"), "picture": {alt, "image": asset->url}},
      "relatedArticles": *[
     _type == "post"
     && _id != ^._id
    //  TODO: Something isn't working correctly here
     && count(tags[@._ref in ^.^.tags[]._ref]) > 0
   ][0...3]{
      _id,
      "status": select(_originalId in path("drafts.**") => "draft", "published"),
      "title": coalesce(title, "Untitled"),
      "slug": slug.current,
      excerpt,
      coverImage {alt, "image": asset->url},
      tags,
      "date": coalesce(date, _updatedAt),
      "author": author->{"name": coalesce(name, "Anonymous"), picture},}
      }`,
		{ slug }
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
