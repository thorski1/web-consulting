"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import BlurFade from "./magicui/blur-fade";
import CalendarModal from "./calendar-modal";
import { ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button"; // Assuming you have a Button component
import { sendGTMEvent } from "@next/third-parties/google";
import { Dialog, DialogClose, DialogContent } from "@radix-ui/react-dialog";

interface HeroNoImageProps {
	header: string;
	subheader?: string;
	hasCta?: boolean;
	imageSrc?: string;
	imageAlt?: string;
}

const HeroNoImage: React.FC<HeroNoImageProps> = ({
	header,
	subheader,
	hasCta = false,
	imageSrc,
	imageAlt,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	/**
	 * Toggles the modal open/closed state and sends a GTM event
	 */
	const toggleModal = () => {
		setIsOpen(!isOpen);
		sendGTMEvent({
			event: "buttonClicked",
			value: "schedule-consultation",
		});
	};

	return (
		<div className="relative">
			<div className="absolute -top-24 z-[0] h-screen w-screen bg-background/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
			<section className="relative max-w-full mx-auto z-1">
				<div className="max-w-screen-xl z-10 mx-auto px-4 py-10 gap-12 text-foreground md:px-8">
					<div className="space-y-5 max-w-6xl leading-0 lg:leading-5 mx-auto text-center">
						<BlurFade delay={0.25} inView>
							<h1 className="text-sm text-foreground group mx-auto px-5 py-2 bg-gradient-to-tr from-primary/10 via-secondary/10 to-transparent border-[2px] border-primary/10 rounded-3xl w-fit">
								{header}
								<ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
							</h1>
						</BlurFade>

						{subheader && (
							<BlurFade delay={0.5} inView>
								<h2 className="text-4xl tracking-tighter bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent mx-auto md:text-6xl pb-4 font-semibold">
									{subheader}
								</h2>
							</BlurFade>
						)}

						{hasCta && (
							<BlurFade delay={0.75} inView>
								<div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
									<Button
										onClick={toggleModal}
										className="inline-flex rounded-full text-center items-center justify-center bg-gradient-to-tr from-accent/80 via-secondary/20 to-transparent text-foreground border-input border hover:bg-secondary transition-colors py-4 px-10"
									>
										Schedule a consultation
									</Button>
								</div>
							</BlurFade>
						)}
					</div>
					{imageSrc && (
						<div className="mt-32 mx-10">
							<Image
								src={imageSrc}
								width={1200}
								height={675}
								className="w-full shadow-lg rounded-lg border"
								alt={imageAlt || "Hero image"}
							/>
						</div>
					)}
				</div>
			</section>
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
					<div className="relative w-full max-w-4xl p-6 bg-foreground rounded-lg shadow-lg">
						<DialogClose asChild>
							<button
								onClick={toggleModal}
								className="absolute top-3 right-3 rounded-full p-2 hover:bg-primary/10 text-primary bg-background"
							>
								<X size={24} />
							</button>
						</DialogClose>

						<iframe
							src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3B2PT1I0FE_LOWzm0vkL4eTD8lf5Iqzi1yqusscZ702HOfHoWSa_1NGN5MSHEL_VaW4rODGeAt?gv=true"
							style={{ border: 0, zIndex: 50 }}
							width="100%"
							height="600"
							title="Schedule Appointment"
						></iframe>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default HeroNoImage;
