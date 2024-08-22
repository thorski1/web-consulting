"use client"
import React from 'react'
import { HeaderSection } from './header-section';
import CalendarModal from './calendar-modal';
import { motion } from "framer-motion";

interface Props {
	header?: string;
	subheader?: string;
	ctaLabel?: string;
}

const CTASection = ({
	header = "Ready to harness the power of AI for your business?",
	subheader = "Let's chat about how we can transform your online presence and drive real growth.",
	ctaLabel = "Schedule Your Free Consultation",
}: Props) => {
	return (
		<motion.section
			id="about"
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className="w-full py-6 lg:py-12"
		>
			<div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
				<HeaderSection
					header={header}
					subheader={subheader}
				/>
				<div className="w-full flex justify-center">
					<CalendarModal label={ctaLabel} />
				</div>
			</div>
		</motion.section>
	);
};

export default CTASection