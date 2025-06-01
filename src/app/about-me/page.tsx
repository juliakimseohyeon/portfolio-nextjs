import Image from "next/image";

import "./about-me.scss";
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import imageCoffee from "../../../public/images/about-me/about-me-coffee.jpg";
import imageDiving from "../../../public/images/about-me/about-me-diving.jpg";
import imageHat1 from "../../../public/images/about-me/about-me-hat-1.jpg";
import imageHat2 from "../../../public/images/about-me/about-me-hat-2.jpg";
import imageHat3 from "../../../public/images/about-me/about-me-hat-3.jpg";
import imageHat4 from "../../../public/images/about-me/about-me-hat-4.jpg";

export default function Page() {
	return (
		<main>
			<div className="p-0 m-0 h-[90vh] overflow-x-hidden overflow-y-scroll perspective-near lg:w-screen">
				<section className="relative h-[90vh] w-screen transform-3d -z-10">
					<h1 className="absolute top-0 bottom-0 left-0 right-0 text-center md:absolute md:top-[10%]">
						I'm always walking the extra mile
					</h1>
					<div className="absolute top-0 bottom-0 left-0 right-0 bg-[url('/images/about-me/about-me-main-sky.png')] bg-no-repeat bg-center bg-cover translate-z-[-400px] scale-[2.33333333] -z-30 opacity-50 lg:bg-[url('/images/about-me/about-me-main-sky-desktop.png')] lg:translate-z-[-250px] lg:scale-[1.833333333] lg:opacity-25 lg:bg-[50%_75%] mask-t-from-2%" />
					<div className="absolute top-0 bottom-0 left-0 right-0 bg-[url('/images/about-me/about-me-main-mountains-lake.png')] bg-no-repeat bg-center bg-cover translate-z-[-250px] scale-[1.833333333] -z-20 opacity-75 lg:bg-[url('/images/about-me/about-me-main-mountains-lake-desktop.png')] lg:translate-z-[-125px] lg:scale-[1.4167] lg:bg-[50%_75%]" />
					<div className="absolute top-0 bottom-0 left-0 right-0 bg-[url('/images/about-me/about-me-foreground.png')] bg-no-repeat bg-center bg-cover translate-z-0 scale-100 -z-10 backdrop-blur-[2px] md:bg-[url('/images/about-me/about-me-foreground-tablet.png')] lg:bg-[url('/images/about-me/about-me-foreground-desktop.png')] lg:bg-[50%_75%] mask-b-from-2%" />
				</section>
				<section className="px-4 pb-20 flex flex-col gap-12 lg:m-auto lg:gap-16 lg:w-[50%]">
					<p className="text-left">
						Having a graphic design and UX/UI background, I know that creating a
						pretty website isn't enough. A developer should see the bigger
						picture, including the business objectives and technical
						limitations, and passionately embrace findings based in user
						research.
					</p>
					<div className="flex flex-col items-start gap-4 text-left">
						<div className="flex flex-row justify-around flex-wrap gap-4 w-full relative">
							<div className="w-[calc(50%-0.5rem)]">
								<Image
									className="!relative rounded-2xl"
									src={imageHat1}
									alt="Julia with a cap infront of Machu Picchu"
									fill
								/>
							</div>
							<div className="w-[calc(50%-0.5rem)]">
								<Image
									className="!relative rounded-2xl"
									src={imageHat2}
									alt="Julia with a colourful hat on the beach"
									fill
								/>
							</div>
							<div className="w-[calc(50%-0.5rem)]">
								<Image
									className="!relative rounded-2xl"
									src={imageHat3}
									alt="Julia with a toque infront of a lake"
									fill
								/>
							</div>
							<div className="w-[calc(50%-0.5rem)]">
								<Image
									className="!relative rounded-2xl"
									src={imageHat4}
									alt="Julia with a cap at the beach"
									fill
								/>
							</div>
						</div>
						<h2 className="m-0">I'm used to wearing many hats</h2>
						<p className="text-left">
							I transform from a designer that creates 8-foot-tall vinyl window
							graphics to a copywriter that captures readers' hearts with
							evocative words. It's all thanks to my passion for learning new
							skills and trends.
						</p>
					</div>
					<div className="flex flex-col items-start gap-4 text-left relative">
						<div className="w-full">
							<Image
								className="!relative rounded-2xl"
								src={imageDiving}
								alt="Julia scuba diving"
								fill
							/>
						</div>
						<h2 className="m-0">I'm ready to dive deep</h2>
						<p className="text-left">
							If you can't find me at my computer, I'm either hiking, knitting,
							kayaking, strumming the ukulele, learning a new language, or
							travelling. I have been to 25 countries so far, and I would like
							to visit at least a 100 more. I love to learn new skills and push
							myself. My most recent adventure has been to earn the PADI
							Scuba-diving Certificate!
						</p>
					</div>
					<div className="flex flex-col items-start gap-4 text-left relative">
						<div className="w-full">
							<Image
								className="!relative rounded-2xl"
								src={imageCoffee}
								alt="A coffee mug with the text 'What does the future hold? Arthritis'"
								fill
							/>
						</div>
						<h2 className="m-0">Let's grab coffee</h2>
						<p className="text-left">
							Interested in hearing more about my projects? Want to hear some
							awesome dad jokes? Feel free to reach out to me by using any of
							the methods below!
						</p>
					</div>
					<SocialIcons
						containerClassName="self-center w-full justify-around lg:w-[30%]"
						buttonClassName="hover:bg-blue-300"
						variant="ghost"
					/>
				</section>
			</div>
		</main>
	);
}
