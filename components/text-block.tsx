import { ElementType } from "react";

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
				<Component
					key={i}
					className="mx-auto max-w-[1000px] text-muted-foreground md:text-xl/relaxed"
				>
					{t}
				</Component>
			))}
		</section>
	);
};

export default TextBlock