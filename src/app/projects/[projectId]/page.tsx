"use client";

import ProjectTabs from "@/app/projects/components/ProjectTabs";
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
			<div className="project-loading">
				<span />
			</div>
		);
	}

	return (
		<main className="project-page">
			{/* ── Hero image ── */}
			<div className="project-hero-image">
				<Image
					src={project.image.src}
					alt={project.project_name}
					fill
					quality={100}
					className="object-cover"
				/>
				<div className="project-hero-overlay" />
			</div>

			{/* ── Header ── */}
			<section className="project-header">
				<div className="project-header-inner">
					<p className="apple-eyebrow">Project</p>
					<div className="project-title-row">
						<h1 className="project-title">{project.project_name}</h1>
						<div className="project-links">
							{project.url && (
								<Link
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="icon-link"
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
									className="icon-link"
									title="GitHub"
								>
									<FaGithub className="size-5" />
								</Link>
							)}
						</div>
					</div>
					<p className="project-intro">{project.intro_text}</p>
					<div className="project-tag-row">
						{project.tags.map((tag) => (
							<span key={tag} className="apple-chip apple-chip-sm">
								{tag}
							</span>
						))}
					</div>
				</div>
			</section>

			{/* ── Divider ── */}
			<div className="project-divider" />

			{/* ── Take a closer look ── */}
			<section className="project-tabs-section">
				<div className="project-tabs-section-inner">
					<p className="apple-eyebrow">Details</p>
					<h2 className="project-tabs-headline">Take a closer look.</h2>
					<ProjectTabs items={project.content} />
				</div>
			</section>
		</main>
	);
}
