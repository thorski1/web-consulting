"use client"
import React from 'react'
import { motion } from "framer-motion";
import BlurFade from './magicui/blur-fade';
import CalendarModal from './calendar-modal';

const HeroNoImage = ({header, subheader, hasCta = false}: {header: string, subheader?: string, hasCta?: boolean}) => {
  return (
		<section
			className="w-full py-6 lg:py-12"
		>
			<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
				<div className="space-y-3">
					<BlurFade delay={0.25} inView>
						<h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							{header}
						</h1>
					</BlurFade>
					{subheader && (
						<BlurFade delay={0.5} inView>
							<p className="mt-4 text-muted-foreground md:text-xl">
								{subheader}
							</p>
						</BlurFade>
					)}
				  {hasCta && (
					  <div className='mx-auto flex justify-center'>
						<CalendarModal
							label={"Schedule a consultation"}
						/></div>
					)}
				</div>
			</div>
		</section>
	);
}

export default HeroNoImage