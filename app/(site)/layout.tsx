import "../globals.css";
import type { Metadata } from "next";
import Footer from "./components/global/Footer";
import { Inter as FontSans } from "next/font/google";
import {
	GoogleAnalytics,
	GoogleTagManager,
} from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import NavBar from "@/components/navigation-menu";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<link
				rel="icon"
				href="/favicon.svg"
				type="image/svg"
			/>
			<GoogleTagManager gtmId="GTM-NCJRDXKB" />
			<body
				className={`${cn(
					"min-h-screen lg:max-w-7xl mx-auto max-w-5x md:px-16 px-6 bg-background font-sans antialiased",
					fontSans.variable
				)} min-h-screen relative pb-40 dark`}
			>
				<NavBar />
				{/* <NavBar /> */}
				{children}
				<Footer />
			</body>
			<GoogleAnalytics gaId="G-82N8RY63ZQ" />
		</html>
	);
}
