import { PortableTextBlock } from "sanity";

export type ProfileType = {
	_id: string;
	fullName: string;
	headline: string;
	profileImage: {
		alt: string;
		image: string;
	};
	shortBio: string;
	email: string;
	fullBio: PortableTextBlock[];
	location: string;
	resumeURL: string;
	socialLinks: string[];
	skills: string[];
	hobbies: string[];
};

export type ProjectType = {
	_id: string;
	name: string;
	slug: string;
	tagline: string;
	projectUrl: string;
	logo: string;
	coverImage: {
		alt: string | null;
		image: string;
	};
	description: PortableTextBlock[];
};

export type Post = {
	_id: string;
	_type: "post";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	title?: string;
	slug?: string;
	content?: Array<{
		children?: Array<{
			marks?: Array<string>;
			text?: string;
			_type: "span";
			_key: string;
		}>;
		style?:
			| "normal"
			| "h1"
			| "h2"
			| "h3"
			| "h4"
			| "h5"
			| "h6"
			| "blockquote";
		listItem?: "bullet" | "number";
		markDefs?: Array<{
			href?: string;
			_type: "link";
			_key: string;
		}>;
		level?: number;
		_type: "block";
		_key: string;
	}>;
	excerpt?: string;
	coverImage?: {
		alt: string | null;
		image: string;
	};
	tags: {name: string; excerpt: string}[];
	date?: string;
	author?: Author;
	relatedArticles?: Post[];
};

export declare const internalGroqTypeReferenceTo: unique symbol;

export type Author = {
	_id: string;
	_type: "author";
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	name?: string;
	picture?: {
		alt: string | null;
		image: string;
	};
};

export type SanityImageCrop = {
	_type: "sanity.imageCrop";
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
};

export type SanityImageHotspot = {
	_type: "sanity.imageHotspot";
	x?: number;
	y?: number;
	height?: number;
	width?: number;
};

export type Slug = {
	_type: "slug";
	current?: string;
	source?: string;
};