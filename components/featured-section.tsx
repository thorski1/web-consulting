"use client"
import Image from "next/image";
import { HeaderSection } from "./header-section";
import ShineBorder from "./magicui/shine-border";
import { motion } from "framer-motion";

interface Props {
	header: string;
	items: {
		header: string;
		subheader: string;
		image: { url: string; alt: string };
	}[];
}

export function ThreeFeatureSection({ header, items }: Props) {
	return (
		<motion.section
			id="about"
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="w-full py-6 xl:py-12"
		>
			<div className="container space-y-12 px-4 md:px-6">
				<HeaderSection header={header} />
				<div className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
					{items.map((item, i) => {
						return (
							<ShineBorder
								key={i}
								borderWidth={3}
								color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
								className="group transition-all duration-300 hover:shadow-xl relative flex h-auto w-full flex-col items-start overflow-hidden border md:shadow-xl bg-muted-foreground shadow-md rounded-lg p-4"
							>
								<Image
									src={item.image.url}
									width={500}
									height={300}
									alt={item.image.alt}
									className="w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
								/>
								<div className="text-background pt-4">
									<h3 className="text-lg font-bold">
										{item.header}
									</h3>
									<p className="text-sm">
										{item.subheader}
									</p>
								</div>
							</ShineBorder>
						);
					})}
				</div>
			</div>
		</motion.section>
	);
}
