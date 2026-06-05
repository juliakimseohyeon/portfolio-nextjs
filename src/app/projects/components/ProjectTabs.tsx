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
		<div className="project-tabs">
			{/* ── Tab list ── */}
			<div className="project-tabs-list">
				{items.map((item, i) => (
					<button
						key={item.title}
						onClick={() => setActive(i)}
						className={`project-tab-btn${active === i ? " project-tab-btn--active" : ""}`}
					>
						<span className="project-tab-indicator" aria-hidden="true" />
						{item.title}
					</button>
				))}
			</div>

			{/* ── Content panel ── */}
			<div className="project-tabs-panel">
				<AnimatePresence mode="wait">
					<motion.div
						key={active}
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						className="project-tabs-content"
					>
						{items[active].content && (
							<div className="project-tabs-media">
								{items[active].content}
							</div>
						)}
						<div className="project-tabs-description">
							{parse(items[active].description)}
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
