"use client";
import React from "react";
import ShineBorder from "./magicui/shine-border";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import BlurFade from "./magicui/blur-fade";

const checklists = {
	columnOne: [
		"Basic Website Development",
		"Basic SEO",
		"Social Media Setup & Consultation",
	],
	columnTwo: [
		"Custom website design",
		"Responsive design",
		"Basic SEO optimization",
		"CMS integration",
	],
	columnThree: [
		"Advanced website/web app development",
		"AI-powered marketing automation",
		"Predictive analytics",
		"Dedicated support",
	],
};

const ThreeBoxSection = () => {
	return (
		<section className="py-6 lg:py-12">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-3">
					<BlurFade
						delay={0.25}
						inView
						className="rounded-lg text-background border bg-background shadow-sm flex flex-col justify-between items-start w-full flex-grow"
					>
						<ShineBorder
							borderWidth={3}
							className="flex-grow w-full flex flex-col justify-between items-start"
							color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
						>
							<BlurFade delay={0.75} inView>
								<h2 className="text-2xl font-bold text-background">
									Small Business Starter Pack
								</h2>
								<p className="mt-2 text-background">
									Ideal for new or small businesses
								</p>
							</BlurFade>
							<ul className="mt-6 space-y-4 text-background">
								{checklists.columnOne.map((str, i) => (
									<BlurFade
										key={i}
										delay={0.75 + i * 0.05}
										inView
									>
										<li className="flex items-center">
											<CheckIcon
												strokeWidth={3}
												className="mr-2 h-5 w-5 text-green-500"
											/>
											{str}
										</li>
									</BlurFade>
								))}
							</ul>

							<BlurFade
								delay={0.75}
								inView
								className="self-center mt-8 flex justify-between flex-col gap-4"
							>
								<p className="text-xl text-center font-bold text-background">
									Starting at $4,500
								</p>
								<Link
									href="/schedule-consultation"
									className="z-10 inline-flex h-10 items-center justify-center rounded-md bg-popover px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
									prefetch={false}
								>
									Get started
								</Link>
							</BlurFade>
						</ShineBorder>
					</BlurFade>
					<BlurFade
						delay={0.5}
						inView
						className="rounded-lg text-background border bg-background shadow-sm flex flex-col justify-between items-start w-full"
					>
						<ShineBorder
							borderWidth={3}
							className="flex-grow w-full flex flex-col justify-between items-start"
							color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
						>
							<BlurFade delay={0.75} inView>
								<h2 className="text-2xl font-bold text-background">
									AI-Powered Web Development
								</h2>
								<p className="mt-2  text-background">
									Tailored websites and web apps with
									AI-powered personalization and
									optimization
								</p>
							</BlurFade>
							<ul className="mt-6 space-y-4 text-background">
								{checklists.columnTwo.map((str, i) => (
									<BlurFade
										key={i}
										delay={1 + i * 0.05}
										inView
									>
										<li className="flex items-center">
											<CheckIcon
												strokeWidth={3}
												className="mr-2 h-5 w-5 text-green-500"
											/>
											{str}
										</li>
									</BlurFade>
								))}
							</ul>
							<BlurFade
								delay={0.75}
								inView
								className="self-center mt-8 flex justify-between flex-col gap-4"
							>
								<p className="text-xl text-center font-bold text-background">
									Starting at $10,000
								</p>
								<Link
									href="/schedule-consultation"
									className="z-10 inline-flex h-10 items-center justify-center rounded-md bg-popover px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
									prefetch={false}
								>
									Get a quote
								</Link>
							</BlurFade>
						</ShineBorder>
					</BlurFade>
					<BlurFade
						delay={0.75}
						inView
						className="rounded-lg text-background border bg-background shadow-sm flex flex-col justify-between items-start w-full"
					>
						<ShineBorder
							borderWidth={3}
							className="flex-grow w-full flex flex-col justify-between items-start"
							color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
						>
							<BlurFade delay={0.75} inView>
								<h2 className="text-2xl font-bold text-background">
									Enterprise AI Suite
								</h2>
								<p className="mt-2 text-background">
									Comprehensive AI-driven solutions for
									large businesses
								</p>
							</BlurFade>
							<ul className="mt-6 space-y-4 text-background">
								{checklists.columnThree.map((str, i) => (
									<BlurFade
										key={i}
										delay={1.25 + i * 0.05}
										inView
									>
										<li className="flex items-center">
											<CheckIcon
												strokeWidth={3}
												className="mr-2 h-5 w-5 text-green-500"
											/>
											{str}
										</li>
									</BlurFade>
								))}
							</ul>
							<BlurFade
								delay={0.75}
								inView
								className="self-center mt-8 flex justify-between flex-col gap-4"
							>
								<p className="text-xl text-center font-bold text-background">
									Custom (contact us)
								</p>
								<Link
									href="/schedule-consultation"
									className="z-10 inline-flex h-10 items-center justify-center rounded-md bg-popover px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
									prefetch={false}
								>
									Contact sales
								</Link>
							</BlurFade>
						</ShineBorder>
					</BlurFade>
				</div>
			</div>
		</section>
	);
};

export default ThreeBoxSection;
