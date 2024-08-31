"use client"

import React from 'react'
import { HeaderSection } from './header-section';
import CalendarModal from './calendar-modal';
import BlurFade from './magicui/blur-fade';

/**
 * Props for the CTASection component
 * @interface CTASectionProps
 */
interface CTASectionProps {
  /** The main header text */
  header?: string;
  /** The subheader text */
  subheader?: string;
  /** The label for the CTA button */
  ctaLabel?: string;
}

/**
 * CTASection component for displaying a call-to-action section
 * @param {CTASectionProps} props - The props for the CTASection component
 * @returns {JSX.Element} The rendered CTASection component
 */
const CTASection: React.FC<CTASectionProps> = ({
  header = "Ready to harness the power of AI for your business?",
  subheader = "Let's chat about how we can transform your online presence and drive real growth.",
  ctaLabel = "Schedule Your Free Consultation",
}) => {
  return (
    <section className="w-full py-12 lg:py-20 bg-gradient-1">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center justify-center gap-6 text-center">
          <BlurFade delay={0.2} inView>
            <HeaderSection
              header={header}
              subheader={subheader}
            />
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <div className="w-full flex justify-center">
              <CalendarModal label={ctaLabel} />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default CTASection;