"use client";

import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import Link from "next/link";

import { ChevronRightIcon, Menu, XIcon } from "lucide-react";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import logoJulia from "../../../public/logos/logo-julia-white.svg";
import SocialIcons from "../SocialIcons/SocialIcons";

export default function Header() {
	const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

	const HamburgerMenu = () => {
		return (
			<div className="fixed top-0 left-0 z-50 flex flex-col h-screen w-screen bg-blue-300 p-4">
				<Button
					variant="ghost"
					size="icon"
					className="self-end"
					onClick={() => setIsHamburgerMenuOpen(false)}
				>
					<XIcon className="size-6" />
				</Button>
				<div className="flex flex-col gap-8 py-4">
					<Link
						href="/"
						className="flex w-full items-center text-lg font-semibold"
						prefetch={false}
						onClick={() => setIsHamburgerMenuOpen(false)}
					>
						Home
					</Link>
					<Collapsible className="grid gap-4">
						<CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
							Coding Projects
							<ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
						</CollapsibleTrigger>
						<CollapsibleContent>
							<div className="-mx-6 grid gap-6 p-6 dark:bg-gray-800">
								<Link
									href="/projects/kong"
									className="group grid h-auto w-full justify-start gap-1"
									prefetch={false}
									onClick={() => setIsHamburgerMenuOpen(false)}
								>
									<div className="text-sm font-medium leading-none group-hover:underline">
										Kong (Keep our nature green)
									</div>
									<div className="line-clamp-2 text-sm leading-snug">
										Gamified plant identification app powered by OpenAI and
										StabilityAI
									</div>
								</Link>
								<Link
									href="/projects/kong"
									className="group grid h-auto w-full justify-start gap-1"
									prefetch={false}
									onClick={() => setIsHamburgerMenuOpen(false)}
								>
									<div className="text-sm font-medium leading-none group-hover:underline">
										BooksOpen
									</div>
									<div className="line-clamp-2 text-sm leading-snug">
										Digital wingman for tattoo and piercing studios, turning
										appointment scheduling from a headache into a breeze.
									</div>
								</Link>
								<Link
									href="/projects/bubblefish"
									className="group grid h-auto w-full justify-start gap-1"
									prefetch={false}
									onClick={() => setIsHamburgerMenuOpen(false)}
								>
									<div className="text-sm font-medium leading-none group-hover:underline">
										Bubblefish UX Design
									</div>
									<div className="line-clamp-2 text-sm leading-snug">
										Revamped website for UX Design agency showcasing their
										commitment to creating accessible, modern, and visually
										engaging user experiences.
									</div>
								</Link>
							</div>
						</CollapsibleContent>
					</Collapsible>
					{/* <Link
						href="/graphic-design"
						className="flex w-full items-center text-lg font-semibold"
						prefetch={false}
						onClick={() => setIsHamburgerMenuOpen(false)}
					>
						Graphic Projects
					</Link> */}

					<Link
						href="/about-me"
						className="flex w-full items-center text-lg font-semibold"
						prefetch={false}
						onClick={() => setIsHamburgerMenuOpen(false)}
					>
						About Me
					</Link>

					<SocialIcons buttonClassName="hover:bg-white hover:text-black" />
				</div>
			</div>
		);
	};

	return (
		<header className="p-4 bg-[#0e1217] fixed z-50 w-full">
			<nav className="flex flex-row justify-between items-center">
				<Link href="/" className="flex flex-row gap-2 items-center">
					<Image src={logoJulia} alt="Julia Logo" className="max-w-6" />
					<p className="!font-bold transition text-left leading-5 text-white">
						Julia Kim
					</p>
				</Link>
				<div className="flex flex-row gap-4 lg:flex-row-reverse lg:gap-10">
					<Button
						variant="ghost"
						size="icon"
						className="self-end"
						onClick={() => setIsHamburgerMenuOpen(true)}
					>
						<Menu className="size-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>

					{isHamburgerMenuOpen && <HamburgerMenu />}
				</div>
			</nav>
		</header>
	);
}
