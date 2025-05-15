import Image from "next/image";
import heroImg from "../../../public/images/graphic-projects/graphics-hero.png";
import { graphicProjects } from "./data/graphicDesignData";

export default function GraphicDesign() {
	return (
		<main className="px-4 pb-20 w-full flex flex-col gap-20 md:gap-40">
			<section className="h-[75vh] lg:h-screen">
				<Image src={heroImg} alt="graphic projects hero" />
				<h1>My graphic projects B.C. (Before Coding)</h1>
			</section>
			<section className="flex flex-col w-full gap-8 px-8 md:gap-16">
				{graphicProjects.map((project) => (
					<div className="flex flex-col w-full gap-8" key={project.id}>
						<div>
							<h3>{project.project_name}</h3>
							<div className="flex flex-row flex-wrap gap-2">
								{project.tags.map((tag, idx) => (
									<p
										className="leading-1.5 bg-blue-500/20 text-blue-300 p-2 rounded-3xl"
										key={idx}
									>
										{tag}
									</p>
								))}
							</div>
						</div>
						<div className="flex flex-col gap-8 md:flex-row md:space-between md:flex-wrap">
							{project.images.map((image, idx) => (
								<Image
									src={image}
									key={idx}
									alt={project.project_name}
									className="rounded-lg w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
								/>
							))}
						</div>
					</div>
				))}
			</section>
		</main>
	);
}
