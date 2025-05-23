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
			<div className="about-parallax">
				<section className="about-hero">
					<h1 className="about-hero__layer hero-text">
						I'm always walking the extra mile
					</h1>
					<div className="about-hero__layer sky" />
					<div className="about-hero__layer mountains" />
					<div className="about-hero__layer me" />
				</section>
				<section className="about-text__group">
					<p className="about-text__text">
						Having a graphic design and UX/UI background, I know that creating a
						pretty website isn't enough. A developer should see the bigger
						picture, including the business objectives and technical
						limitations, and passionately embrace findings based in user
						research.
					</p>
					<div className="about-text__chunk">
						<div className="about-image-group">
							<Image
								className="about-image--small"
								src={imageHat1}
								alt="Julia with a cap infront of Machu Picchu"
								width={100}
								height={100}
							/>
							<Image
								className="about-image--small"
								src={imageHat2}
								alt="Julia with a colourful hat on the beach"
								width={100}
								height={100}
							/>
							<Image
								className="about-image--small"
								src={imageHat3}
								alt="Julia with a toque infront of a lake"
								width={100}
								height={100}
							/>
							<Image
								className="about-image--small"
								src={imageHat4}
								alt="Julia with a cap at the beach"
								width={100}
								height={100}
							/>
						</div>
						<h2 className="about-text__title">I'm used to wearing many hats</h2>
						<p className="about-text__text">
							I transform from a designer that creates 8-foot-tall vinyl window
							graphics to a copywriter that captures readers' hearts with
							evocative words. It's all thanks to my passion for learning new
							skills and trends.
						</p>
					</div>
					<div className="about-text__chunk">
						<Image
							className="about-image"
							src={imageDiving}
							alt="Julia scuba diving"
							width={100}
							height={100}
						/>
						<h2 className="about-text__title">I'm ready to dive deep</h2>
						<p className="about-text__text">
							If you can't find me at my computer, I'm either hiking, knitting,
							kayaking, strumming the ukulele, learning a new language, or
							travelling. I have been to 21 countries so far, and I would like
							to visit at least a 100 more. I love to learn new skills and push
							myself. My most recent adventure has been to earn the PADI
							Scuba-diving Certificate!
						</p>
					</div>
					<div className="about-text__chunk">
						<Image
							className="about-image"
							src={imageCoffee}
							alt="A coffee mug with the text 'What does the future hold? Arthritis'"
							width={100}
							height={100}
						/>
						<h2 className="about-text__title">Let's grab coffee</h2>
						<p className="about-text__text">
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
