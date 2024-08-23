"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	MountainIcon,
	MenuIcon,
	ChevronDownIcon,
} from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import CalendarModal from "./calendar-modal";
import Link from "next/link"

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ name: "About", href: "/about" },
		{
			name: "Services",
			items: [
				{ name: "Web Development", href: "/services/web-development" },
				{ name: "SEO", href: "/services/seo" },
				{ name: "Digital Marketing", href: "/services/digital-marketing" },
				{ name: "UI/UX Design", href: "/services/design" },
				{ name: "Digital Strategy", href: "/services/strategy" },
			],
		},
		{ name: "Blog", href: "/blog" },
		{ name: "Pricing", href: "/pricing" },
		{ name: "Contact", href: "/contact" },
	];

	const closeMenu = () => setIsOpen(false);

	return (
		<nav className="bg-background">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link href="/" className="flex items-center">
						<Image
							src={"/icons/logo.svg"}
							alt="logo"
							className="h-6 w-6"
							width={6}
							height={6}
						/>
						<span className="ml-2 text-xl font-bold text-muted-foreground sm:text-lg lg:text-xl">
							ReCode Pros
						</span>
					</Link>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{menuItems.map((item) =>
								item.items ? (
									<DropdownMenu key={item.name}>
										<DropdownMenuTrigger className="flex items-center text-muted-foreground hover:bg-muted-foreground hover:text-background rounded-md px-3 py-2 text-sm font-medium">
											{item.name}
											<ChevronDownIcon className="ml-1 h-4 w-4" />
										</DropdownMenuTrigger>
										<DropdownMenuContent className="bg-muted-foreground text-background">
											{item.items.map((subItem) => (
												<DropdownMenuItem
													key={subItem.name}
												>
													<a
														href={subItem.href}
														className="w-full"
													>
														{subItem.name}
													</a>
												</DropdownMenuItem>
											))}
										</DropdownMenuContent>
									</DropdownMenu>
								) : (
									<a
										key={item.name}
										href={item.href}
										className="text-muted-foreground hover:bg-muted-foreground hover:text-background rounded-md px-3 py-2 text-sm font-medium"
									>
										{item.name}
									</a>
								)
							)}
						</div>
					</div>
					<div className="hidden md:block">
						<CalendarModal
							label={"Schedule consultation"}
						/>
					</div>
					<div className="md:hidden">
						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger asChild>
								<Button variant="outline" size="icon">
									<MenuIcon className="h-6 w-6" />
									<span className="sr-only">Open menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="right">
								<div className="mt-6 flow-root">
									<div className="-my-6 divide-y divide-gray-500/10">
										<div className="space-y-2 py-6">
											{menuItems.map((item) =>
												item.items ? (
													<DropdownMenu key={item.name}>
														<DropdownMenuTrigger className="flex w-full items-center justify-between py-2 text-base font-medium text-muted-foreground">
															{item.name}
															<ChevronDownIcon className="h-4 w-4" />
														</DropdownMenuTrigger>
														<DropdownMenuContent className="bg-muted-foreground text-background">
															{item.items.map((subItem) => (
																<DropdownMenuItem
																	key={subItem.name}
																	onSelect={closeMenu}
																	className="hover:bg-background hover:text-muted-foreground"
																>
																	<a
																		href={subItem.href}
																		className="w-full"
																	>
																		{subItem.name}
																	</a>
																</DropdownMenuItem>
															))}
														</DropdownMenuContent>
													</DropdownMenu>
												) : (
													<a
														key={item.name}
														href={item.href}
														className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground hover:bg-accent"
														onClick={closeMenu}
													>
														{item.name}
													</a>
												)
											)}
										</div>
										<div
											className="py-6"
										>
											<CalendarModal
												label={"Schedule consultation"}
											/>
										</div>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</nav>
	);
}
