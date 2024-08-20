import { DocumentTextIcon } from "@sanity/icons";
import { format, parseISO } from "date-fns";
import { defineField, defineType } from "sanity";
import authorType from "./author";

export default defineType({
	name: "post",
	title: "Post",
	icon: DocumentTextIcon,
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			description:
				"Add a custom slug for the URL or generate one from the name",
			options: { source: "name" },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "content",
			title: "Content",
			type: "array",
			of: [{ type: "block" }],
		}),
		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
		}),
		defineField({
			name: "coverImage",
			title: "Cover Image",
			type: "image",
			description: "Upload a blog thumbnail",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					title: "Alt",
					type: "string",
				},
			],
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "date",
			title: "Date",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
		}),
		// Updated tags field to be an array of objects
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "reference", to: [{ type: "tag" }] }],
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "author",
			title: "Author",
			type: "reference",
			to: [{ type: authorType.name }],
		}),
	],
	preview: {
		select: {
			title: "title",
			author: "author.name",
			date: "date",
			media: "coverImage",
		},
		prepare({ title, media, author, date }) {
			const subtitles = [
				author && `by ${author}`,
				date &&
					`on ${format(parseISO(date), "LLL d, yyyy")}`,
			].filter(Boolean);

			return {
				title,
				media,
				subtitle: subtitles.join(" "),
			};
		},
	},
});
