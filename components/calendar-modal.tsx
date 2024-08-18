"use client";
import React, { useState } from "react";
import ShimmerButton from "@/components/shimmer-button";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogClose,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { sendGTMEvent } from "@next/third-parties/google";

const CalendarModal = ({ label }: { label: string }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(!isOpen);
		sendGTMEvent({
			event: "buttonClicked",
			value: "schedule-consultation",
		});
	};

	return (
		<>
			<ShimmerButton
				onClick={toggleModal}
				shimmerColor="blue"
			>
				{label}
			</ShimmerButton>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50">
					<div className="relative w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
						<DialogClose asChild>
							<button
								onClick={toggleModal}
								className="absolute top-3 right-3 rounded-full p-2 hover:bg-gray-200 text-black"
							>
								<X size={24} />
							</button>
						</DialogClose>

						<iframe
							src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3B2PT1I0FE_LOWzm0vkL4eTD8lf5Iqzi1yqusscZ702HOfHoWSa_1NGN5MSHEL_VaW4rODGeAt?gv=true"
							style={{ border: 0 }}
							width="100%"
							height="600"
						></iframe>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default CalendarModal;
