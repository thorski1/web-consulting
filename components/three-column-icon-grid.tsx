"use client";
import React from "react";
import Image from "next/image";
import { HeaderSection } from "./header-section";
import BlurFade from "./magicui/blur-fade";

const ThreeColumnIconGrid = () => {
	return (
		<section
			className="w-full py-6 xl:py-12"
		>
			<HeaderSection header="Our Values" />
			<div className="container grid items-start justify-center gap-8 px-4 md:px-6 lg:grid-cols-3">
				<BlurFade delay={0.25} inView className="space-y-4 text-center">
					<Image
						src="/icons/ribbon.svg"
						width="100"
						height="100"
						alt="ribbon icon"
						className="mx-auto overflow-hidden object-cover object-center w-32 fill-white"
					/>
					<h3 className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl">
						Commitment to Excellence
					</h3>
					<p className="text-muted-foreground text-left">
						We are committed to delivering top-notch web
						solutions that meet the highest standards of
						quality and performance. Our work is driven by a
						dedication to excellence in every project.
					</p>
				</BlurFade>
				<BlurFade delay={0.5} inView className="space-y-4 text-center">
					<Image
						src="/icons/customer-centric.svg"
						width="100"
						height="100"
						alt="customer-centric icon"
						className="mx-auto overflow-hidden object-cover object-center w-32 fill-white"
					/>
					<h3 className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl">
						Customer-Centric Approach
					</h3>
					<p className="text-muted-foreground text-left">
						At ReCode Pros, our clients are at the heart of
						everything we do. We take the time to understand
						your unique needs and tailor our services to
						help you achieve your goals.
					</p>
				</BlurFade>
				<BlurFade delay={0.75} inView className="space-y-4 text-center">
					<Image
						src="/icons/innovation-adaptability.svg"
						width="100"
						height="100"
						alt="lightbulb icon"
						className="mx-auto overflow-hidden object-cover object-center w-32 fill-white"
					/>
					<h3 className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl">
						Innovation and Adaptability
					</h3>
					<p className="text-muted-foreground text-left">
						In the ever-evolving digital landscape,
						innovation is key. We stay ahead of the curve by
						embracing the latest technologies and trends,
						ensuring that our clients benefit from
						cutting-edge solutions.
					</p>
				</BlurFade>
			</div>
		</section>
	);
};

export default ThreeColumnIconGrid;
