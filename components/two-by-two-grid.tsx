"use client"
import Image from "next/image"
import { HeaderSection } from "./header-section"
import ShineBorder from "./magicui/shine-border";
import { motion } from "framer-motion";
import BlurFade from "./magicui/blur-fade";

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
		<section>
			<HeaderSection
				header={header}
				subheader={subheader}
			/>
			<div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:gap-16">
				{items.map((item, i) => (
					<BlurFade
						className="relative flex h-auto w-full flex-col items-start overflow-hidden border md:shadow-xl bg-muted-foreground shadow-md rounded-lg"
						key={i}
						delay={0.25 + i * 0.05}
						inView
					>
						<ShineBorder
							color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
							borderWidth={3}
							className="relative flex h-full w-full flex-col items-start overflow-hidden border md:shadow-xl bg-muted-foreground shadow-md rounded-lg p-4"
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
								<p className="text-sm">{item.subheader}</p>
							</div>
						</ShineBorder>
					</BlurFade>
				))}
			</div>
		</section>
	);
}
