"use client"
import AnimatedShinyText from "./magicui/animated-shiny-text";
import { motion } from "framer-motion";
import BlurFade from "./magicui/blur-fade";

interface Props {
    header: string;
    subheader?: string;
}
export const HeaderSection = ({ header, subheader }: Props) => {
    return (
			<section
				className="mb-2 md:mb-4 lg:mb-8"
		>
			<BlurFade delay={0.25} inView>
				<AnimatedShinyText
					as="h2"
					className="text-3xl font-bold tracking-tight sm:text-4xl text-center"
				>
					{header}
				</AnimatedShinyText></BlurFade>
				{subheader && subheader !== "" && (
					<BlurFade delay={0.5} inView>
					<p className="mx-auto max-w-[1000px] text-muted-foreground md:text-xl/relaxed text-center pt-3">
						{subheader}
					</p>
					</BlurFade>
				)}
			</section>
		);
}