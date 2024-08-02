import Link from 'next/link';
import React from 'react'
import { HeaderSection } from './header-section';

interface Props {
	header?: string;
	subheader?: string;
	ctaLabel?: string;
}

const CTASection = ({
	header = "Ready to harness the power of AI for your business?",
	subheader = "Let's chat about how we can transform your online presence and drive real growth.",
	ctaLabel = "Schedule Your Free Consultation",
}) => {
	return (
		<section className="w-full py-6 lg:py-12">
			<div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
				<HeaderSection
					header={header}
					subheader={subheader}
				/>
				<div className="mx-auto w-full max-w-sm">
					<Link
						href="/schedule-consultation"
						className="inline-flex h-10 items-center justify-center rounded-md bg-popover px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
						prefetch={false}
					>
						{ctaLabel}
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CTASection