"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeaderSection } from "./header-section";
import BlurFade from "./magicui/blur-fade";
import ShineBorder from "./magicui/shine-border";

/**
 * Interface for an item in the ItemList
 * @interface Item
 */
interface Item {
	/** The image details for the item */
	image: {
		/** The URL of the image */
		url: string;
		/** The alt text for the image */
		alt: string;
	};
	/** The header text for the item */
	header: string;
	/** The subheader text for the item */
	subheader: string;
	/** Optional URL slug for the item */
	slug?: string;
}

/**
 * Props for the ItemList component
 * @interface ItemListProps
 */
interface ItemListProps {
	/** Array of items to display in the list */
	items: Item[];
	/** The main header for the section */
	header: string;
	/** Optional subheader for the section */
	subheader?: string;
}

/**
 * ItemList component for displaying a grid of items with images and text
 * @param {ItemListProps} props - The props for the ItemList component
 * @returns {JSX.Element} The rendered ItemList component
 */
export function ItemList({
	items,
	header,
	subheader,
}: ItemListProps): JSX.Element {
	return (
		<section className="w-full py-12 lg:py-20 bg-gradient-1">
			<div className="container mx-auto px-4 md:px-6">
				<HeaderSection
					header={header}
					subheader={subheader}
					className="text-center text-primary-foreground mb-12"
				/>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
					{items.map((item, i) => (
						<ItemCard key={i} item={item} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}

/**
 * Props for the ItemCard component
 * @interface ItemCardProps
 */
interface ItemCardProps {
	/** The item to display */
	item: Item;
	/** The index of the item for animation delay */
	index: number;
}

/**
 * ItemCard component for displaying a single item in the ItemList
 * @param {ItemCardProps} props - The props for the ItemCard component
 * @returns {JSX.Element} The rendered ItemCard component
 */
const ItemCard: React.FC<ItemCardProps> = ({ item, index }) => {
	const InnerComponent = () => (
		<>
			<div className="mb-4 flex items-center justify-center">
				<Image
					src={item.image.url}
					alt={item.image.alt}
					width={80}
					height={80}
					className="w-20 h-20 object-contain"
				/>
			</div>
			<h3 className="mb-2 text-lg text-center font-semibold text-primary-foreground">
				{item.header}
			</h3>
			<p className="text-center text-primary-foreground/80">
				{item.subheader}
			</p>
		</>
	);

	return (
		<BlurFade delay={0.25 + index * 0.05} inView>
			<ShineBorder
				color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
				borderWidth={3}
				className="p-6 relative flex h-full w-full flex-col hover:shadow-lg items-start overflow-hidden border md:shadow-xl bg-card shadow-md rounded-lg hover:scale-105 transform transition duration-500"
			>
				{item.slug ? (
					<Link
						href={`${item.slug}`}
						className="z-10 transition-all duration-300 w-full"
					>
						<InnerComponent />
					</Link>
				) : (
					<div className="rounded-lg transition-all duration-300 w-full">
						<InnerComponent />
					</div>
				)}
			</ShineBorder>
		</BlurFade>
	);
};

export default ItemList;
