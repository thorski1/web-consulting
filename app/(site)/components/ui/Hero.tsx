import Link from "next/link";
import React from "react";

interface Props {
	title: string;
	subtitle: string;
	hasCta?: boolean;
}

export const Hero = ({
	title,
	subtitle,
	hasCta = true,
}: Props) => {
	return (
		<header className="w-full py-6 xl:py-12">
			<div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
				<div className="space-y-3 text-center">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
						{title}
					</h1>
					<p className="text-muted-foreground md:text-xl lg:text-2xl">
						{subtitle}
					</p>
				</div>
				{hasCta && (
					<Link
						href="/schedule-consultation"
						className="text-center inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
						prefetch={false}
					>
						Schedule Your Free Consultation
					</Link>
				)}
			</div>
		</header>
	);
};
