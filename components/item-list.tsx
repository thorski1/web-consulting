import Image from "next/image";
import Link from "next/link";
import { HeaderSection } from "./header-section";

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

export function ItemList({
	items,
	header,
	subheader,
}: Props) {
	return (
    <section className="w-full py-6 lg:py-12">
      <HeaderSection header={header} subheader={subheader} />
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
				{items.map((item, i) => {
					const InnerComponent = () => (
						<>
							<div className="mb-4 flex items-center justify-center">
								<Image
									src={item.image.url}
									alt={item.image.alt}
									width={32}
									height={32}
									className="md:w-20 w-28"
								/>
							</div>
							<h3 className="mb-2 text-lg text-center font-semibold">
								{item.header}
							</h3>
							<p className="text-muted-foreground text-center">
								{item.subheader}
							</p>
						</>
					);
					return item.slug ? (
						<Link
							key={i}
							prefetch={false}
							href={`/services/${item.slug}`}
							className={`rounded-lg bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg`}
						>
							<InnerComponent />
						</Link>
					) : (
						<div key={i} className="rounded-lg bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
							<InnerComponent />
						</div>
					);
				})}
			</div>
		</section>
	);
}
