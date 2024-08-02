import Image from "next/image"
import Link from "next/link"
import { HeaderSection } from "./header-section"

interface Props {
	items: {
		image: { url: string; alt: string };
		header: string;
		subheader: string;
		slug?: string;
	}[];
	header: string;
	subheader?: string;
}

export function TwoByTwoGrid({header, subheader, items}: Props) {
  return (
		<section className="w-full py-6 lg:py-12">
			<HeaderSection
				header={header}
				subheader={subheader}
			/>
			<div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:gap-16">
				{items.map((item, i) => (
					<div key={i} className="relative overflow-hidden rounded-lg shadow-lg">
						<Image
							src={item.image.url}
							alt={item.image.alt}
							width={660}
							height={371}
							className="object-cover w-full aspect-[16/9]"
						/>
						<div className="pt-4 bg-background">
							<h3 className="text-xl text-center pb-2 font-bold">
								{item.header}
							</h3>
							<p className="text-sm text-muted-foreground">
								{item.subheader}
							</p>
						</div>
					</div>
				))}
				</div>
		</section>
	);
}
