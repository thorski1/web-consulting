import Image from "next/image";
import { HeaderSection } from "./header-section";

interface Props {
	header: string;
	items: {
		header: string;
		subheader: string;
		image: { url: string; alt: string };
	}[];
}

export function ThreeFeatureSection({ header, items }: Props) {
	return (
		<section className="w-full py-6 xl:py-12">
			<div className="container space-y-12 px-4 md:px-6">
				<HeaderSection header={header} />
				<div className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
					{items.map((item, i) => {
						return (
							<div
								key={i}
								className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
							>
								<Image
									src={item.image.url}
									width={500}
									height={300}
									alt={item.image.alt}
									className="w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
								/>
								<div className="bg-background pt-4">
									<h3 className="text-lg font-bold">
										{item.header}
									</h3>
									<p className="text-sm text-muted-foreground">
										{item.subheader}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
