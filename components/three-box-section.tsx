"use client"
import React from 'react'
import ShineBorder from './magicui/shine-border';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import { motion } from "framer-motion";

const ThreeBoxSection = () => {
  return (
		<motion.section
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }} className="py-6 lg:py-12">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-3">
					<ShineBorder
						borderWidth={3}
						className="rounded-lg text-background border bg-background shadow-sm flex flex-col justify-between items-start w-full"
						color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
					>
						<div className="flex-grow">
							<h2 className="text-2xl font-bold text-background">
								Small Business Starter Pack
							</h2>
							<p className="mt-2 text-background">
								Ideal for new or small businesses
							</p>
							<ul className="mt-6 space-y-4 text-background">
								<li className="flex items-center">
									<CheckIcon className="mr-2 h-5 w-5 text-primary" />
									Basic Website Development
								</li>
								<li className="flex items-center">
									<CheckIcon className="mr-2 h-5 w-5 text-primary" />
									Basic SEO
								</li>
								<li className="flex items-center">
									<CheckIcon className="mr-2 h-5 w-5 text-primary" />
									Social Media Setup & Consultation
								</li>
							</ul>
						</div>
						<div className="self-center mt-8 flex justify-between flex-col gap-4">
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
						</div>
					</ShineBorder>
					<ShineBorder
						borderWidth={3}
						className="rounded-lg text-background border bg-background shadow-sm flex flex-col justify-between items-start w-full"
						color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
					>
						<div className="flex-grow">
							<h2 className="text-2xl font-bold text-background">
								AI-Powered Web Development
							</h2>
							<p className="mt-2  text-background">
								Tailored websites and web apps with
								AI-powered personalization and optimization
							</p>
							<ul className="mt-6 space-y-4 text-background">
								<li className="flex items-center">
									<CheckIcon className="mr-2 h-5 w-5 text-primary" />
									Custom website design
								</li>
								<li className="flex items-center">
									<CheckIcon className="mr-2 h-5 w-5 text-primary" />
									Responsive design
								</li>
								<li className="flex items-center">
									<CheckIcon className="mr-2 h-5 w-5 text-primary" />
									Basic SEO optimization
								</li>
								<li className="flex items-center">
									<CheckIcon className="mr-2 h-5 w-5 text-primary" />
									CMS integration
								</li>
							</ul>
						</div>
						<div className="self-center mt-8 flex justify-between flex-col gap-4">
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
						</div>
					</ShineBorder>
					<ShineBorder
						borderWidth={3}
						className="rounded-lg text-background border bg-background shadow-sm flex flex-col justify-between items-start w-full"
						color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
					>
						<div className="flex-grow">
							<h2 className="text-2xl font-bold text-background">
								Enterprise AI Suite
							</h2>
							<p className="mt-2 text-background">
								Comprehensive AI-driven solutions for large
								businesses
							</p>
							<ul className="mt-6 space-y-4 text-background">
								<li className="flex items-center">
									<CheckIcon className="mr-2 h-5 w-5 text-primary" />
									Advanced website/web app development
								</li>
								<li className="flex items-center">
									<CheckIcon className="mr-2 h-5 w-5 text-primary" />
									AI-powered marketing automation
								</li>
								<li className="flex items-center">
									<CheckIcon className="mr-2 h-5 w-5 text-primary" />
									Predictive analytics
								</li>
								<li className="flex items-center">
									<CheckIcon className="mr-2 h-5 w-5 text-primary" />
									Dedicated support
								</li>
							</ul>
						</div>
						<div className="self-center mt-8 flex justify-between flex-col gap-4">
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
						</div>
					</ShineBorder>
				</div>
			</div>
		</motion.section>
	);
}

export default ThreeBoxSection