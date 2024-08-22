"use client"
import React from 'react'
import Image from "next/image";
import { HeaderSection } from "./header-section";
import { motion } from "framer-motion";

const ThreeColumnTextSection = () => {
  return (
		<motion.section
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="w-full py-6 lg:py-12"
		>
			<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
				<HeaderSection header="Why Choose ReCode Pros?" />
				<div className="mx-auto grid max-w-5xl items-center gap-6 pb-12 lg:grid-cols-2 lg:gap-12">
					<Image
						src="/services-rendered.svg"
						width="550"
						height="310"
						alt="web collaboration"
						className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center =w-full"
					/>
					<div className="flex flex-col justify-center space-y-4">
						<ul className="grid gap-6">
							<li>
								<div className="grid gap-1">
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
								</div>
							</li>
							<li>
								<div className="grid gap-1">
									<h3 className="text-xl font-bold">
										Data-Driven Decisions
									</h3>
									<p className="text-muted-foreground text-left">
										We don&apos;t just guess; we analyze.
										Our AI-powered solutions give you the
										edge, ensuring your website works
										smarter, not harder.
									</p>
								</div>
							</li>
							<li>
								<div className="grid gap-1">
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
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

export default ThreeColumnTextSection