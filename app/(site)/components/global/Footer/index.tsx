import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="container absolute bottom-0 left-0 right-0 text-sm w-full py-6 lg:py-12 mx-4 md:mx-6">
			<div className="container max-w-7xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
				<div className="flex items-start gap-4">
					<Image
						src="/icons/logo.svg"
						width="20"
						height="20"
						alt="Recode Pros"
						className="w-[1.75rem] h-[1.75rem]"
					/>
					<span className="text-lg font-semibold text-muted-foreground">
						Recode Pros
					</span>
				</div>
				<div className="flex flex-col items-start gap-0">
					<Link href="#" className="block" prefetch={false}>
						Blog
					</Link>
					<Link href="#" className="block" prefetch={false}>
						Pricing
					</Link>
					<Link href="#" className="block" prefetch={false}>
						About
					</Link>
				</div>
				<div className="grid gap-0">
					<Link href="#" className="block" prefetch={false}>
						Contact
					</Link>
					<Link href="#" className="block" prefetch={false}>
						Web Development
					</Link>
					<Link href="#" className="block" prefetch={false}>
						SEO
					</Link>
				</div>
				<div className="grid gap-0">
					<Link href="#" className="block" prefetch={false}>
						Digital Marketing
					</Link>
					<Link href="#" className="block" prefetch={false}>
						UI/UX Design
					</Link>
					<Link href="#" className="block" prefetch={false}>
						Digital Strategy
					</Link>
				</div>
			</div>
		</footer>
	);
}
