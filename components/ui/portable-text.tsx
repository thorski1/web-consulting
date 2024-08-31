/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import {
	PortableText,
	type PortableTextComponents,
	type PortableTextBlock,
} from "next-sanity";

export default function CustomPortableText({
	className,
	value,
}: {
	className?: string;
	value: any[];
}) {
	const components: PortableTextComponents = {
		block: {
			h3: ({ children }) => (
				<h3 className="mb-2 text-lg font-bold text-foreground">
					{children}
				</h3>
			),
			h4: ({ children }) => (
				<h4 className="mb-2 text-lg font-bold text-foreground">
					{children}
				</h4>
			),
			h5: ({ children }) => (
				<h5 className="mb-2 text-sm font-semibold text-foreground">
					{children}
				</h5>
			),
			h6: ({ children }) => (
				<h6 className="mb-1 text-xs font-semibold text-foreground">
					{children}
				</h6>
			),
			normal: ({ children }) => (
				<p className="py-2 text-foreground">
					{children}
				</p>
			),
		},
		marks: {
			link: ({ children, value }) => {
				return (
					<a href={value?.href} rel="noreferrer noopener">
						{children}
					</a>
				);
			},
			strong: ({ children }) => (
				<span className="font-bold text-foreground">{children}</span>
			),
		},
	};

	return (
		<div
			className={["prose", className]
				.filter(Boolean)
				.join(" ")}
		>
			<PortableText components={components} value={value} />
		</div>
	);
}
