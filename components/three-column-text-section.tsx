"use client"
import React from 'react'
import Image from "next/image";
import { HeaderSection } from "./header-section";
import { motion } from "framer-motion";
import BlurFade from './magicui/blur-fade';

const ThreeColumnTextSection = () => {
  return (
		<section
			className="w-full py-6 lg:py-12"
		>
			<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
				<HeaderSection header="Why Choose ReCode Pros?" />
				<div className="mx-auto grid max-w-5xl items-center gap-6 pb-12 lg:grid-cols-2 lg:gap-12">
					<BlurFade delay={0.25} inView>
					<Image
						src="/services-rendered.svg"
						width="550"
						height="310"
						alt="web collaboration"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center =w-full"
					  /></BlurFade>
					<BlurFade delay={0.5} inView className="flex flex-col justify-center space-y-4">
						<ul className="grid gap-6">
						  <li>
								<BlurFade delay={0.25} inView className="grid gap-1">
									<h3 className="text-xl font-bold">
										AI-First Approach
									</h3>
									<p className="text-muted-foreground text-left">
										We&apos;re not just tech-savvy;
										we&apos;re AI-obsessed. Our team uses
										cutting-edge AI tools and data-driven
										insights to optimize every aspect of
										your web presence, from design to
										marketing.
									</p>
								</BlurFade>
							</li>
							<li>
								<BlurFade delay={0.5} inView className="grid gap-1">
									<h3 className="text-xl font-bold">
										Data-Driven Decisions
									</h3>
									<p className="text-muted-foreground text-left">
										We don&apos;t just guess; we analyze.
										Our AI-powered solutions give you the
										edge, ensuring your website works
										smarter, not harder.
									</p>
								</BlurFade>
							</li>
							<li>
								<BlurFade delay={0.75} inView className="grid gap-1">
									<h3 className="text-xl font-bold">
										Proven Results
									</h3>
									<p className="text-muted-foreground text-left">
										We&apos;re not just another agency;
										we&apos;re your growth partner. Our
										track record speaks for itself—we
										deliver measurable results that impact
										your bottom line.
									</p>
								</BlurFade>
							</li>
						</ul>
					</BlurFade>
				</div>
			</div>
		</section>
	);
}

export default ThreeColumnTextSection