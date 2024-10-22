import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
	name: "author",
	title: "Author",
	icon: UserIcon,
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "picture",
			title: "Picture",
			type: "image",
			description: "Upload a profile avatar",
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
	],
});
