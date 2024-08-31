import React from "react";
import {
	BentoCard,
	BentoGrid,
} from "@/components/magicui/bento-grid";

/**
 * Interface for a feature item in the BentoGrid
 * @interface IFeature
 */
interface IFeature {
	/** The icon component for the feature */
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	/** The name of the feature */
	name: string;
	/** The description of the feature */
	description: string;
	/** Optional URL for the feature */
	href?: string;
	/** Optional call-to-action text */
	cta?: string;
	/** Background component or style for the feature card */
	background: React.ReactNode;
	/** Additional CSS classes for the feature card */
	className: string;
}

/**
 * Props for the BentoGridSection component
 * @interface BentoGridSectionProps
 */
interface BentoGridSectionProps {
	/** Array of features to display in the BentoGrid */
	features: IFeature[];
}

/**
 * BentoGridSection component for displaying a grid of feature cards
 * @param {BentoGridSectionProps} props - The props for the BentoGridSection component
 * @returns {Promise<JSX.Element>} The rendered BentoGridSection component
 */
export async function BentoGridSection({ features }: BentoGridSectionProps): Promise<JSX.Element> {
	return (
		<section className="py-12 bg-gradient-1">
			<div className="container mx-auto px-4">
				<BentoGrid className="lg:grid-rows-3">
					{features.map((feature) => (
						<BentoCard 
							key={feature.name} 
							{...feature}
							className={`bg-card text-card-foreground ${feature.className}`}
						/>
					))}
				</BentoGrid>
			</div>
		</section>
	);
}

export default BentoGridSection;
