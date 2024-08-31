"use client"
import Image from "next/image"
import { HeaderSection } from "./header-section"
import ShineBorder from "./magicui/shine-border";
import BlurFade from "./magicui/blur-fade";

/**
 * Props for the TwoByTwoGrid component
 * @interface TwoByTwoGridProps
 */
interface TwoByTwoGridProps {
	items: {
		image: { url: string; alt: string };
		header: string;
		subheader: string;
		slug?: string;
	}[];
	header: string;
	subheader?: string;
}

/**
 * GridItem component for displaying individual items in the grid
 * @param {Object} props - The props for the GridItem component
 * @returns {JSX.Element} The rendered GridItem component
 */
const GridItem: React.FC<TwoByTwoGridProps['items'][0] & { index: number }> = ({ image, header, subheader, index }) => (
	<BlurFade
		className="relative flex h-auto w-full flex-col items-start overflow-hidden rounded-lg"
		delay={0.25 + index * 0.05}
		inView
	>
		<ShineBorder
			color={["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))"]}
			borderWidth={3}
			className="relative flex h-full w-full flex-col items-start overflow-hidden bg-card text-card-foreground shadow-md rounded-lg p-4"
		>
			<Image
				src={image.url}
				alt={image.alt}
				width={660}
				height={371}
				className="object-cover w-full aspect-[16/9]"
			/>
			<div className="pt-4">
				<h3 className="text-xl text-center pb-2 font-bold">
					{header}
				</h3>
				<p className="text-sm text-foreground">{subheader}</p>
			</div>
		</ShineBorder>
	</BlurFade>
)

/**
 * TwoByTwoGrid component for displaying a grid of items with a header
 * @param {TwoByTwoGridProps} props - The props for the TwoByTwoGrid component
 * @returns {JSX.Element} The rendered TwoByTwoGrid component
 */
export function TwoByTwoGrid({ header, subheader, items }: TwoByTwoGridProps) {
  return (
		<section className="bg-background">
			<HeaderSection
				header={header}
				subheader={subheader}
			/>
			<div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:gap-16">
				{items.map((item, i) => (
					<GridItem key={i} {...item} index={i} />
				))}
			</div>
		</section>
	);
}
