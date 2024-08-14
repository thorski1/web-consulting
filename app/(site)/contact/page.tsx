import ScheduleConsultationSection from "../schedule-consultation/ScheduleConsultationSection";

export default function ContactPage() {
	return (
		<div>
			<section className="w-full py-6 lg:py-12">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
					<div className="space-y-3">
						<h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Let&apos;s Talk: Your AI-Powered
							Transformation Starts Here
						</h1>
						<p className="mt-4 text-muted-foreground md:text-xl">
							Connect with our team to learn how our
							AI-powered solutions can help transform your
							business.
						</p>
					</div>
				</div>
			</section>
			<ScheduleConsultationSection />
		</div>
	);
}
