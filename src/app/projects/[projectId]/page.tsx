"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import parse from "html-react-parser";
import { LinkIcon } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/ProjectData";

interface ProjectDescription {
	image?: StaticImageData;
	subtitle: string;
	text: string;
}

interface Project {
	id: string;
	project_name: string;
	image: StaticImageData;
	url?: string;
	github_frontend?: string;
	github_backend?: string;
	tags: string[];
	content: {
		title: string;
		description: string;
		content?: React.ReactNode;
	}[];
	description: {
		what?: ProjectDescription;
		why?: ProjectDescription;
		who?: ProjectDescription;
		tech_stack?: ProjectDescription;
		how?: ProjectDescription;
		key_learnings?: ProjectDescription;
		next_steps?: ProjectDescription;
	};
	intro_text: string;
}

export default function Page() {
	const { projectId } = useParams();
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);

	/* -------------------------------------------------------------------------- */
	/*         Function to load selected project details on initial mount         */
	/* -------------------------------------------------------------------------- */
	useEffect(() => {
		if (projectId) {
			const project = projects.find((p) => p.id === projectId);
			if (project) setSelectedProject(project as unknown as Project);
		}
	}, [projectId]);

	if (!selectedProject) {
		return <div>Loading...</div>;
	}

	if (selectedProject) {
		return (
			<main className="px-4 lg:px-8 max-w-full flex flex-col items-start gap-8 animate-fadeIn">
				<div className="w-full object-cover rounded-xl self-center overflow-hidden shadow-2xl">
					<Image
						className="!relative"
						src={selectedProject.image.src}
						alt={selectedProject.project_name}
						fill
						quality={100}
					/>
				</div>
				<div className="w-full flex flex-col items-start gap-6">
					<div className="w-full flex flex-row justify-between lg:justify-start gap-16 items-baseline">
						<h1 className="m-0 text-left text-4xl font-bold bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent">
							{selectedProject.project_name}
						</h1>
						<div className="flex flex-row justify-between items-center gap-8">
							{selectedProject.url && (
								<Link
									className="hover:text-blue-300 transition duration-300 hover:scale-110 transform"
									href={selectedProject.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<LinkIcon className="size-8" />
								</Link>
							)}
							{selectedProject.github_frontend && (
								<Link
									href={selectedProject.github_frontend}
									className="hover:text-blue-300 transition duration-300 hover:scale-110 transform"
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGithub className="size-8" />
								</Link>
							)}
						</div>
					</div>
					<div className="flex flex-row items-start gap-2 flex-wrap">
						{selectedProject.tags?.map((tag, idx) => (
							<p
								key={`${selectedProject.id}-${idx}`}
								className="m-0 text-xs text-white bg-gradient-to-r from-blue-500/80 to-purple-600/80 p-2 rounded-3xl shadow-lg"
							>
								{tag}
							</p>
						))}
					</div>
				</div>
				<StickyScroll content={selectedProject.content} />
			</main>
		);
	}
}
