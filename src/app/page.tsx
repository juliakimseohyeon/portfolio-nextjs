import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

import LogoCarousel from "./projects/components/LogoCarousel";
import TypewriterComponent from "./projects/components/TypewriterComponent";
import { projects } from "./projects/data/ProjectData";
import { testimonials } from "./projects/data/TestimonialsData";

import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Julia Kim Portfolio",
	description: "Hello, I'm Julia, a pixel Picasso turned nomadic coder!",
};

export default function Home() {
	return (
		<main className="px-4 pb-8 max-w-full flex flex-col gap-20 md:gap-32">
			<section className="w-full flex flex-col gap-8 items-center">
				<div className="m-0 text-center justify-items-center">
					<h1 className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent font-extrabold">
						Hi, I'm Julia
					</h1>
					<h2>Scroll down for the good stuff</h2>
					<ArrowDown className="animate-bounce w-6 mt-2" />
				</div>
				<div className="w-full lg:w-4/5 relative p-4 flex flex-col items-center justify-center text-lg h-80 rounded-lg md:box-border md:p-8 bg-gradient-to-br from-purple-700 to-blue-300">
					<div className="flex flex-row justify-start gap-2 max-w-full absolute top-4 left-4 md:top-8 md:left-8">
						<div className="size-4 rounded-full bg-red-300" />
						<div className="size-4 rounded-full bg-yellow-300" />
						<div className="size-4 rounded-full bg-blue-300" />
					</div>
					<div className="text-left">
						<p className="m-0">{"const julia = {"}</p>
						<p className="pl-4 m-0">
							skills: ['Next.js', 'TailwindCSS', 'ShadCN UI', 'Nest.js', 'Prisma
							ORM', 'and more'],
						</p>
						<p className="pl-4 m-0">hardWorker: true,</p>
						<p className="pl-4 m-0">isCreative: true,</p>
						<div className="pl-4">
							<TypewriterComponent />
						</div>
						<p className="m-0">{"}"}</p>
					</div>
				</div>
			</section>
			<section className="max-w-full md:w-4/5 lg:w-full flex flex-col items-center gap-4">
				<h2>Skills</h2>
				<LogoCarousel />
			</section>
			<section className="max-w-full md:w-4/5 lg:w-full flex flex-col items-center gap-4">
				<h2>Projects</h2>
				<div className="w-full flex flex-col justify-between items-center gap-4 text-left relative">
					{projects.map((project) => (
						<Link
							href={`/projects/${project.id}`}
							className="w-full lg:w-3/5 flex flex-col lg:flex-row justify-between items-start lg:items-stretch lg:flex-1 text-left relative bg-blue-300/20 rounded-lg p-4 box-border gap-6 transition duration-300 hover:bg-blue-300/40 hover:scale-101"
							key={project.id}
						>
							<Image
								className="w-full rounded-lg object-cover lg:flex-none lg:w-1/2"
								src={project.image}
								alt={project.project_name}
							/>
							<div className="lg:flex-1 lg:w-full lg:flex lg:flex-col lg:justify-between lg:items-start">
								<h3>{project.project_name}</h3>
								<p className="mb-6">{project.intro_text}</p>
								<div className="flex flex-row justify-start items-start flex-wrap gap-2 pb-6">
									{project.tags.map((tag) => (
										<p
											className="m-0 leading-1.5 text-xs text-white bg-blue-300 bg-gradient-to-br from-blue-300/50 to-purple-700/50 p-2 rounded-3xl"
											key={project.id}
										>
											{tag}
										</p>
									))}
								</div>
								<Button className="w-full bg-blue-300 text-black">
									Read about {project.project_name}
								</Button>
							</div>
						</Link>
					))}
				</div>
			</section>
			<section className="max-w-full md:w-4/5 lg:w-full flex flex-col items-center gap-4">
				<h2>Words on the Street</h2>
				<div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4 lg:flex-wrap text-left relative">
					{testimonials.map((testimonial) => (
						<Link
							href={
								"https://www.linkedin.com/in/julia-kim-seo-hyeon/details/recommendations/?detailScreenTabIndex=0"
							}
							className="w-full lg:w-[calc(50%-0.5rem)] flex flex-col justify-between items-start lg:items-stretch text-left relative border-white border-1 rounded-lg p-4 box-border gap-6 transition duration-300 hover:scale-101"
							key={testimonial.id}
						>
							<div className="flex flex-col lg:flex-row gap-4 lg:items-end">
								<Image
									className="w-full rounded-lg object-cover lg:flex-none lg:w-1/2 border-white border-1"
									src={testimonial.photo}
									alt={testimonial.name}
								/>
								<div className="lg:flex lg:flex-col">
									<h3>{testimonial.name}</h3>
									<p className="w-fit leading-1.5 text-xs text-black bg-white p-2 rounded-3xl">
										{testimonial.relationship}
									</p>
								</div>
							</div>
							<p>{testimonial.text}</p>
						</Link>
					))}
				</div>
				<Button className="w-full lg:w-fit bg-white text-black hover:bg-blue-300 hover:text-white cursor-pointer">
					Read Recommendations on LinkedIn
				</Button>
			</section>
		</main>
	);
}
