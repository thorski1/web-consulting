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
											<RocketIcon className="h-4 w-4" />
											<span>SEO</span>
										</Link>
										<Link
											href="/services/digital-marketing"
											className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
											prefetch={false}
										>
											<PaletteIcon className="h-4 w-4" />
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
											href="#"
											className="flex items-center gap-2 hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
											prefetch={false}
										>
											<RocketIcon className="h-4 w-4" />
											<span>Strategy Development</span>
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
							</Link>
							<Link
								href="#"
								className="hover:underline hover:underline-offset-4"
								prefetch={false}
							>
								Testimonials
							</Link> */}
							<Link
								href="/blog"
								className="hover:underline hover:underline-offset-4"
								prefetch={false}
							>
								Blog
							</Link>
							<Link
								href="#"
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
							<RocketIcon className="h-4 w-4" />
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
							href="#"
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
				</Link>
				<Link
					href="#"
					className="hover:underline hover:underline-offset-4"
					prefetch={false}
				>
					Testimonials
				</Link> */}
				<Link
					href="/blog"
					className="hover:underline hover:underline-offset-4"
					prefetch={false}
				>
					Blog
				</Link>
				<Link
					href="#"
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

function XIcon(props: any) {
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
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}
