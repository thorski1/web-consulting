import Link from "next/link";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
} from "@/components/ui/sheet";
import {
	Collapsible,
	CollapsibleTrigger,
	CollapsibleContent,
} from "@/components/ui/collapsible";
import Image from "next/image";

export function NavBar() {
	return (
		<header className="flex flex-col sm:flex-row h-auto md:h-16 items-center justify-between px-4 md:px-6">
			<div className="flex items-center justify-between w-full md:w-auto">
				<Link
					href="/"
					className="flex items-center gap-2"
					prefetch={false}
				>
					<Image
						src={"/icons/logo.svg"}
						alt="logo"
						className="h-6 w-6"
						width={6}
						height={6}
					/>
					<span className="text-lg font-bold text-muted-foreground">
						ReCode Pros
					</span>
				</Link>
				<Sheet>
					<SheetTrigger asChild>
						<button className="sm:hidden">
							<MenuIcon className="h-6 w-6" />
						</button>
					</SheetTrigger>
					<SheetContent side="left">
						<nav className="grid gap-4 py-6">
							<Link
								href="/about"
								className="hover:underline hover:underline-offset-4"
								prefetch={false}
							>
								About
							</Link>
							<Collapsible className="grid gap-4">
								<CollapsibleTrigger className="flex items-center gap-1 hover:underline hover:underline-offset-4">
									Services
									<ChevronDownIcon className="h-4 w-4" />
								</CollapsibleTrigger>
								<CollapsibleContent>
									<div className="-mx-6 grid gap-4 bg-muted p-6">
										<Link
											href="/services/web-development"
											className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
											prefetch={false}
										>
											<CodeIcon className="h-4 w-4" />
											<span>Development</span>
										</Link>
										<Link
											href="/services/seo"
											className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
											prefetch={false}
										>
											<Image
												src={"/icons/seo-vector-icon.svg"}
												alt="seo"
												className="h-4 w-4"
												width={4}
												height={4}
											/>
											<span>SEO</span>
										</Link>
										<Link
											href="/services/digital-marketing"
											className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
											prefetch={false}
										>
											<BriefcaseIcon className="h-4 w-4" />
											<span>Digital Marketing</span>
										</Link>
										<Link
											href="/services/design"
											className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
											prefetch={false}
										>
											<PaletteIcon className="h-4 w-4" />
											<span>UI/UX Design</span>
										</Link>
										<Link
											href="/services/strategy"
											className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
											prefetch={false}
										>
											<RocketIcon className="h-4 w-4" />
											<span>Digital Strategy</span>
										</Link>
									</div>
								</CollapsibleContent>
							</Collapsible>
							{/* <Link
								href="#"
								className="hover:underline hover:underline-offset-4"
								prefetch={false}
							>
								Projects
							</Link> */}

							<Link
								href="/blog"
								className="hover:underline hover:underline-offset-4"
								prefetch={false}
							>
								Blog
							</Link>
							<Link
								href="/pricing"
								className="hover:underline hover:underline-offset-4"
								prefetch={false}
							>
								Pricing
							</Link>
							<Link
								href="/contact"
								className="hover:underline hover:underline-offset-4"
								prefetch={false}
							>
								Contact
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
			<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
				<Link
					href="/about"
					className="hover:underline hover:underline-offset-4"
					prefetch={false}
				>
					About
				</Link>
				<div className="relative group">
					<button className="hover:underline hover:underline-offset-4 flex items-center gap-1">
						Services
						<ChevronDownIcon className="h-4 w-4" />
					</button>
					<div className="absolute z-10 hidden group-hover:block w-48 bg-background rounded-md shadow-lg">
						<Link
							href="/services/web-development"
							className="flex items-center gap-2 px-4 py-2 hover:bg-muted"
							prefetch={false}
						>
							<CodeIcon className="h-4 w-4" />
							<span>Development</span>
						</Link>
						<Link
							href="/services/seo"
							className="flex items-center gap-2 px-4 py-2 hover:bg-muted"
							prefetch={false}
						>
							<Image
								src={"/icons/seo-vector-icon.svg"}
								alt="seo"
								className="h-4 w-4"
								width={4}
								height={4}
							/>
							<span>SEO</span>
						</Link>
						<Link
							href="/services/digital-marketing"
							className="flex items-center gap-2 px-4 py-2 hover:bg-muted"
							prefetch={false}
						>
							<BriefcaseIcon className="h-4 w-4" />
							<span>Digital Marketing</span>
						</Link>
						<Link
							href="/services/design"
							className="flex items-center gap-2 px-4 py-2 hover:bg-muted"
							prefetch={false}
						>
							<PaletteIcon className="h-4 w-4" />
							<span>UI/UX Design</span>
						</Link>
						<Link
							href="/services/strategy"
							className="flex items-center gap-2 px-4 py-2 hover:bg-muted"
							prefetch={false}
						>
							<RocketIcon className="h-4 w-4" />
							<span>Digital Strategy</span>
						</Link>
					</div>
				</div>
				{/* <Link
					href="#"
					className="hover:underline hover:underline-offset-4"
					prefetch={false}
				>
					Projects
				</Link>*/}

				<Link
					href="/blog"
					className="hover:underline hover:underline-offset-4"
					prefetch={false}
				>
					Blog
				</Link>
				<Link
					href="/pricing"
					className="hover:underline hover:underline-offset-4"
					prefetch={false}
				>
					Pricing
				</Link>
				<Link
					href="/contact"
					className="hover:underline hover:underline-offset-4"
					prefetch={false}
				>
					Contact
				</Link>
			</nav>
			<Link
				href="/schedule-consultation"
				className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium bg-popover text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:ml-4 mt-4 md:mt-0"
				prefetch={false}
			>
				Schedule Consultation
			</Link>
		</header>
	);
}

function BriefcaseIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
			<rect width="20" height="14" x="2" y="6" rx="2" />
		</svg>
	);
}

function ChevronDownIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m6 9 6 6 6-6" />
		</svg>
	);
}

function CodeIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="16 18 22 12 16 6" />
			<polyline points="8 6 2 12 8 18" />
		</svg>
	);
}

function MenuIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function MountainIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}

function PaletteIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle
				cx="13.5"
				cy="6.5"
				r=".5"
				fill="currentColor"
			/>
			<circle
				cx="17.5"
				cy="10.5"
				r=".5"
				fill="currentColor"
			/>
			<circle
				cx="8.5"
				cy="7.5"
				r=".5"
				fill="currentColor"
			/>
			<circle
				cx="6.5"
				cy="12.5"
				r=".5"
				fill="currentColor"
			/>
			<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
		</svg>
	);
}

function RocketIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
			<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
			<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
			<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
		</svg>
	);
}

function TypeIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="4 7 4 4 20 4 20 7" />
			<line x1="9" x2="15" y1="20" y2="20" />
			<line x1="12" x2="12" y1="4" y2="20" />
		</svg>
	);
}

function SEOIcon(props: any) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			// xmlns:xlink="http://www.w3.org/1999/xlink"
			width="4"
			height="4"
		>
			<path
				fill="white"
				transform="scale(1.6 1.6)"
				d="M444.172 519.577C415.443 488.159 396.04 459.282 372.306 424.781C368.703 419.543 355.679 396.51 347.98 398.66C343.375 399.945 335.615 405.853 330.827 408.343C271.818 439.029 195.517 422.747 147.271 379.412C107.679 343.849 87.2586 287.466 94.369 234.726C105.511 152.086 173.259 91.8641 255.533 87.5672C319.579 87.161 374.426 115.629 405.256 173.979C429.305 219.496 430.33 283.13 407.253 329.48C404.897 334.213 401.92 338.652 400.346 343.731C403.687 359.651 435.936 381.994 448.943 391.684C477.469 412.936 499.325 434.384 523.802 459.372C558.664 494.963 579.128 514.797 538.633 554.43C504.425 587.911 467.887 544.3 444.172 519.577ZM251.167 100.936C210.691 104.49 172.758 121.328 146.217 153.018C89.4839 220.76 93.9068 317.031 162.73 374.34C204.975 409.517 270.008 422.272 320.534 397.445C335.262 390.209 346.33 376.532 362.04 389.65C370.699 396.881 376.913 406.631 383.279 415.82C404.561 446.538 424.343 475.792 449.272 504.078C460.999 516.958 486.894 542.966 501.749 550.383C520.917 559.952 546.565 531.484 546.953 516.473C547.52 494.506 473.297 429.692 454.115 413.699C438.172 400.406 386.409 367.481 386.949 344.084C387.141 335.77 393.258 327.525 396.551 320.059C421.936 262.499 413.355 194.389 370.003 147.431C337.084 111.772 297.624 100.758 251.167 100.936Z"
			/>
			<path
				fill="white"
				transform="scale(1.6 1.6)"
				d="M142.708 233.078C130.875 306.971 184.002 376.613 261.069 376.582C382.754 376.534 418.817 217.715 326.025 155.041C282.149 125.406 226.754 128.35 185.663 160.987C182.889 163.19 179.256 167.678 175.593 168.233C172.728 168.667 169.173 165.566 168.908 162.768C168.276 156.093 178.898 150.024 183.37 146.793C204.833 131.283 229.107 122.664 255.533 121.008C362.948 119.334 420.751 228.633 376.699 320.753C347.638 381.527 266.093 407.096 206.18 378.324C137.885 345.526 107.94 266.305 141.232 197.398C143.439 192.829 159.59 161.176 164.662 179.787C162.789 185.08 158.919 189.751 156.278 194.717C149.779 206.94 145.528 219.556 142.708 233.078Z"
			/>
			<path
				fill="white"
				transform="scale(1.6 1.6)"
				d="M275.249 318.364C258.846 312.572 258.949 325.054 251.862 332.921C243.499 342.203 227.394 339.102 219.026 331.512C206.248 319.92 222.524 310.227 208.064 298.969C200.056 292.733 190.597 300.783 182.855 294.696C171.568 285.822 168.646 264.45 181.257 256.375C188.137 251.969 192.595 251.165 193.891 242.029C196.077 226.623 174.024 219.102 184.707 206.358C192.023 197.631 203.362 214.503 216.819 204.06C228.254 195.185 216.329 176.66 239.894 173.863C256.697 172.637 252.85 187.553 262.339 190.434C282.066 196.423 280.365 183.185 289.481 178.583C298.475 174.043 312.679 182.228 316.609 190.402C324.299 206.394 298.862 216.32 330.246 226.462C343.99 230.903 348.755 246.209 344.257 259.186C338.19 276.689 326.229 254.043 313.956 290.501L315.392 292.617C318.142 296.703 322.163 301.948 321.004 307.185C318.428 318.828 295.95 333.354 284.864 324.954C281.657 322.524 279.818 319.466 275.687 318.466L275.249 318.364ZM237.487 189.072C236.424 192.307 237.774 195.594 237.649 198.882C237.123 212.67 217.596 221.591 205.753 224.188C214.231 238.404 211.877 259.05 196.852 268.12C194.452 269.568 191.659 270.345 189.158 271.599C185.291 290.545 204.176 270.221 221.002 289.455C232.444 302.533 229.349 303.757 230.058 318.364C233.166 320.851 236.037 321.682 239.894 322.378C246.424 301.854 267.947 296.007 286.675 304.437C289.96 306.02 292.748 308.068 295.647 310.261C299.024 309.566 301.687 307.774 304.415 305.762C290.125 291.483 296.139 289.576 302.702 276.329C310.608 260.373 309.32 254.49 330.805 252.789C330.61 249.416 330.448 245.947 329.514 242.681C317.522 238.444 305.66 235.182 299.692 222.693C292.385 207.4 308.747 197.038 296.744 193.062C292.512 199.129 284.169 207.254 276.888 208.337C268.082 209.646 253.743 206.274 247.78 198.525C244.444 194.191 243.733 188.788 237.487 189.072Z"
			/>
			<path
				fill="white"
				transform="scale(1.6 1.6)"
				d="M511.072 533.046C483.752 527.612 477.741 494.292 503.855 491.992C533.406 492.184 531.949 535.427 511.072 533.046ZM502.866 506.501C496.722 511.407 506.977 516.656 511.072 518.454C516.538 517.682 509.321 506.247 502.866 506.501Z"
			/>
		</svg>
	);
}
