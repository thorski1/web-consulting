import Link from "next/link";

export default function ThankYouPage() {
	return (
		<div className="flex min-h-[75dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-md text-center">
				<CircleCheckIcon className="mx-auto h-12 w-12 text-muted-foreground" />
				<h1 className="mt-4 text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl">
					Thank You!
				</h1>
				<p className="mt-4 text-muted-foreground">
					Thank you for your interest! We will reach out to
					you via email shortly to schedule your free
					10-minute consultation. We look forward to
					discussing how we can help elevate your website.
					Talk to you soon!
				</p>
				<div className="mt-6">
					<Link
						href="/"
						className="inline-flex items-center rounded-md bg-background border-muted-foreground border-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-background shadow-sm transition-colors hover:bg-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
						prefetch={false}
					>
						Go to Homepage
					</Link>
				</div>
			</div>
		</div>
	);
}

function CircleCheckIcon(props: any) {
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
			<path d="m9 12 2 2 4-4" />
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
