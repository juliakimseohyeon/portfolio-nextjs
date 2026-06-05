"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logoJulia from "../../../public/logos/logo-julia-white.svg";
import SocialIcons from "../SocialIcons/SocialIcons";

const navProjects = [
	{
		href: "/projects/kong",
		name: "Kong",
		desc: "Gamified plant ID app powered by OpenAI & StabilityAI",
	},
	{
		href: "/projects/booksopen",
		name: "BooksOpen",
		desc: "Scheduling platform for tattoo & piercing studios",
	},
	{
		href: "/projects/bubblefish",
		name: "Bubblefish UX Design",
		desc: "Redesigned website for a Brighton-based UX consultancy",
	},
];

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/about-me", label: "About Me" },
];

const frostedBg: React.CSSProperties = {
	background: "rgba(0,0,0,0.85)",
	backdropFilter: "saturate(180%) blur(20px)",
	WebkitBackdropFilter: "saturate(180%) blur(20px)",
};

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [projectsOpen, setProjectsOpen] = useState(false);

	const close = () => {
		setMenuOpen(false);
		setProjectsOpen(false);
	};

	return (
		<>
			<header
				className="fixed z-50 w-full border-b border-white/[0.08] h-[44px]"
				style={frostedBg}
			>
				<nav className="h-full px-5 flex items-center justify-between max-w-[1200px] mx-auto">
					<Link href="/" className="flex items-center gap-2" onClick={close}>
						<Image src={logoJulia} alt="Julia Logo" className="max-w-5" />
						<span className="text-sm font-semibold tracking-tight text-white/90">
							Julia Kim
						</span>
					</Link>

					<button
						onClick={() => setMenuOpen((v) => !v)}
						className="flex items-center justify-center w-8 h-8 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
						aria-label="Toggle menu"
					>
						<AnimatePresence mode="wait" initial={false}>
							{menuOpen ? (
								<motion.span
									key="close"
									initial={{ opacity: 0, rotate: -45 }}
									animate={{ opacity: 1, rotate: 0 }}
									exit={{ opacity: 0, rotate: 45 }}
									transition={{ duration: 0.18 }}
								>
									<X className="size-5" />
								</motion.span>
							) : (
								<motion.span
									key="open"
									initial={{ opacity: 0, rotate: 45 }}
									animate={{ opacity: 1, rotate: 0 }}
									exit={{ opacity: 0, rotate: -45 }}
									transition={{ duration: 0.18 }}
								>
									<Menu className="size-5" />
								</motion.span>
							)}
						</AnimatePresence>
					</button>
				</nav>
			</header>

			{/* ── Full-screen menu overlay ── */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						key="menu"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.22 }}
						className="fixed inset-0 z-40 flex flex-col"
						style={{ background: "rgba(0,0,0,0.96)", ...frostedBg }}
					>
						{/* Spacer for fixed header */}
						<div className="h-[44px] shrink-0" />

						<div className="flex flex-col flex-1 overflow-y-auto px-6 py-4">
							<nav className="flex flex-col">
								{navItems.map(({ href, label }, i) => (
									<motion.div
										key={href}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
									>
										<Link
											href={href}
											onClick={close}
											className="flex items-center justify-between w-full py-[1.1rem] text-[1.35rem] font-medium text-[#f5f5f7] tracking-[-0.01em] no-underline transition-colors duration-150 hover:text-violet-400"
										>
											{label}
										</Link>
										<div className="h-px bg-white/[0.08]" />
									</motion.div>
								))}

								{/* Projects expandable row */}
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.15, duration: 0.25 }}
								>
									<button
										className="flex items-center justify-between w-full py-[1.1rem] bg-none border-none cursor-pointer text-left text-[1.35rem] font-medium text-[#f5f5f7] tracking-[-0.01em] transition-colors duration-150 hover:text-violet-400 group"
										onClick={() => setProjectsOpen((v) => !v)}
									>
										<span>Projects</span>
										<motion.span
											animate={{ rotate: projectsOpen ? 180 : 0 }}
											transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
											className="text-[#6e6e73] group-hover:text-violet-400 transition-colors"
										>
											<ChevronDown className="size-5" />
										</motion.span>
									</button>

									<AnimatePresence initial={false}>
										{projectsOpen && (
											<motion.div
												key="projects"
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
												className="overflow-hidden"
											>
												<div className="flex flex-col py-2 pb-4">
													{navProjects.map((p, i) => (
														<motion.div
															key={p.href}
															initial={{ opacity: 0, x: -8 }}
															animate={{ opacity: 1, x: 0 }}
															transition={{ delay: i * 0.05, duration: 0.2 }}
														>
															<Link
																href={p.href}
																onClick={close}
																className="group flex flex-col gap-[0.2rem] px-4 py-[0.8rem] rounded-xl no-underline transition-colors duration-150 hover:bg-white/[0.05]"
															>
																<span className="text-[0.95rem] font-medium text-[#f5f5f7] transition-colors duration-150 group-hover:text-violet-400">
																	{p.name}
																</span>
																<span className="text-[0.78rem] text-[#6e6e73] font-light leading-snug">
																	{p.desc}
																</span>
															</Link>
														</motion.div>
													))}
												</div>
											</motion.div>
										)}
									</AnimatePresence>

									<div className="h-px bg-white/[0.08]" />
								</motion.div>
							</nav>

							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.25, duration: 0.25 }}
								className="mt-8"
							>
								<SocialIcons />
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
