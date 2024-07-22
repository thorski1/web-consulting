import Link from "next/link";
import { FaHome } from "react-icons/fa"

export default function NavigationMenu() {
	return (
		<header className="flex items-center justify-between bg-zinc-900 text-white py-3">
			<nav className="flex items-center gap-4 sm:gap-6">
				<Link
					href="/"
					className="flex items-center gap-2"
					prefetch={false}
				>
					<div className="h-5 w-5">
						<FaHome className="h-5 w-5" />
					</div>
				</Link>
				<Link
					href="/about"
					className="font-medium hover:underline"
					prefetch={false}
				>
					About
				</Link>
				<Link
					href="/projects"
					className="font-medium hover:underline"
					prefetch={false}
				>
					Projects
				</Link>
			</nav>
			<Link
				href="/schedule-consultation"
				prefetch={false}
				className="hidden sm:inline-flex bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-primary hover:text-white transition-colors"
			>
				Schedule a Consultation
			</Link>
		</header>
	);
}
