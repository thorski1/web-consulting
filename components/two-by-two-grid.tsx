"use client"
import Image from "next/image"
import { HeaderSection } from "./header-section"
import ShineBorder from "./magicui/shine-border";
import { motion } from "framer-motion";

interface Props {
	items: {
		image: { url: string; alt: string };
		header: string;
		subheader: string;
		slug?: string;
	}[];
	header: string;
	subheader?: string;
}

export function TwoByTwoGrid({header, subheader, items}: Props) {
  return (
		<motion.section
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }} className="w-full py-6 lg:py-12">
			<HeaderSection
				header={header}
				subheader={subheader}
			/>
			<div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:gap-16">
				{items.map((item, i) => (
					<ShineBorder
						key={i}
						color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
						borderWidth={3}
						className="relative flex h-auto w-full flex-col items-start overflow-hidden border md:shadow-xl bg-muted-foreground shadow-md rounded-lg p-4"
					>
						<Image
							src={item.image.url}
							alt={item.image.alt}
							width={660}
							height={371}
							className="object-cover w-full aspect-[16/9]"
						/>
						<div className="pt-4 text-background">
							<h3 className="text-xl text-center pb-2 font-bold">
								{item.header}
							</h3>
							<p className="text-sm">
								{item.subheader}
							</p>
						</div>
					</ShineBorder>
				))}
			</div>
		</motion.section>
	);
}
