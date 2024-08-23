"use client";
import { ElementType } from "react";
import BlurFade from "./magicui/blur-fade";

interface Props {
	text: string[];
	alignment?: "left" | "center" | "right";
	as?: ElementType;
}

const TextBlock = ({
	text,
	alignment = "center",
	as: Component = "p",
}: Props) => {
	return (
		<section
			className={`text-muted-foreground py-6 lg:py-12 text-${alignment}`}
		>
			{text.map((t, i) => (
				<BlurFade key={i} delay={0.25 + i * 0.05} inView>
					<Component className="mx-auto max-w-[1000px] text-muted-foreground md:text-xl/relaxed">
						{t}
					</Component>
				</BlurFade>
			))}
		</section>
	);
};

export default TextBlock;
