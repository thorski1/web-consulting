import Link from "next/link";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const CTASection = () => {
	return (
		<section className="w-full py-4 md:py-12 lg:py-16">
			<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
				<div className="space-y-3">
					<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
						Need help with a website?
					</h2>
				</div>
				<div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 text-start">
					<div className="space-y-2">
						<h3 className="font-semibold uppercase text-center">
							For individuals
						</h3>
						<p className="list-item text-muted list-inside">
							Create personal blogs, portfolios, or
							e-commerce sites for small business owners.
						</p>
						<p className="text-muted list-item list-inside">
							Regularly update content, ensure security, and
							add new features to personal sites.
						</p>
						<p className="text-muted list-item list-inside">
							Build custom web applications like booking
							systems, event management tools, or hobby
							project platforms.
						</p>
						<p className="text-muted list-item list-inside">
							Implement SEO strategies to increase
							visibility of personal blogs or small business
							websites.
						</p>
						<p className="text-muted list-item list-inside">
							Set up online stores using platforms like
							Shopify, WooCommerce, or custom-built
							solutions, and integrate payment gateways.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="font-semibold uppercase text-center">
							For businesses
						</h3>
						<p className="text-muted list-item list-inside">
							Develop corporate websites, online stores, or
							internal systems tailored to their specific
							needs.
						</p>
						<p className="text-muted list-item list-inside">
							Provide ongoing support, security updates, and
							performance optimization for business
							websites.
						</p>
						<p className="text-muted list-item list-inside">
							Develop bespoke software solutions, such as
							CRM systems, inventory management tools, or
							customer portals.
						</p>
						<p className="text-muted list-item list-inside">
							Conduct in-depth SEO audits, optimize websites
							for better search engine rankings, and set up
							analytics to track performance and user
							behavior.
						</p>
						<p className="text-muted list-item list-inside">
							Develop scalable e-commerce platforms,
							optimize product listings, and integrate
							advanced features like inventory management,
							customer reviews, and marketing tools.
						</p>
					</div>
				</div>
				<div className="mx-auto w-full max-w-sm">
					<Link
						href="#"
						className="uppercase inline-flex h-10 w-full items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors border border-background hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
						prefetch={false}
					>
						Schedule a consultation
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
