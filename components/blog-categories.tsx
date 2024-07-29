import Link from "next/link";

export default function BlogCategories() {
	return (
		<section className="w-full py-6 xl:py-12">
			<div className="grid gap-8">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Explore Our Blog Categories
					</h2>
					<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Discover a wealth of knowledge across a diverse
						range of topics.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
					<Link
						href="#"
						prefetch={false}
						className="group rounded-lg bg-background transition-all hover:shadow-lg"
					>
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
							<BookIcon className="h-6 w-6" />
						</div>
						<h3 className="mt-4 text-xl font-semibold">
							Web Development
						</h3>
						<p className="mt-2 text-muted-foreground">
							Dive into the world of literature and explore
							the latest trends, reviews, and insights.
						</p>
					</Link>
					<Link
						href="#"
						prefetch={false}
						className="group rounded-lg bg-background transition-all hover:shadow-lg"
					>
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
							<CodeIcon className="h-6 w-6" />
						</div>
						<h3 className="mt-4 text-xl font-semibold">
							SEO
						</h3>
						<p className="mt-2 text-muted-foreground">
							Stay up-to-date with the latest advancements
							in technology and learn from industry experts.
						</p>
					</Link>
					<Link
						href="#"
						prefetch={false}
						className="group rounded-lg bg-background transition-all hover:shadow-lg"
					>
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
							<BrushIcon className="h-6 w-6" />
						</div>
						<h3 className="mt-4 text-xl font-semibold">
							E-Commmerce
						</h3>
						<p className="mt-2 text-muted-foreground">
							Explore the latest design trends, techniques,
							and inspirations from industry leaders.
						</p>
					</Link>
					<Link
						href="#"
						prefetch={false}
						className="group rounded-lg bg-background transition-all hover:shadow-lg"
					>
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
							<BriefcaseIcon className="h-6 w-6" />
						</div>
						<h3 className="mt-4 text-xl font-semibold">
							UI/UX Design
						</h3>
						<p className="mt-2 text-muted-foreground">
							Gain insights into the world of business,
							entrepreneurship, and professional
							development.
						</p>
					</Link>
					<Link
						href="#"
						prefetch={false}
						className="group rounded-lg bg-background transition-all hover:shadow-lg"
					>
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-card-foreground">
							<ApertureIcon className="h-6 w-6" />
						</div>
						<h3 className="mt-4 text-xl font-semibold">
							Digital Marketing
						</h3>
						<p className="mt-2 text-muted-foreground">
							Explore the art of photography, from
							techniques to inspiration and industry
							insights.
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
