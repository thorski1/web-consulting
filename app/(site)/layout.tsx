import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/global/Footer";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { NavigationMenuDemo } from "./components/global/NavigationMenu";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Sanity Next.js Portfolio Site",
	description:
		"A personal portfolio site built with Sanity and Next.js",
	openGraph: {
		images: "add-your-open-graph-image-url-here",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${cn(
					"min-h-screen lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6 bg-background font-sans antialiased",
					fontSans.variable
				)} bg-zinc-900 text-white`}
			>
				<NavigationMenuDemo />
				{children}
				<Footer />
			</body>
		</html>
	);
}
