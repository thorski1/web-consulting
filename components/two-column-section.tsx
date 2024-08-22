"use client"
import {motion} from "framer-motion"
interface Props {
  header: string;
  eyebrow: string;
  items: {
    header: string;
    subheader: string;
  }[]
}
export function TwoColumnSection({header, eyebrow, items}: Props) {
  return (
		<motion.section
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }} className="w-full py-6 md:py-12">
			<div className="grid items-center justify-center gap-12 px-4 text-left md:px-6 lg:grid-cols-2 lg:text-left">
				<div className="space-y-4">
					<div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
						{eyebrow}
					</div>
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						{header}
					</h2>
				</div>
				<div className="space-y-6">
					{items.map((item, i) => {
						return (
							<div key={i} className="grid gap-1">
								<h3 className="text-xl font-bold">
									{item.header}
								</h3>
								<p className="text-muted-foreground">
									{item.subheader}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</motion.section>
	);
}
