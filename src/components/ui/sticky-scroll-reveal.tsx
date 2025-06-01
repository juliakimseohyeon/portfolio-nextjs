"use client";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const StickyScroll = ({
	content,
	contentClassName,
}: {
	content: {
		title: string;
		description: string;
		content?: React.ReactNode | any;
	}[];
	contentClassName?: string;
}) => {
	const [activeCard, setActiveCard] = React.useState(0);
	const ref = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		// uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
		// target: ref
		container: ref,
		offset: ["start start", "end end"],
	});
	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		const cardsBreakpoints = content.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce(
			(acc, breakpoint, index) => {
				const distance = Math.abs(latest - breakpoint);
				if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
					return index;
				}
				return acc;
			},
			0,
		);
		setActiveCard(closestBreakpointIndex);
	});

	const linearGradients = [
		"linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
		"linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
		"linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
	];

	const [backgroundGradient, setBackgroundGradient] = useState(
		linearGradients[0],
	);

	useEffect(() => {
		setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
		console.log("activeCard", activeCard);
	}, [activeCard]);

	return (
		<motion.div
			className="relative flex w-full h-[30rem] justify-start space-x-10 overflow-y-auto rounded-md no-scrollbar"
			ref={ref}
		>
			<div className="div flex items-start mr-0 lg:mr-10 absolute top-60 lg:relative lg:top-auto">
				<div className="sticky top-1/2 lg:relative lg:top-auto">
					{content.map((item, index) => (
						<div key={item.title + index} className="my-10 lg:my-20">
							<motion.h2
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className="text-2xl font-bold text-slate-100"
							>
								{item.title}
							</motion.h2>
							<motion.p
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className="mt-4 max-w-lg"
							>
								{parse(item.description)}
							</motion.p>
						</div>
					))}
					<div className="h-40" />
				</div>
			</div>
			{content[activeCard].content && (
				<div
					style={{ background: backgroundGradient }}
					className={cn(
						"sticky w-full top-0 lg:top-10 h-60 lg:w-80 overflow-hidden rounded-md bg-white",
						contentClassName,
					)}
				>
					{content[activeCard].content ?? null}
				</div>
			)}
		</motion.div>
	);
};
