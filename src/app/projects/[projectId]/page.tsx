"use client";

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
	id: number;
	project_name: string;
	image: StaticImageData;
	url?: string;
	github_frontend?: string;
	github_backend?: string;
	tags: string[];
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
			const id = Number.parseInt(projectId as string);
			const project = projects.find((p) => p.id === id);
			if (project) setSelectedProject(project as Project);
		}
	}, [projectId]);

	if (!selectedProject) {
		return <div>Loading...</div>;
	}

	if (selectedProject) {
		return (
			<div className="px-4 max-w-full flex flex-col items-start gap-8">
				<div className="w-full object-cover rounded-2xl self-center">
					<Image
						className="!relative"
						src={selectedProject.image.src}
						alt={selectedProject.project_name}
						fill
						quality={100}
					/>
				</div>
				<div className="w-full flex flex-col items-start gap-4">
					<div className="w-full flex flex-row justify-between lg:justify-start gap-16 items-baseline">
						<h1 className="m-0 text-left">{selectedProject.project_name}</h1>
						<div className="flex flex-row justify-between items-center gap-8">
							{selectedProject.url && (
								<Link
									className="hover:text-blue-300"
									href={selectedProject.url}
								>
									<LinkIcon className="size-8" />
								</Link>
							)}
							{selectedProject.github_frontend && (
								<Link
									href={selectedProject.github_frontend}
									className="hover:text-blue-300"
									// TODO: MAKE IT OPEN IN NEW TAB
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
								className="m-0 text-xs text-white bg-blue-300 bg-gradient-to-br from-blue-300/50 to-purple-700/50 p-2 rounded-3xl"
							>
								{tag}
							</p>
						))}
					</div>
				</div>
				<div className="max-w-full lg:w-3/5 text-left flex flex-col gap-16 pb-20 md:gap-32">
					{selectedProject.description &&
						Object.entries(selectedProject.description).map(([key, value]) => (
							<div
								key={key}
								className="w-full flex flex-col items-start gap-1 md:flex-row md:gap-4"
							>
								{value.image && (
									<div className="w-full md:w-1/2 object-cover">
										<Image
											src={value.image.src}
											className="!relative rounded-2xl"
											alt={value.subtitle}
											fill
										/>
									</div>
								)}
								<div className="w-full flex flex-col items-start md:gap-2">
									<h2 className="m-0">{value.subtitle}</h2>
									{value.text && parse(value.text)}
								</div>
							</div>
						))}
				</div>
			</div>
		);
	}
}
