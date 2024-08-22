"use client"
import Image from "next/image";
import { HeaderSection } from "./header-section";
import { motion } from "framer-motion";

interface Props {
	header: string;
	subheader?: string;
	items: {
		header: string;
		subheader: string;
		image: {
			url: string;
			alt: string;
		};
	}[];
}

export const FourColumnIconSection = ({
	header,
	subheader,
	items,
}: Props) => {
	return (
		<motion.section
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }} className="w-full py-6 lg:py-12">
            <div className="grid gap-8 px-4 md:px-6">
                <HeaderSection header={header} subheader={subheader} />
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{items.map((item, i) => {
						return (
							<div
								key={i}
								className="flex flex-col items-center gap-4 rounded-lg bg-background text-center shadow-sm"
							>
								<Image
									src={item.image.url}
									alt={item.image.alt}
									width="100"
									height="100"
									className="mx-auto overflow-hidden object-cover object-center w-32 fill-white"
								/>
								<h3 className="text-xl font-semibold">
									{item.header}
								</h3>
								<p className="text-muted-foreground text-left">
									{item.subheader}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</motion.section>
	);
};
