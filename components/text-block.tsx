"use client"
import { ElementType } from "react";
import { motion } from "framer-motion";

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
		<motion.section
			id="about"
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }}
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
		</motion.section>
	);
};

export default TextBlock