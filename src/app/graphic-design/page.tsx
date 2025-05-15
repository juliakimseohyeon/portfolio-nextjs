import { HeroParallax } from "@/components/ui/hero-parallax";
import { graphicProjects } from "./data/graphicDesignData";

export default function GraphicDesign() {
	return (
		<main className="px-4 pb-20 w-full flex flex-col items-center gap-20 md:gap-40">
			<HeroParallax products={graphicProjects} />
		</main>
	);
}
