import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

import { projects } from "./data/ProjectData";
import { testimonials } from "./data/TestimonialsData";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<main className="px-4 max-w-full flex flex-col gap-20 md:gap-32">
			<section className="w-full flex flex-col gap-8">
				<div className="m-0 text-center justify-items-center">
					<h1>Hi, I'm Julia</h1>
					<h2>Scroll down for the good stuff</h2>
					<ArrowDown className="animate-bounce w-6 mt-2" />
				</div>
				<div className="w-full relative p-4 flex flex-col items-center justify-center text-lg h-80 rounded-2xl md:box-border md:p-8 bg-gradient-to-br from-purple-700 to-blue-300">
					<div className="flex flex-row justify-start gap-2 max-w-full absolute top-4 left-4 md:top-8 md:left-8">
						<div className="size-4 rounded-full bg-red-300" />
						<div className="size-4 rounded-full bg-yellow-300" />
						<div className="size-4 rounded-full bg-blue-300" />
					</div>
					<div className="text-left">
						<p className="m-0">{"const julia = {"}</p>
						<p className="pl-4 m-0">
							skills: ['HTML', 'CSS', 'Sass', 'React', 'JavaScript', 'Express',
							'and more'],
						</p>
						<p className="pl-4 m-0">hardWorker: true,</p>
						<p className="pl-4 m-0">isCreative: true,</p>
						<div className="pl-4">
							{/* <Typewriter
								options={{
									loop: true,
									autoStart: true,
									strings: [
										'likes: ["😻", "🌿"]',
										'hobbies: ["🥾", "🏕️"]'
									],
									delay: 75,
									deleteSpeed: 50,
								}}
							/> */}
						</div>
						<p className="m-0">{"}"}</p>
					</div>
				</div>
			</section>
			<section className="w-full">
				<h2>Skills</h2>
				{/* <Carousel /> */}
			</section>
			<section className="max-w-full md:w-4/5 lg:w-full flex flex-col items-center gap-4">
				<h2>Projects</h2>
				<div className="w-full flex flex-col justify-between items-center gap-4 text-left relative">
					{projects.map((project) => (
						<Link
							href={`/projects/${project.id}`}
							className="w-full lg:w-3/5 flex flex-col lg:flex-row justify-between items-start lg:items-stretch lg:flex-1 text-left relative bg-blue-300/20 rounded-2xl p-4 box-border gap-6 transition-[0.3s] hover:bg-blue-300/40 hover:scale-101"
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
								<Button className="w-full">
									Read about {project.project_name}
								</Button>
							</div>
						</Link>
					))}
				</div>
			</section>
			<section className="max-w-full md:w-4/5 lg:w-full flex flex-col items-center gap-4">
				<h2>Words on the Street</h2>
				<div className="w-full flex flex-col justify-between items-center gap-4 text-left relative">
					{testimonials.map((testimonial) => (
						<Link
							href={
								"https://www.linkedin.com/in/julia-kim-seo-hyeon/details/recommendations/?detailScreenTabIndex=0"
							}
							className="w-full lg:w-3/5 flex flex-col lg:flex-row justify-between items-start lg:items-stretch lg:flex-1 text-left relative bg-blue-300/20 rounded-2xl p-4 box-border gap-6 transition-[0.3s] hover:bg-blue-300/40 hover:scale-101"
							key={testimonial.id}
						>
							<Image
								className="w-full rounded-lg object-cover lg:flex-none lg:w-1/2"
								src={testimonial.photo}
								alt={testimonial.name}
							/>
							<div className="lg:flex-1 lg:w-full lg:flex lg:flex-col lg:items-start">
								<h3>{testimonial.name}</h3>
								<p className="mt-2 mb-6 w-fit leading-1.5 text-xs text-white bg-blue-300 bg-gradient-to-br from-blue-300/50 to-purple-700/50 p-2 rounded-3xl">
									{testimonial.relationship}
								</p>
								<p>{testimonial.text}</p>
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
