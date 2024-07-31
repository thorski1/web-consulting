import Link from 'next/link';
import React from 'react'

const CTASection = () => {
  return (
		<section className="w-full py-6 xl:py-9">
			<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
				<div className="space-y-3">
					<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
						Ready to elevate your online presence?
					</h2>
					<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Let&apos;s work together to create a stunning
						website that showcases your brand and drives
						results.
					</p>
				</div>
				<div className="mx-auto w-full max-w-sm">
					<Link
						href="#"
						className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
						prefetch={false}
					>
						Schedule Your Free Consultation
					</Link>
				</div>
			</div>
		</section>
	);
}

export default CTASection