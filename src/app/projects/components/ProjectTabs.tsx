"use client";

import parse from "html-react-parser";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface TabItem {
	title: string;
	description: string;
	content?: React.ReactNode;
}

export default function ProjectTabs({ items }: { items: TabItem[] }) {
	const [active, setActive] = useState(0);

	return (
		<div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-12 md:items-start">

			{/* ── Tab list ── */}
			<div className="flex flex-row overflow-x-auto scrollbar-none md:flex-col md:overflow-x-visible border-b border-white/[0.08] md:border-b-0 md:border-r md:border-white/[0.08]">
				{items.map((item, i) => (
					<button
						key={item.title}
						onClick={() => setActive(i)}
						className={[
							"flex items-center gap-3 bg-transparent border-none cursor-pointer text-left transition-colors duration-200",
							"py-[0.85rem] pr-5 pl-0 whitespace-nowrap md:whitespace-normal",
							"text-[0.9rem]",
							active === i
								? "text-[#f5f5f7] font-semibold"
								: "text-[#6e6e73] font-normal hover:text-[#d1d1d6]",
						].join(" ")}
					>
						{/* Vertical indicator bar — desktop only */}
						<span
							aria-hidden="true"
							className={[
								"hidden md:block w-[2px] h-[1.1em] rounded-sm shrink-0 transition-all duration-200",
								active === i
									? "bg-gradient-to-b from-purple-500 to-blue-400"
									: "bg-transparent",
							].join(" ")}
						/>
						{item.title}
					</button>
				))}
			</div>

			{/* ── Content panel ── */}
			<div className="min-h-[320px]">
				<AnimatePresence mode="wait">
					<motion.div
						key={active}
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						className="flex flex-col gap-7"
					>
						{items[active].content && (
							<div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#161617] border border-white/[0.08]">
								{items[active].content}
							</div>
						)}
						<div className="project-tabs-description text-[0.95rem] leading-[1.75] text-[#a1a1a6]">
							{parse(items[active].description)}
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
