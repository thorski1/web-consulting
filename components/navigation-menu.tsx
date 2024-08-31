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

/**
 * Interface for a menu item
 * @interface MenuItem
 */
interface MenuItem {
  /** The name of the menu item */
  name: string;
  /** The URL of the menu item */
  href?: string;
  /** Optional sub-items for dropdown menus */
  items?: { name: string; href: string }[];
}

/**
 * NavBar component for the main navigation menu
 * @returns {JSX.Element} The rendered NavBar component
 */
export default function NavBar(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems: MenuItem[] = [
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
		<nav className="text-foreground">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link href="/" className="flex items-center">
						<Image
							src={"/icons/logo.svg"}
							alt="logo"
							className="h-6 w-6"
							width={24}
							height={24}
						/>
						<span className="ml-2 text-xl font-bold sm:text-lg lg:text-xl">
							ReCode Pros
						</span>
					</Link>
					<DesktopMenu menuItems={menuItems} />
					<div className="hidden md:block z-10">
						<CalendarModal
							label={"Schedule consultation"}
						/>
					</div>
					<MobileMenu menuItems={menuItems} isOpen={isOpen} setIsOpen={setIsOpen} closeMenu={closeMenu} />
				</div>
			</div>
		</nav>
	);
}

/**
 * Props for the DesktopMenu component
 * @interface DesktopMenuProps
 */
interface DesktopMenuProps {
  /** Array of menu items to display */
  menuItems: MenuItem[];
}

/**
 * DesktopMenu component for displaying the navigation menu on larger screens
 * @param {DesktopMenuProps} props - The props for the DesktopMenu component
 * @returns {JSX.Element} The rendered DesktopMenu component
 */
const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuItems }) => {
	return (
		<div className="hidden md:block z-10">
			<div className="ml-10 flex items-baseline space-x-4">
				{menuItems.map((item) =>
					item.items ? (
						<DropdownMenu key={item.name}>
							<DropdownMenuTrigger className="flex items-center hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm font-medium">
								{item.name}
								<ChevronDownIcon className="ml-1 h-4 w-4" />
							</DropdownMenuTrigger>
							<DropdownMenuContent className="bg-card text-card-foreground">
								{item.items.map((subItem) => (
									<DropdownMenuItem
										key={subItem.name}
									>
										<Link
											href={subItem.href}
											className="w-full"
										>
											{subItem.name}
										</Link>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<Link
							key={item.name}
							href={item.href!}
							className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm font-medium"
						>
							{item.name}
						</Link>
					)
				)}
			</div>
		</div>
	);
};

/**
 * Props for the MobileMenu component
 * @interface MobileMenuProps
 */
interface MobileMenuProps {
  /** Array of menu items to display */
  menuItems: MenuItem[];
  /** Whether the mobile menu is open */
  isOpen: boolean;
  /** Function to set the open state of the mobile menu */
  setIsOpen: (isOpen: boolean) => void;
  /** Function to close the mobile menu */
  closeMenu: () => void;
}

/**
 * MobileMenu component for displaying the navigation menu on smaller screens
 * @param {MobileMenuProps} props - The props for the MobileMenu component
 * @returns {JSX.Element} The rendered MobileMenu component
 */
const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems, isOpen, setIsOpen, closeMenu }) => {
	return (
		<div className="md:hidden z-10">
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon">
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Open menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="right" className="bg-background text-foreground">
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-primary/10">
							<div className="space-y-2 py-6">
								{menuItems.map((item) =>
									item.items ? (
										<DropdownMenu key={item.name}>
											<DropdownMenuTrigger className="hover:bg-accent hover:text-accent-foreground flex w-full items-center justify-between py-2 text-base font-medium text-foreground rounded-lg px-3 -mx-3">
												{item.name}
												<ChevronDownIcon className="h-4 w-4" />
											</DropdownMenuTrigger>
											<DropdownMenuContent>
												{item.items.map((subItem) => (
													<DropdownMenuItem
														key={subItem.name}
														onSelect={closeMenu}
														className="hover:bg-primary/10"
													>
														<Link
															href={subItem.href}
															className="w-full"
														>
															{subItem.name}
														</Link>
													</DropdownMenuItem>
												))}
											</DropdownMenuContent>
										</DropdownMenu>
									) : (
										<Link
											key={item.name}
											href={item.href!}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent hover:text-accent-foreground"
											onClick={closeMenu}
										>
											{item.name}
										</Link>
									)
								)}
							</div>
							<div className="py-6">
								<CalendarModal
									label={"Schedule consultation"}
								/>
							</div>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};
