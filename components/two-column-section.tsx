"use client";

import React from "react";
import BlurFade from "./magicui/blur-fade";

/**
 * Props for the TwoColumnSection component
 * @interface TwoColumnSectionProps
 */
interface TwoColumnSectionProps {
  header: string;
  eyebrow: string;
  items: {
    header: string;
    subheader: string;
  }[];
}

/**
 * ColumnItem component for displaying individual items in the right column
 * @param {Object} props - The props for the ColumnItem component
 * @returns {JSX.Element} The rendered ColumnItem component
 */
const ColumnItem: React.FC<TwoColumnSectionProps['items'][0] & { index: number }> = ({ header, subheader, index }) => (
  <BlurFade key={index} delay={0.5 + index * 0.05} inView className="grid gap-1">
    <h3 className="text-xl font-bold text-foreground">
      {header}
    </h3>
    <p className="text-muted-foreground">
      {subheader}
    </p>
  </BlurFade>
);

/**
 * TwoColumnSection component for displaying a two-column layout with header and items
 * @param {TwoColumnSectionProps} props - The props for the TwoColumnSection component
 * @returns {JSX.Element} The rendered TwoColumnSection component
 */
export function TwoColumnSection({
  header,
  eyebrow,
  items,
}: TwoColumnSectionProps): JSX.Element {
  return (
    <section className="w-full py-6 md:py-12 bg-background">
      <div className="grid items-center justify-center gap-12 px-4 text-left md:px-6 lg:grid-cols-2 lg:text-left">
        <BlurFade delay={0.25} inView className="space-y-4">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            {eyebrow}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {header}
          </h2>
        </BlurFade>
        <BlurFade delay={0.5} inView className="space-y-6">
          {items.map((item, i) => (
            <ColumnItem key={i} {...item} index={i} />
          ))}
        </BlurFade>
      </div>
    </section>
  );
}
