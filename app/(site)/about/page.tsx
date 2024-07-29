import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";
import { Metadata, ResolvingMetadata } from "next";

// export async function generateMetadata(
// 	// @ts-ignore
// 	{ params, searchParams },
// 	parent: ResolvingMetadata
// ): Promise<Metadata> {
// 	return {
// 		metadataBase: new URL(
// 			"https://new-portfolio-three-gamma.vercel.app"
// 		),
// 		title: "Free 10-Minute Web Development Consultation",
// 		description:
// 			"Schedule your free 10-minute consultation with our expert web developers. Discover how we can enhance your online presence and achieve your goals.",
// 		openGraph: {
// 			title: "Free 10-Minute Web Development Consultation",
// 			description:
// 				"Schedule your free 10-minute consultation with our expert web developers. Discover how we can enhance your online presence and achieve your goals.",
// 			url: `https://new-portfolio-three-gamma.vercel.app/about`,
// 			siteName: "ST Web Consulting",
// 			images: [
// 				{
// 					url: `https://new-portfolio-three-gamma.vercel.app/DKcTWlyZOE.png`, // Must be an absolute URL
// 					width: 800,
// 					height: 600,
// 				},
// 				{
// 					url: `https://new-portfolio-three-gamma.vercel.app/DKcTWlyZOE.png`, // Must be an absolute URL
// 					width: 1800,
// 					height: 1600,
// 					alt: "My custom alt",
// 				},
// 			],
// 			locale: "en-US",
// 			type: "website",
// 		},
// 		twitter: {
// 			card: "summary",
// 			title: "Free 10-Minute Web Development Consultation",
// 			description:
// 				"Schedule your free 10-minute consultation with our expert web developers. Discover how we can enhance your online presence and achieve your goals.",
// 			// siteId: "1012501",
// 			creator: "@SamThoyre",
// 			creatorId: "1012501",
// 			images: [
// 				"https://new-portfolio-three-gamma.vercel.app/DKcTWlyZOE.png",
// 			],
// 		},
// 		robots: {
// 			index: true,
// 			follow: true,
// 			nocache: false,
// 			googleBot: {
// 				index: true,
// 				follow: true,
// 				noimageindex: false,
// 			},
// 		},
// 	};
// }

export default async function About() {
    const profile: ProfileType[] = await getProfile();
    
	return (
		<main className="">
			{/* {profile &&
				profile.map((data) => (
					<div key={data._id}>
						<section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
							<div className="order-2 lg:order-none">
								<h1 className="lg:text-3xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8">
									My name is {data.fullName}. I live in{" "}
									{data.location}, where I build things.
								</h1>

								<div className="flex flex-col gap-y-3 text-zinc-400 leading-relaxed">
									<PortableText value={data.fullBio} />
								</div>
							</div>

							<div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
								<div>
									<Image
										className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
										src={data.profileImage.image}
										width={400}
										height={400}
										quality={100}
										alt={data.profileImage.alt}
									/>

									<a
										href={`${data.resumeURL}?dl=${data.fullName}_resume`}
										className="flex items-center justify-center gap-x-2 bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md duration-200 py-2 text-center cursor-cell font-medium"
									>
										<BiFile className="text-base" />{" "}
										Download Resumé
									</a>
								</div>

								<ul>
									<li>
										<a
											href={`mailto:${data.email}`}
											className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
										>
											<BiEnvelope className="text-lg" />
											{data.email}
										</a>
									</li>
								</ul>
							</div>
						</section>

						<section className="mt-24 max-w-2xl">
							<h2 className="font-semibold text-4xl mb-4">
								Expertise
							</h2>
							<p className="text-zinc-400 max-w-lg">
								I&apos;ve spent a few years working on my
								skills. In no particular order, here are a
								few of them.
							</p>

							<ul className="flex flex-wrap items-center gap-3 mt-8">
								{data.skills.map((skill, id) => (
									<li
										key={id}
										className="bg-[#1d1d20] border border-transparent hover:border-zinc-700 rounded-md px-2 py-1"
									>
										{skill}
									</li>
								))}
							</ul>
						</section>
					</div>
				))} */}
		</main>
	);
}
