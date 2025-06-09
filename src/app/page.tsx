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
		<main className="pb-16 max-w-full flex flex-col items-center gap-40 md:gap-60">
			<section className="px-4 w-full flex flex-col gap-8 items-center">
				<div className="m-0 text-center items-center justify-items-center">
					<h1 className="bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent font-extrabold">
						Hi, I'm Julia
					</h1>
					<h2>Scroll down for the good stuff</h2>
					<ArrowDown className="animate-bounce w-6 mt-2 self-center" />
				</div>
				<div className="w-full lg:w-3/5 relative p-4 flex flex-col items-center justify-center text-lg h-80 rounded-lg md:box-border md:p-8 bg-gradient-to-br from-purple-700 to-blue-300">
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
			<section className="w-full flex flex-col items-center gap-8">
				<h2>Skills</h2>
				<LogoCarousel />
			</section>
			<section className="px-4 max-w-full lg:w-4/5 flex flex-col items-center gap-8">
				<h2>Projects</h2>
				<div className="w-full flex flex-col lg:flex-row flex-nowrap justify-center items-center gap-4 text-left relative">
					{projects.map((project) => (
						<Link
							href={`/projects/${project.id}`}
							className="group w-full lg:w-[calc(50%-0.5rem)] flex flex-col items-center justify-center relative rounded-lg hover:scale-101 transition duration-300"
							key={project.id}
						>
							<Image
								className="w-full rounded-lg object-cover opacity-50 lg:opacity-100 lg:group-hover:opacity-30 transition duration-300"
								src={project.image}
								alt={project.project_name}
							/>
							<h3 className="text-center absolute lg:hidden lg:group-hover:block">
								{project.project_name}
							</h3>
						</Link>
					))}
				</div>
				<Link href="/projects" className="w-full lg:w-fit">
					<Button className="w-full bg-white text-black hover:bg-blue-300 hover:text-white cursor-pointer">
						View All Projects
					</Button>
				</Link>
			</section>
			<section className="px-4 max-w-full md:w-4/5 flex flex-col items-center gap-8">
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
				<Link
					href="https://www.linkedin.com/in/julia-kim-seo-hyeon/details/recommendations/?detailScreenTabIndex=0"
					target="_blank"
					className="w-full lg:w-fit"
				>
					<Button className="w-full lg:w-fit bg-white text-black hover:bg-blue-300 hover:text-white cursor-pointer">
						Read Recommendations on LinkedIn
					</Button>
				</Link>
			</section>
		</main>
	);
}
