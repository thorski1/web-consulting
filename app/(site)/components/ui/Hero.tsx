import CalendarModal from "@/components/calendar-modal";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Image from "next/image";
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
		<header className="w-full pt-10 lg:pt-16 pb:6 lg:pb-12">
			<div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
				<div className="space-y-4">
					<AnimatedShinyText className="text-3xl font-bold tracking-tight sm:text-4xl">
						{title}
					</AnimatedShinyText>
					<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
						{subtitle}
					</p>
					{hasCta && (
						<CalendarModal
							label={"Schedule a consultation"}
						/>
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
