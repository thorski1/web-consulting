import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/global/Footer";

import { Inter as FontSans } from "next/font/google";
import {
	GoogleAnalytics,
	GoogleTagManager,
} from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import { NavigationMenuDemo } from "./components/global/NavigationMenu";
import Script from "next/script";

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
					"min-h-screen lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6 bg-background font-sans antialiased",
					fontSans.variable
				)} bg-zinc-900 text-white min-h-screen`}
			>
				<NavigationMenuDemo />
				{children}
				<Footer />
			</body>
			<GoogleAnalytics gaId="G-SM40308D33" />
			<Script
				id="segment-script"
				dangerouslySetInnerHTML={{
					__html: `!function(){var i="analytics",analytics=window[i]=window[i]||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","screen","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware","register"];analytics.factory=function(e){return function(){if(window[i].initialized)return window[i][e].apply(window[i],arguments);var n=Array.prototype.slice.call(arguments);if(["track","screen","alias","group","page","identify"].indexOf(e)>-1){var c=document.querySelector("link[rel='canonical']");n.push({__t:"bpc",c:c&&c.getAttribute("href")||void 0,p:location.pathname,u:location.href,s:location.search,t:document.title,r:document.referrer})}n.unshift(e);analytics.push(n);return analytics}};for(var n=0;n<analytics.methods.length;n++){var key=analytics.methods[n];analytics[key]=analytics.factory(key)}analytics.load=function(key,n){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.setAttribute("data-global-segment-analytics-key",i);t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r);analytics._loadOptions=n};analytics._writeKey="pwucpDrQOgD17DFGw8HzFtnDVMAhlIJb";;analytics.SNIPPET_VERSION="5.2.0";
  analytics.load("pwucpDrQOgD17DFGw8HzFtnDVMAhlIJb");
  analytics.page();
  }}();`,
				}}
			/>
		</html>
	);
}
