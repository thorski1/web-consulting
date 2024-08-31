"use client";
import React from "react";
import ShineBorder from "./magicui/shine-border";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import BlurFade from "./magicui/blur-fade";

/**
 * Checklist items for each column
 */
const checklists = {
  columnOne: [
    "Basic Website Development",
    "Basic SEO",
    "Social Media Setup & Consultation",
  ],
  columnTwo: [
    "Custom website design",
    "Responsive design",
    "Basic SEO optimization",
    "CMS integration",
  ],
  columnThree: [
    "Advanced website/web app development",
    "AI-powered marketing automation",
    "Predictive analytics",
    "Dedicated support",
  ],
};

/**
 * Props for the PricingBox component
 * @interface PricingBoxProps
 */
interface PricingBoxProps {
  title: string;
  description: string;
  checklist: string[];
  price: string;
  ctaText: string;
  delay: number;
}

/**
 * PricingBox component for displaying a pricing option
 * @param {PricingBoxProps} props - The props for the PricingBox component
 * @returns {JSX.Element} The rendered PricingBox component
 */
const PricingBox: React.FC<PricingBoxProps> = ({ title, description, checklist, price, ctaText, delay }) => (
  <BlurFade
    delay={delay}
    inView
    className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between items-start w-full flex-grow"
  >
    <ShineBorder
      borderWidth={3}
      className="flex-grow w-full flex flex-col justify-between items-start"
      color={["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))"]}
    >
      <BlurFade delay={delay + 0.5} inView>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
      </BlurFade>
      <ul className="mt-6 space-y-4">
        {checklist.map((str, i) => (
          <BlurFade key={i} delay={delay + 0.5 + i * 0.05} inView>
            <li className="flex items-center">
              <CheckIcon strokeWidth={3} className="mr-2 h-5 w-5 text-primary" />
              {str}
            </li>
          </BlurFade>
        ))}
      </ul>
      <BlurFade delay={delay + 0.5} inView className="self-center mt-8 flex justify-between flex-col gap-4">
        <p className="text-xl text-center font-bold">{price}</p>
        <Link
          href="/schedule-consultation"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          {ctaText}
        </Link>
      </BlurFade>
    </ShineBorder>
  </BlurFade>
);

/**
 * ThreeBoxSection component for displaying pricing options
 * @returns {JSX.Element} The rendered ThreeBoxSection component
 */
const ThreeBoxSection: React.FC = () => {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <PricingBox
            title="Small Business Starter Pack"
            description="Ideal for new or small businesses"
            checklist={checklists.columnOne}
            price="Starting at $4,500"
            ctaText="Get started"
            delay={0.25}
          />
          <PricingBox
            title="AI-Powered Web Development"
            description="Tailored websites and web apps with AI-powered personalization and optimization"
            checklist={checklists.columnTwo}
            price="Starting at $10,000"
            ctaText="Get a quote"
            delay={0.5}
          />
          <PricingBox
            title="Enterprise AI Suite"
            description="Comprehensive AI-driven solutions for large businesses"
            checklist={checklists.columnThree}
            price="Custom (contact us)"
            ctaText="Contact sales"
            delay={0.75}
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeBoxSection;
