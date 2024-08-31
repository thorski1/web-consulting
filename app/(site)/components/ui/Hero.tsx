"use client"

import React from "react";
import Image from "next/image";
import CalendarModal from "@/components/calendar-modal";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import BlurFade from "@/components/magicui/blur-fade";

/**
 * Props for the Hero component
 * @interface HeroProps
 */
interface HeroProps {
  /** The main title of the hero section */
  title: string;
  /** The subtitle or description text */
  subtitle: string;
  /** The URL of the hero image */
  image: string;
  /** Whether to show the CTA button */
  hasCta?: boolean;
}

/**
 * Hero component for displaying a prominent header section
 * @param {HeroProps} props - The props for the Hero component
 * @returns {JSX.Element} The rendered Hero component
 */
export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  hasCta = true,
}) => {
  /**
   * Renders the hero content (title, subtitle, and CTA)
   * @returns {JSX.Element} The rendered hero content
   */
  const renderHeroContent = () => (
    <div className="space-y-4">
      <BlurFade delay={0.25} inView>
        <AnimatedShinyText className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
          {title}
        </AnimatedShinyText>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
          {subtitle}
        </p>
      </BlurFade>
      {hasCta && renderCTA()}
    </div>
  );

  /**
   * Renders the Call-to-Action button
   * @returns {JSX.Element} The rendered CTA button
   */
  const renderCTA = () => (
    <CalendarModal label="Schedule a consultation" />
  );

  /**
   * Renders the hero image
   * @returns {JSX.Element} The rendered hero image
   */
  const renderHeroImage = () => (
    <BlurFade delay={1} inView className="relative -z-10">
      <Image
        src={image}
        width={500}
        height={281}
        alt="Hero"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
      />
    </BlurFade>
  );

  return (
    <header className="w-full pt-10 lg:pt-16 pb-6 lg:pb-12 bg-gradient-1">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        {renderHeroContent()}
        {renderHeroImage()}
      </div>
    </header>
  );
};

export default Hero;
