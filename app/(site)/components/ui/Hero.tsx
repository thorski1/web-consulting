import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
	title: string;
	subtitle: string;
    hasCta?: boolean;
    image: string;
}

export const Hero = ({
	title,
    subtitle,
    image,
	hasCta = true,
}: Props) => {
	return (
		<header className="w-full py-6 lg:py-12">
			<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
				<div className="space-y-4">
					<h1 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
						{title}
					</h1>
					<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
						{subtitle}
					</p>
					{hasCta && (
						<Link
							href="/schedule-consultation"
							className="inline-flex h-10 items-center justify-center rounded-md bg-popover px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
							prefetch={false}
						>
							Schedule Your Free Consultation
						</Link>
					)}
				</div>
				<Image
					src={image}
					width="500"
					height="281"
					alt="Hero"
					className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
				/>
			</div>
		</header>
	);
};
