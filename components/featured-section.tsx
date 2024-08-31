"use client"

import React from "react";
import Image from "next/image";
import { HeaderSection } from "./header-section";
import ShineBorder from "./magicui/shine-border";
import BlurFade from "./magicui/blur-fade";

/**
 * Interface for a feature item
 * @interface FeatureItem
 */
interface FeatureItem {
  /** The header text for the feature */
  header: string;
  /** The subheader text for the feature */
  subheader: string;
  /** The image details for the feature */
  image: {
    /** The URL of the image */
    url: string;
    /** The alt text for the image */
    alt: string;
  };
}

/**
 * Props for the ThreeFeatureSection component
 * @interface ThreeFeatureSectionProps
 */
interface ThreeFeatureSectionProps {
  /** The main header for the section */
  header: string;
  /** Array of feature items to display */
  items: FeatureItem[];
}

/**
 * ThreeFeatureSection component for displaying three featured items
 * @param {ThreeFeatureSectionProps} props - The props for the ThreeFeatureSection component
 * @returns {JSX.Element} The rendered ThreeFeatureSection component
 */
export function ThreeFeatureSection({ header, items }: ThreeFeatureSectionProps): JSX.Element {
  return (
    <section className="w-full py-12 xl:py-16 bg-gradient-1">
      <div className="container mx-auto space-y-12 px-4 md:px-6">
        <BlurFade delay={0.2} inView>
          <HeaderSection header={header}/>
        </BlurFade>
        <div className="mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, i) => (
            <BlurFade key={i} delay={0.25 + i * 0.05} inView>
              <ShineBorder
                borderWidth={3}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="group transition-all duration-300 hover:shadow-xl relative flex h-auto w-full flex-col items-start overflow-hidden border md:shadow-xl bg-card shadow-md rounded-lg p-4"
              >
                <Image
                  src={item.image.url}
                  width={500}
                  height={300}
                  alt={item.image.alt}
                  className="w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
                />
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-primary-foreground">
                    {item.header}
                  </h3>
                  <p className="text-sm text-primary-foreground/80">
                    {item.subheader}
                  </p>
                </div>
              </ShineBorder>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThreeFeatureSection;
