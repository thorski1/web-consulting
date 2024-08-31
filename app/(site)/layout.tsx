import "../globals.css";
import type { Metadata } from "next";
import Footer from "./components/global/Footer";
import NavBar from "@/components/navigation-menu";
import { Inter as FontSans } from "next/font/google";
import {
	GoogleAnalytics,
	GoogleTagManager,
} from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans", // CSS variable name for the font
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<head>
				<link
					rel="icon"
					href="/favicon.svg"
					type="image/svg+xml"
				/>
				<GoogleTagManager gtmId="GTM-NCJRDXKB" />
			</head>
			<body
				className={cn(
					"relative min-h-screen bg-background font-sans antialiased", // Set minimum height, background, font, and enable antialiasing
					"text-foreground", // Set text color to contrast with dark background
					"flex flex-col", // Use flexbox for layout
					fontSans.variable // Apply the custom font
				)}
			>
				<div className="flex-grow flex flex-col pb-96 lg:pb-80">
					<NavBar />
					<main className="flex-grow mx-auto px-4 sm:px-6 lg:px-8">
						{children} {/* Render the page-specific content */}
					</main>
				</div>
				<Footer />
				<Analytics />
			</body>
			<GoogleAnalytics gaId="G-82N8RY63ZQ" />
		</html>
	);
}
