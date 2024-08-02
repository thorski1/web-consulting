import Image from "next/image";
import Link from "next/link";
import { HeaderSection } from "./header-section";

export default function BlogCategories() {
	return (
		<section className="w-full py-6 xl:py-12">
			<div className="grid gap-8">
				<HeaderSection
					header="Explore Our Blog Categories"
					subheader="Discover a wealth of knowledge across a diverse range of topics."
				/>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
					<Link
						href="#"
						prefetch={false}
						className="flex flex-col items-center text-center rounded-lg bg-background transition-all hover:shadow-lg"
					>
						<div className="flex h-20 w-20 items-center justify-center rounded-full text-primary-foreground">
							<Image
								src="/icons/web-development.svg"
								width="100"
								height="100"
								alt="web development icon"
								className="mx-auto overflow-hidden object-cover object-center w-16"
							/>
						</div>
						<h3 className="mt-4 text-xl font-semibold">
							Web Development
						</h3>
						<p className="mt-2 text-muted-foreground">
							Expertly crafted websites and web apps
							tailored to elevate your business. Proven
							results driving growth and exceeding
							expectations.
						</p>
					</Link>
					<Link
						href="#"
						prefetch={false}
						className="flex flex-col items-center text-center roundedbackground transition-all hover:shadow-lg"
					>
						<div className="flex h-20 w-20 items-center justify-center rounded-full text-primary-foreground">
							<Image
								src="/icons/seo.svg"
								width="100"
								height="100"
								alt="web development icon"
								className="mx-auto overflow-hidden object-cover object-center w-16"
							/>
						</div>
						<h3 className="mt-4 text-xl font-semibold">
							SEO
						</h3>
						<p className="mt-2 text-muted-foreground">
							Elevate your online presence with expert SEO
							services. Boost your website&apos;s
							visibility, attract targeted traffic, and
							achieve lasting growth.
						</p>
					</Link>
					<Link
						href="#"
						prefetch={false}
						className="flex flex-col items-center text-center roundedbackground transition-all hover:shadow-lg"
					>
						<div className="flex h-20 w-20 items-center justify-center rounded-full text-primary-foreground">
							<Image
								src="/icons/digital-marketing.svg"
								width="100"
								height="100"
								alt="web development icon"
								className="mx-auto overflow-hidden object-cover object-center w-16"
							/>
						</div>
						<h3 className="mt-4 text-xl font-semibold">
							Digital Marketing
						</h3>
						<p className="mt-2 text-muted-foreground">
							Ignite your brand with strategic digital
							marketing campaigns. Increase reach,
							engagement, and conversions through targeted
							solutions.
						</p>
					</Link>
					<Link
						href="#"
						prefetch={false}
						className="flex flex-col items-center text-center roundedbackground transition-all hover:shadow-lg"
					>
						<div className="flex h-20 w-20 items-center justify-center rounded-full text-primary-foreground">
							<Image
								src="/icons/project-design.svg"
								width="100"
								height="100"
								alt="web development icon"
								className="mx-auto overflow-hidden object-cover object-center w-16"
							/>
						</div>
						<h3 className="mt-4 text-xl font-semibold">
							UI/UX Design
						</h3>
						<p className="mt-2 text-muted-foreground">
							Craft intuitive, user-centric interfaces for
							seamless digital experiences. Enhance
							usability and drive customer satisfaction.
						</p>
					</Link>
					<Link
						href="#"
						prefetch={false}
						className="flex flex-col items-center text-center roundedbackground transition-all hover:shadow-lg"
					>
						<div className="flex h-20 w-20 items-center justify-center rounded-full text-primary-foreground">
							<Image
								src="/icons/consultation-strategy.svg"
								width="100"
								height="100"
								alt="web development icon"
								className="mx-auto overflow-hidden object-cover object-center w-16"
							/>
						</div>
						<h3 className="mt-4 text-xl font-semibold">
							Consultation and Strategy Development
						</h3>
						<p className="mt-2 text-muted-foreground">
							Unlock your business potential with expert
							consultation and data-driven strategies.
							Achieve your goals and stay ahead of the
							curve.
						</p>
					</Link>
				</div>
			</div>
		</section>
	);
}

function ApertureIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="m14.31 8 5.74 9.94" />
			<path d="M9.69 8h11.48" />
			<path d="m7.38 12 5.74-9.94" />
			<path d="M9.69 16 3.95 6.06" />
			<path d="M14.31 16H2.83" />
			<path d="m16.62 12-5.74 9.94" />
		</svg>
	);
}

function BookIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
		</svg>
	);
}

function BriefcaseIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
			<rect width="20" height="14" x="2" y="6" rx="2" />
		</svg>
	);
}

function BrushIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
			<path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
		</svg>
	);
}

function CodeIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="16 18 22 12 16 6" />
			<polyline points="8 6 2 12 8 18" />
		</svg>
	);
}

function XIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}
