"use client";

import ProjectTabs from "@/app/projects/components/ProjectTabs";
import { eyebrow, chip, chipSm } from "@/lib/styles";
import { iconLink } from "@/lib/styles";
import { LinkIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/ProjectData";

interface Project {
	id: string;
	project_name: string;
	image: StaticImageData;
	url?: string;
	github_frontend?: string;
	github_backend?: string;
	tags: string[];
	intro_text: string;
	content: {
		title: string;
		description: string;
		content?: React.ReactNode;
	}[];
}

export default function Page() {
	const { projectId } = useParams();
	const [project, setProject] = useState<Project | null>(null);

	useEffect(() => {
		if (projectId) {
			const found = projects.find((p) => p.id === projectId);
			if (found) setProject(found as unknown as Project);
		}
	}, [projectId]);

	if (!project) {
		return (
			<div className="flex items-center justify-center h-[60vh]">
				<span className="w-8 h-8 rounded-full border-2 border-white/10 border-t-violet-400 animate-spin" />
			</div>
		);
	}

	return (
		<main className="bg-black text-[#f5f5f7] min-h-svh">

			{/* ── Hero image ── */}
			<div className="relative w-full h-[60svh] overflow-hidden">
				<Image
					src={project.image.src}
					alt={project.project_name}
					fill
					quality={100}
					className="object-cover object-top"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/85" />
			</div>

			{/* ── Header ── */}
			<section className="px-6 py-16 border-b border-white/[0.07]">
				<div className="max-w-[860px] mx-auto flex flex-col gap-4">
					<p className={eyebrow}>Project</p>
					<div className="flex items-center gap-5 flex-wrap">
						<h1 className="text-[clamp(2.2rem,6vw,4rem)] font-bold tracking-[-0.03em] leading-[1.05] bg-gradient-to-br from-purple-500 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
							{project.project_name}
						</h1>
						<div className="flex gap-3 items-center">
							{project.url && (
								<Link
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className={iconLink}
									title="Live site"
								>
									<LinkIcon className="size-5" />
								</Link>
							)}
							{project.github_frontend && (
								<Link
									href={project.github_frontend}
									target="_blank"
									rel="noopener noreferrer"
									className={iconLink}
									title="GitHub"
								>
									<FaGithub className="size-5" />
								</Link>
							)}
						</div>
					</div>
					<p className="text-[1rem] leading-[1.7] text-[#a1a1a6] max-w-[680px] m-0 font-light">
						{project.intro_text}
					</p>
					<div className="flex flex-wrap gap-2 mt-1">
						{project.tags.map((tag) => (
							<span key={tag} className={chipSm}>{tag}</span>
						))}
					</div>
				</div>
			</section>

			{/* ── Take a closer look ── */}
			<section className="px-6 py-24">
				<div className="max-w-[1100px] mx-auto">
					<p className={eyebrow}>Details</p>
					<h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-[-0.025em] text-[#f5f5f7] mt-2 mb-12">
						Take a closer look.
					</h2>
					<ProjectTabs items={project.content} />
				</div>
			</section>
		</main>
	);
}
