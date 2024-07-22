import "../globals.css";
import type { Metadata } from "next";
import Footer from "./components/global/Footer";
import { Inter as FontSans } from "next/font/google";
import {
	GoogleAnalytics,
	GoogleTagManager,
} from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import NavigationMenu from "./components/global/NavigationMenu";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Sam Thoyre | Portfolio",
	description:
		"Sam Thoyre's personal portfolio, used to showcase skills and experience",
	openGraph: {
		images: "add-your-open-graph-image-url-here",
	},
	verification: {
		google: "eUsFECnHpZa87YhtqETKfyaOWvRIq6IEPukpEdliniw",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<GoogleTagManager gtmId="GTM-KPSRQ7LS" />
			<body
				className={`${cn(
					"min-h-screen lg:max-w-7xl mx-auto max-w-5x md:px-16 px-6 bg-background font-sans antialiased",
					fontSans.variable
				)} bg-zinc-900 text-white min-h-screen relative pb-16`}
			>
				<NavigationMenu />
				{children}
				<Footer />
			</body>
			<GoogleAnalytics gaId="G-SM40308D33" />
		</html>
	);
}
