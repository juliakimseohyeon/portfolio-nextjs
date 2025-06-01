import { Button } from "@/components/ui/button";

import { projects } from "./data/ProjectData";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<main className="min-h-screen bg-gradient-to-b py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center my-8 lg:mb-16">
					<h1 className="text-4xl font-bold text-white mb-4">
						Coding Projects
					</h1>
					<p className="text-gray-300 max-w-2xl mx-auto">
						A collection of my work showcasing my journey in software
						development
					</p>
				</div>

				<div className="w-full flex flex-col justify-between items-center gap-4 lg:gap-8 text-left relative">
					{projects.map((project) => (
						<Link
							href={`/projects/${project.id}`}
							className="group w-full lg:w-3/5 flex flex-col lg:flex-row justify-between items-start lg:items-stretch lg:flex-1 text-left relative bg-gray-800 rounded-lg p-4 box-border gap-6 transition duration-300 hover:scale-101"
							key={project.id}
						>
							<Image
								className="w-full rounded-lg object-cover lg:flex-none lg:w-1/2"
								src={project.image}
								alt={project.project_name}
							/>
							<div className="lg:flex-1 lg:w-full lg:flex lg:flex-col lg:justify-between lg:items-start">
								<h3 className="group-hover:text-blue-300">
									{project.project_name}
								</h3>
								<p className="mb-6 text-gray-300">{project.intro_text}</p>
								<div className="flex flex-row justify-start items-start flex-wrap gap-2 pb-6">
									{project.tags.map((tag) => (
										<p
											className="m-0 text-xs text-white bg-gradient-to-r from-blue-500/80 to-purple-600/80 p-2 rounded-3xl shadow-lg"
											key={project.id}
										>
											{tag}
										</p>
									))}
								</div>
								<Button className="w-full bg-blue-300 text-black group-hover:bg-black hover:bg-black group-hover:text-white cursor-pointer">
									Read about {project.project_name}
								</Button>
							</div>
						</Link>
					))}
				</div>
			</div>
		</main>
	);
}
