import Link from "next/link";

export default function Footer() {
	return (
		<footer className="absolute bottom-0 left-0 right-0 py-6 text-sm">
			<div className="container mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
				<nav className="flex items-center gap-4">
					<Link
						href="/"
						className="text-muted-foreground hover:underline"
						prefetch={false}
					>
						Home
					</Link>
					<Link
						href="/about"
						className="text-muted-foreground hover:underline"
						prefetch={false}
					>
						About
					</Link>
					<Link
						href="/projects"
						className="text-muted-foreground hover:underline"
						prefetch={false}
					>
						Projects
					</Link>
				</nav>
				<p className="text-muted-foreground">
					&copy; 2024 Sam Thoyre All rights reserved.
				</p>
			</div>
		</footer>
	);
}
