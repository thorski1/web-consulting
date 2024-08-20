import { TagIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
	name: "tag",
	title: "Tag",
	icon: TagIcon,
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			validation: (rule) => rule.required(),
		},
		{
			name: "excerpt",
			title: "Excerpt",
			type: "text",
			description: "A short description of the tag",
		},
	],
	preview: {
		select: {
			title: "name",
			subtitle: "excerpt",
		},
	},
});
