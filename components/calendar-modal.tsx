"use client";

import React, { useState } from "react";
import ShimmerButton from "@/components/shimmer-button";
import {
	Dialog,
	DialogContent,
	DialogClose,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";
import BlurFade from "./magicui/blur-fade";

/**
 * Props for the CalendarModal component
 * @interface CalendarModalProps
 */
interface CalendarModalProps {
  /** The label text for the button that opens the modal */
  label: string;
  className?: string;
}

/**
 * CalendarModal component for displaying a Google Calendar appointment scheduling interface
 * @param {CalendarModalProps} props - The props for the CalendarModal component
 * @returns {JSX.Element} The rendered CalendarModal component
 */
const CalendarModal: React.FC<CalendarModalProps> = ({ label, className }) => {
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
		<>
				<BlurFade delay={0.75} inView>
					<ShimmerButton
						onClick={toggleModal}
						shimmerColor="hsl(var(--primary))"
						className={`hover:scale-105 z-10 transform transition duration-500 bg-primary text-foreground ${className}`}
					>
						{label}
					</ShimmerButton>
				</BlurFade>

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
		</>
	);
};

export default CalendarModal;
