"use client";
import React from "react";
import Image from "next/image";
import { HeaderSection } from "./header-section";
import BlurFade from "./magicui/blur-fade";

/**
 * Props for the IconGridItem component
 * @interface IconGridItemProps
 */
interface IconGridItemProps {
  iconSrc: string;
  title: string;
  description: string;
  delay: number;
}

/**
 * IconGridItem component for displaying an icon, title, and description
 * @param {IconGridItemProps} props - The props for the IconGridItem component
 * @returns {JSX.Element} The rendered IconGridItem component
 */
const IconGridItem: React.FC<IconGridItemProps> = ({ iconSrc, title, description, delay }) => (
  <BlurFade delay={delay} inView className="space-y-4 text-center">
    <Image
      src={iconSrc}
      width={100}
      height={100}
      alt={`${title} icon`}
      className="mx-auto overflow-hidden object-cover object-center w-32 fill-primary"
    />
    <h3 className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl text-foreground">
      {title}
    </h3>
    <p className="text-muted-foreground text-left">
      {description}
    </p>
  </BlurFade>
);

/**
 * ThreeColumnIconGrid component for displaying a grid of icons with descriptions
 * @returns {JSX.Element} The rendered ThreeColumnIconGrid component
 */
const ThreeColumnIconGrid: React.FC = () => {
  const iconItems = [
    {
      iconSrc: "/icons/ribbon.svg",
      title: "Commitment to Excellence",
      description: "We are committed to delivering top-notch web solutions that meet the highest standards of quality and performance. Our work is driven by a dedication to excellence in every project.",
      delay: 0.25,
    },
    {
      iconSrc: "/icons/customer-centric.svg",
      title: "Customer-Centric Approach",
      description: "At ReCode Pros, our clients are at the heart of everything we do. We take the time to understand your unique needs and tailor our services to help you achieve your goals.",
      delay: 0.5,
    },
    {
      iconSrc: "/icons/innovation-adaptability.svg",
      title: "Innovation and Adaptability",
      description: "In the ever-evolving digital landscape, innovation is key. We stay ahead of the curve by embracing the latest technologies and trends, ensuring that our clients benefit from cutting-edge solutions.",
      delay: 0.75,
    },
  ];

  return (
    <section className="w-full py-6 xl:py-12 bg-background">
      <HeaderSection header="Our Values" />
      <div className="container grid items-start justify-center gap-8 px-4 md:px-6 lg:grid-cols-3">
        {iconItems.map((item, index) => (
          <IconGridItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ThreeColumnIconGrid;
