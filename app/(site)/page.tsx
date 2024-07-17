import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import Job from "./components/ui/Job";
import { ModelViewer } from "./components/ui/ModelViewer";
import CTASection from "./components/ui/CTASection";

export default async function Home() {
	const profile: ProfileType[] = await getProfile();

	return (
		<main>
			<section className="flex xl:flex-row flex-col xl:items-stretch items-stretch xl:justify-center justify-between gap-x-12 lg:mt-8 mt-5 mb-8">
				{profile &&
					profile.map((data) => (
						<div
							key={data._id}
							className="lg:max-w-2xl max-w-2xl"
						>
							<p className="text-base text-zinc-400 leading-relaxed">
								{data.fullName}
							</p>
							<h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
								{data.headline}
							</h1>
							<p className="text-base text-zinc-400 leading-relaxed">
								{data.shortBio}
							</p>
							<ul className="flex items-center gap-x-6 my-10">
								{Object.entries(data.socialLinks)
									.sort()
									.map(([key, value], id) => (
										<li key={id}>
											<a
												href={value}
												rel="noreferer noopener"
												className="flex items-center gap-x-3 mb-5 hover:text-purple-400 duration-300"
											>
												{key[0].toUpperCase() +
													key.toLowerCase().slice(1)}
											</a>
										</li>
									))}
							</ul>
						</div>
					))}
				<ModelViewer />
				{/* <HeroSvg /> */}
			</section>
			<CTASection />
			<Job />
		</main>
	);
}
