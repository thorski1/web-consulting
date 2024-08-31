"use client"
import React from 'react'
import Image from "next/image";
import { HeaderSection } from "./header-section";
import { motion } from "framer-motion";
import BlurFade from './magicui/blur-fade';

/**
 * Props for the ColumnItem component
 * @interface ColumnItemProps
 */
interface ColumnItemProps {
  title: string;
  content: string;
  delay: number;
}

/**
 * ColumnItem component for displaying a title and content with animation
 * @param {ColumnItemProps} props - The props for the ColumnItem component
 * @returns {JSX.Element} The rendered ColumnItem component
 */
const ColumnItem: React.FC<ColumnItemProps> = ({ title, content, delay }) => (
  <li>
    <BlurFade delay={delay} inView className="grid gap-1">
      <h3 className="text-xl font-bold text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground text-left">
        {content}
      </p>
    </BlurFade>
  </li>
);

/**
 * ThreeColumnTextSection component for displaying a section with an image and three columns of text
 * @returns {JSX.Element} The rendered ThreeColumnTextSection component
 */
const ThreeColumnTextSection: React.FC = () => {
  const columnItems = [
    {
      title: "AI-First Approach",
      content: "We're not just tech-savvy; we're AI-obsessed. Our team uses cutting-edge AI tools and data-driven insights to optimize every aspect of your web presence, from design to marketing.",
      delay: 0.25
    },
    {
      title: "Data-Driven Decisions",
      content: "We don't just guess; we analyze. Our AI-powered solutions give you the edge, ensuring your website works smarter, not harder.",
      delay: 0.5
    },
    {
      title: "Proven Results",
      content: "We're not just another agency; we're your growth partner. Our track record speaks for itself—we deliver measurable results that impact your bottom line.",
      delay: 0.75
    }
  ];

  return (
    <section className="w-full py-6 lg:py-12 bg-background">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <HeaderSection header="Why Choose ReCode Pros?" />
        <div className="mx-auto grid max-w-5xl items-center gap-6 pb-12 lg:grid-cols-2 lg:gap-12">
          <BlurFade delay={0.25} inView>
            <Image
              src="/services-rendered.svg"
              width={550}
              height={310}
              alt="web collaboration"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
            />
          </BlurFade>
          <BlurFade delay={0.5} inView className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              {columnItems.map((item, index) => (
                <ColumnItem key={index} {...item} />
              ))}
            </ul>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

export default ThreeColumnTextSection