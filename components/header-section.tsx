"use client"
import React from "react";
import AnimatedShinyText from "./magicui/animated-shiny-text";
import BlurFade from "./magicui/blur-fade";

/**
 * Props for the HeaderSection component
 * @interface HeaderSectionProps
 */
interface HeaderSectionProps {
  /** The main header text */
  header: string;
  /** Optional subheader text */
  subheader?: string;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * HeaderSection component for displaying a header with an optional subheader
 * @param {HeaderSectionProps} props - The props for the HeaderSection component
 * @returns {JSX.Element} The rendered HeaderSection component
 */
export const HeaderSection: React.FC<HeaderSectionProps> = ({ 
  header, 
  subheader, 
  className = "" 
}) => {
  return (
    <section className={`mb-2 md:mb-4 lg:mb-8 ${className}`}>
      <BlurFade delay={0.25} inView>
        <AnimatedShinyText
          as="h2"
          className="text-3xl font-bold tracking-tight sm:text-4xl text-center text-primary-foreground"
        >
          {header}
        </AnimatedShinyText>
      </BlurFade>
      {subheader && (
        <BlurFade delay={0.5} inView>
          <p className="mx-auto max-w-[1000px] text-muted-foreground md:text-xl/relaxed text-center pt-3">
            {subheader}
          </p>
        </BlurFade>
      )}
    </section>
  );
}

export default HeaderSection;