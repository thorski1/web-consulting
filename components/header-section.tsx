"use client"
import AnimatedShinyText from "./magicui/animated-shiny-text";
import { motion } from "framer-motion";

interface Props {
    header: string;
    subheader?: string;
}
export const HeaderSection = ({ header, subheader }: Props) => {
    return (
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="mb-2 md:mb-4 lg:mb-8"
			>
				<AnimatedShinyText
					as="h2"
					className="text-3xl font-bold tracking-tight sm:text-4xl text-center"
				>
					{header}
				</AnimatedShinyText>
				{subheader && subheader !== "" && (
					<p className="mx-auto max-w-[1000px] text-muted-foreground md:text-xl/relaxed text-center pt-3">
						{subheader}
					</p>
				)}
			</motion.section>
		);
}