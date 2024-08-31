import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="container absolute bottom-0 left-0 right-0 w-full py-6 lg:py-12 px-4 md:px-16 bg-gradient-1">
			<div className="container max-w-7xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
				<div className="flex items-start gap-4 relative">
					<Image
						src="/icons/logo.svg"
						width="20"
						height="20"
						alt="Recode Pros"
						className="w-8 h-8"
					/>
					<span className="text-xl font-semibold text-opacity-high">
						Recode Pros
					</span>
				</div>
				<div className="flex flex-col items-start gap-2">
					<Link href="/blog" className="hover:text-accent transition-colors duration-200" prefetch={false}>
						Blog
					</Link>
					<Link href="/pricing" className="hover:text-accent transition-colors duration-200" prefetch={false}>
						Pricing
					</Link>
					<Link href="/about" className="hover:text-accent transition-colors duration-200" prefetch={false}>
						About
					</Link>
				</div>
				<div className="grid gap-2">
					<Link href="/contact" className="hover:text-accent transition-colors duration-200" prefetch={false}>
						Contact
					</Link>
					<Link href="/services/web-development" className="hover:text-accent transition-colors duration-200" prefetch={false}>
						Web Development
					</Link>
					<Link href="/services/seo" className="hover:text-accent transition-colors duration-200" prefetch={false}>
						SEO
					</Link>
				</div>
				<div className="grid gap-2">
					<Link href="/services/digital-marketing" className="hover:text-accent transition-colors duration-200" prefetch={false}>
						Digital Marketing
					</Link>
					<Link href="/services/design" className="hover:text-accent transition-colors duration-200" prefetch={false}>
						UI/UX Design
					</Link>
					<Link href="/services/strategy" className="hover:text-accent transition-colors duration-200" prefetch={false}>
						Digital Strategy
					</Link>
				</div>
				<div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col items-center gap-2">
					<h3 className="text-lg font-semibold text-opacity-high">Stay Connected</h3>
					<div className="flex gap-4 items-center">
						<a href="#" className="text-2xl hover:text-accent transition-colors duration-200">
							<TwitterLogoIcon />
						</a>
						<a href="#" className="text-2xl hover:text-accent transition-colors duration-200">
							<LinkedInLogoIcon />
						</a>
						<a href="#" className="text-2xl hover:text-accent transition-colors duration-200">
							<GitHubLogoIcon />
						</a>
					</div>
				</div>
			</div>
			<div className="mt-8 pt-8 border-t border-primary-foreground border-opacity-20 text-center text-sm text-opacity-medium">
				© {new Date().getFullYear()} Recode Pros. All rights reserved.
			</div>
		</footer>
	);
}
