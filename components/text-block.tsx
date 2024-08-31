"use client";
import React, { ElementType } from "react";
import BlurFade from "./magicui/blur-fade";

/**
 * Props for the TextBlock component
 * @interface TextBlockProps
 */
interface TextBlockProps {
	/** Array of text strings to display */
	text: string[];
	/** Alignment of the text */
	alignment?: "left" | "center" | "right";
	/** HTML element type to render the text as */
	as?: ElementType;
}

/**
 * TextBlock component for displaying a block of text with fade-in animation
 * @param {TextBlockProps} props - The props for the TextBlock component
 * @returns {JSX.Element} The rendered TextBlock component
 */
const TextBlock: React.FC<TextBlockProps> = ({
	text,
	alignment = "center",
	as: Component = "p",
}) => {
	return (
		<section
			className={`z-10 text-foreground py-6 lg:py-12 text-${alignment}`}
		>
			{text.map((t, i) => (
				<BlurFade key={i} delay={0.25 + i * 0.05} inView className="-z-10 relative">
					<Component className="mx-auto max-w-[1000px] text-foreground md:text-xl/relaxed">
						{t}
					</Component>
				</BlurFade>
			))}
		</section>
	);
};

export default TextBlock;
