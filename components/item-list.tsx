"use client";
import Image from "next/image";
import Link from "next/link";
import { HeaderSection } from "./header-section";
import BlurFade from "./magicui/blur-fade";
import ShineBorder from "./magicui/shine-border";

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

export function ItemList({
	items,
	header,
	subheader,
}: Props) {
	return (
		<section
			className="w-full py-6 lg:py-12"
		>
			<HeaderSection
				header={header}
				subheader={subheader}
			/>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
				{items.map((item, i) => {
					const InnerComponent = () => (
						<>
							<div className="mb-4 flex items-center justify-center text-background">
								<Image
									src={item.image.url}
									alt={item.image.alt}
									width={32}
									height={32}
									className="md:w-20 w-28"
								/>
							</div>
							<h3 className="mb-2 text-lg text-center font-semibold text-background">
								{item.header}
							</h3>
							<p className="text-center text-background">
								{item.subheader}
							</p>
						</>
					);
					return (
						<BlurFade
							key={i}
							delay={0.25 + i * 0.05}
							inView
						>
							<ShineBorder
								color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
								borderWidth={3}
								className="p-6 relative flex h-full w-full flex-col hover:shadow-lg items-start overflow-hidden border md:shadow-xl bg-muted-foreground shadow-md rounded-lg  hover:scale-105 transform transition duration-500"
							>
								{item.slug ? (
									<Link
										prefetch={false}
										href={`${item.slug}`}
										className={`z-10 transition-all duration-300`}
									>
										<InnerComponent />
									</Link>
								) : (
									<div
										key={i}
										className="rounded-lg transition-all duration-300"
									>
										<InnerComponent />
									</div>
								)}
							</ShineBorder>
						</BlurFade>
					);
				})}
			</div>
		</section>
	);
}
