import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the ShimmerButton component
 * @interface ShimmerButtonProps
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 */
export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The color of the shimmer effect */
  shimmerColor?: string;
  /** The size of the shimmer effect */
  shimmerSize?: string;
  /** The border radius of the button */
  borderRadius?: string;
  /** The duration of the shimmer animation */
  shimmerDuration?: string;
  /** The background color of the button */
  background?: string;
  /** Additional CSS classes for the button */
  className?: string;
  /** The content of the button */
  children?: React.ReactNode;
}

/**
 * ShimmerButton component with a shimmering effect
 * @param {ShimmerButtonProps} props - The props for the ShimmerButton component
 * @returns {JSX.Element} The rendered ShimmerButton component
 */
const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "hsl(var(--primary-foreground))",
      shimmerSize = "0.2em",
      shimmerDuration = "3s",
      borderRadius = "0.5rem",
      background = "hsl(var(--primary))",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-primary/10 px-3 py-2 text-primary-foreground [background:var(--bg)] [border-radius:var(--radius)]",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Spark container */}
        <SparkContainer />
        {children}
        {/* Highlight */}
        <Highlight />
        {/* Backdrop */}
        <Backdrop />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;

/**
 * SparkContainer component for the shimmering effect
 * @returns {JSX.Element} The rendered SparkContainer component
 */
const SparkContainer = () => (
  <div
    className={cn(
      "-z-30 blur-[2px]",
      "absolute inset-0 overflow-visible [container-type:size]"
    )}
  >
    <Spark />
  </div>
);

/**
 * Spark component for the shimmering effect
 * @returns {JSX.Element} The rendered Spark component
 */
const Spark = () => (
  <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
    <div className="animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
  </div>
);

/**
 * Highlight component for the button
 * @returns {JSX.Element} The rendered Highlight component
 */
const Highlight = () => (
  <div
    className={cn(
      "absolute inset-0 h-full w-full",
      "rounded-[calc(var(--radius)-1px)] px-4 py-1.5 text-sm font-medium",
      "shadow-[inset_0_-8px_10px_hsl(var(--primary-foreground)/10%)]",
      "transform-gpu transition-all duration-300 ease-in-out",
      "group-hover:shadow-[inset_0_-6px_10px_hsl(var(--primary-foreground)/15%)]",
      "group-active:shadow-[inset_0_-10px_10px_hsl(var(--primary-foreground)/20%)]"
    )}
  />
);

/**
 * Backdrop component for the button
 * @returns {JSX.Element} The rendered Backdrop component
 */
const Backdrop = () => (
  <div
    className={cn(
      "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
    )}
  />
);
