import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import imageCoffee from "../../../public/images/about-me-coffee.jpg";
import imageDiving from "../../../public/images/about-me-diving.jpg";
import imageHat1 from "../../../public/images/about-me-hat-1.jpg";
import imageHat2 from "../../../public/images/about-me-hat-2.jpg";
import imageHat3 from "../../../public/images/about-me-hat-3.jpg";
import imageHat4 from "../../../public/images/about-me-hat-4.jpg";

export default function Page() {
	return (
		<main>
			<div className="p-0 m-0 h-[90vh] overflow-x-hidden overflow-y-scroll perspective-near lg:w-screen">
				<section className="relative h-[90vh] w-screen transform-3d -z-10">
					<h1 className="absolute top-0 bottom-0 left-0 right-0 hero-text">
						I'm always walking the extra mile
					</h1>
					<div className="absolute top-0 bottom-0 left-0 right-0 sky" />
					<div className="absolute top-0 bottom-0 left-0 right-0 mountains" />
					<div className="absolute top-0 bottom-0 left-0 right-0 me" />
				</section>
				<section className="about-text__group">
					<p className="text-left">
						Having a graphic design and UX/UI background, I know that creating a
						pretty website isn't enough. A developer should see the bigger
						picture, including the business objectives and technical
						limitations, and passionately embrace findings based in user
						research.
					</p>
					<div className="flex flex-col items-start gap-4 text-left">
						<div className="flex flex-row justify-around flex-wrap gap-4">
							<Image
								className="w-[calc(50%-0.5rem)] rounded-2xl"
								src={imageHat1}
								alt="Julia with a cap infront of Machu Picchu"
								width={100}
								height={100}
							/>
							<Image
								className="w-[calc(50%-0.5rem)] rounded-2xl"
								src={imageHat2}
								alt="Julia with a colourful hat on the beach"
								width={100}
								height={100}
							/>
							<Image
								className="w-[calc(50%-0.5rem)] rounded-2xl"
								src={imageHat3}
								alt="Julia with a toque infront of a lake"
								width={100}
								height={100}
							/>
							<Image
								className="w-[calc(50%-0.5rem)] rounded-2xl"
								src={imageHat4}
								alt="Julia with a cap at the beach"
								width={100}
								height={100}
							/>
						</div>
						<h2 className="m-0">I'm used to wearing many hats</h2>
						<p className="text-left">
							I transform from a designer that creates 8-foot-tall vinyl window
							graphics to a copywriter that captures readers' hearts with
							evocative words. It's all thanks to my passion for learning new
							skills and trends.
						</p>
					</div>
					<div className="flex flex-col items-start gap-4 text-left">
						<Image
							className="w-full rounded-2xl"
							src={imageDiving}
							alt="Julia scuba diving"
							width={100}
							height={100}
						/>
						<h2 className="m-0">I'm ready to dive deep</h2>
						<p className="text-left">
							If you can't find me at my computer, I'm either hiking, knitting,
							kayaking, strumming the ukulele, learning a new language, or
							travelling. I have been to 21 countries so far, and I would like
							to visit at least a 100 more. I love to learn new skills and push
							myself. My most recent adventure has been to earn the PADI
							Scuba-diving Certificate!
						</p>
					</div>
					<div className="flex flex-col items-start gap-4 text-left">
						<Image
							className="w-full rounded-2xl"
							src={imageCoffee}
							alt="A coffee mug with the text 'What does the future hold? Arthritis'"
							width={100}
							height={100}
						/>
						<h2 className="m-0">Let's grab coffee</h2>
						<p className="text-left">
							Interested in hearing more about my projects? Want to hear some
							awesome dad jokes? Feel free to reach out to me by using any of
							the methods below!
						</p>
					</div>
					<div className="about-text__icon-group">
						<Button className="size-12">
							<FaGithub className="size-6" />
						</Button>
						<Button className="size-12">
							<FaLinkedin className="size-6" />
						</Button>
						<Button className="size-12">
							<FaEnvelope className="size-5" />
						</Button>
					</div>
				</section>
			</div>
		</main>
	);
}
