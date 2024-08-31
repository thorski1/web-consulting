import React from 'react';
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import TextBlock from "@/components/text-block";
import Link from "next/link";

/**
 * Props for the ThankYouPage component
 * @interface ThankYouPageProps
 */
interface ThankYouPageProps {
  /** The content to display on the thank you page */
  content: string;
}

/**
 * ThankYouPage component for displaying a confirmation message after form submission
 * @param {ThankYouPageProps} props - The props for the ThankYouPage component
 * @returns {JSX.Element} The rendered ThankYouPage component
 */
const ThankYouPage: React.FC<ThankYouPageProps> = ({ content }) => {
  return (
    <div className="flex min-h-[75dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-gradient-1">
      <div className="mx-auto max-w-xl text-center">
        <CircleCheckIcon className="mx-auto h-20 w-20 text-primary" />
        <AnimatedShinyText
          className="mt-4 mb-[-2rem] text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl"
          as="h1"
        >
          Thank You!
        </AnimatedShinyText>
        <TextBlock text={[content]} />
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          prefetch={false}
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

/**
 * CircleCheckIcon component for displaying a checkmark icon
 * @param {React.SVGProps<SVGSVGElement>} props - The props for the SVG element
 * @returns {JSX.Element} The rendered CircleCheckIcon component
 */
const CircleCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default ThankYouPage;
