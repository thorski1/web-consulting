import Link from "next/link"

const PricingPage = () => {
   return (
			<div className="w-full">
				<section className="py-6 lg:py-12">
					<div className="mx-auto px-4 md:px-6">
						<div className="mx-auto max-w-3xl text-center">
							<h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
								AI-Powered Solutions for Your Business
							</h1>
							<p className="mt-4 text-muted-foreground md:text-xl">
								Unlock the power of AI to transform your
								online presence and drive business growth.
							</p>
						</div>
					</div>
				</section>
				<section className="py-6 lg:py-12">
					<div className="container mx-auto px-4 md:px-6">
						<div className="grid grid-cols-1 gap-10 md:grid-cols-3">
							<div className="rounded-lg border bg-background shadow-sm flex flex-col justify-between">
								<div>
									<h2 className="text-2xl font-bold">
										Small Business Starter Pack
									</h2>
									<p className="mt-2 text-muted-foreground">
										Ideal for new or small businesses
									</p>
								</div>
								<ul className="mt-6 space-y-4 text-muted-foreground">
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Basic Website Development
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Basic SEO
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Social Media Setup & Consultation
									</li>
								</ul>
								<div className="mt-8 flex justify-between flex-col gap-4">
									<p className="text-xl text-center font-bold">
										Starting at $4,500
									</p>
									<Link
										href="/schedule-consultation"
										className="inline-flex h-10 items-center justify-center rounded-md bg-popover px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
										prefetch={false}
									>
										Get started
									</Link>
								</div>
							</div>
							<div className="rounded-lg border bg-background shadow-sm flex flex-col justify-between">
								<div>
									<h2 className="text-2xl font-bold">
										AI-Powered Web Development
									</h2>
									<p className="mt-2 text-muted-foreground">
										Tailored websites and web apps with
										AI-powered personalization and
										optimization
									</p>
								</div>
								<ul className="mt-6 space-y-4 text-muted-foreground">
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Custom website design
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Responsive design
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Basic SEO optimization
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										CMS integration
									</li>
								</ul>
								<div className="mt-8 flex justify-between flex-col gap-4">
									<p className="text-xl text-center font-bold">
										Starting at $10,000
									</p>
									<Link
										href="/schedule-consultation"
										className="inline-flex h-10 items-center justify-center rounded-md bg-popover px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
										prefetch={false}
									>
										Get a quote
									</Link>
								</div>
							</div>
							<div className="rounded-lg border bg-background shadow-sm flex flex-col justify-between">
								<div>
									<h2 className="text-2xl font-bold">
										Enterprise AI Suite
									</h2>
									<p className="mt-2 text-muted-foreground">
										Comprehensive AI-driven solutions for
										large businesses
									</p>
								</div>
								<ul className="mt-6 space-y-4 text-muted-foreground">
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Advanced website/web app development
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										AI-powered marketing automation
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Predictive analytics
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-primary" />
										Dedicated support
									</li>
								</ul>
								<div className="mt-8 flex justify-between flex-col gap-4">
									<p className="text-xl text-center font-bold">
										Custom (contact us)
									</p>
									<Link
										href="/schedule-consultation"
										className="inline-flex h-10 items-center justify-center rounded-md bg-popover px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
										prefetch={false}
									>
										Contact sales
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="hsl(120, 60%, 40% )"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export default PricingPage