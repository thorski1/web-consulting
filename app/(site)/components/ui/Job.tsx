import Image from "next/image";
import { getJob } from "@/sanity/sanity.query";
import type { JobType } from "@/types";
import React from "react";
import { PortableText } from "@portabletext/react";

export default async function Job() {
	const job: JobType[] = await getJob();
	return (
		<section>
			<div className="mb-16">
				<h2 className="font-semibold text-4xl mb-4 uppercase">
					Work Experience
				</h2>
			</div>

			<div className="flex flex-col gap-y-12">
				{job.map((data) => (
					<div
						key={data._id}
						className="flex items-start lg:gap-x-6 gap-x-4 max-w-screen-xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
					>
						<a
							href={data.url}
							rel="noreferrer noopener"
							className="rounded-md overflow-clip relative"
						>
							<Image
								src={data.logo}
								alt={data.name}
								width={600}
								height={300}
								className="w-[120px]
                        rounded-xl max-w-[unset]"
							/>
						</a>
						<div className="flex flex-col items-start">
							<h3 className="text-xl font-bold">
								{data.name}
							</h3>
							<p>{data.jobTitle}</p>
							<small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
								{data.startDate.toString()} -{" "}
								{data.endDate
									? data.endDate.toString()
									: "present"}
							</small>
							<div className="text-base text-zinc-400 my-4">
								<PortableText
									components={{
										list: {
											bullet: ({ children }) => (
												<ul className="list-disc list-inside">
													{children}
												</ul>
											),
										},
									}}
									value={data.description}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
