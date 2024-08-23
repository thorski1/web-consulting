

import {
	BentoCard,
	BentoGrid,
} from "@/components/magicui/bento-grid";

interface IFeature {
	Icon: any;
	name: string;
	description: string;
	href?: string;
	cta?: string;
	background: any;
	className: string;
}

export async function BentoGridSection({features}: {features: IFeature[]}) {
	return (
		<BentoGrid className="lg:grid-rows-3">
			{features.map((feature) => (
				<BentoCard key={feature.name} {...feature} />
			))}
		</BentoGrid>
	);
}
