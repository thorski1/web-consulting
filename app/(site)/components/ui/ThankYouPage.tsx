import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import TextBlock from "@/components/text-block";
import Link from "next/link";

export default function ThankYouPage({content}: {content: string}) {
	return (
		<div className="flex min-h-[75dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-xl text-center">
				<CircleCheckIcon className="mx-auto h-20 w-20 text-popover" />
				<AnimatedShinyText
					className="mt-4 mb-[-2rem] text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl"
					as={"h1"}
				>
					Thank You!
				</AnimatedShinyText>
				<TextBlock text={[content]} />
					<Link
						href="/"
						className="inline-flex items-center rounded-md bg-background border-muted-foreground border-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-background shadow-sm transition-colors hover:bg-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
						prefetch={false}
					>
						Go to Homepage
					</Link>
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
