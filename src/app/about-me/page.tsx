import SocialIcons from "@/components/SocialIcons/SocialIcons";
import { eyebrow, gradientText, btnPrimary, btnSecondary } from "@/lib/styles";
import Image from "next/image";
import Link from "next/link";

import imageCoffee from "../../../public/images/about-me/about-me-coffee.jpg";
import imageDiving from "../../../public/images/about-me/about-me-diving.jpg";
import imageHat1 from "../../../public/images/about-me/about-me-hat-1.jpg";
import imageHat2 from "../../../public/images/about-me/about-me-hat-2.jpg";
import imageHat3 from "../../../public/images/about-me/about-me-hat-3.jpg";
import imageHat4 from "../../../public/images/about-me/about-me-hat-4.jpg";

export const metadata = {
	title: "About Julia Kim",
	description: "Full Stack Developer. Always walking the extra mile.",
};

const section = "py-24 px-6 border-b border-white/[0.07]";
const sectionInner = "max-w-[1100px] mx-auto";
const twoCol = "grid grid-cols-1 md:grid-cols-2 gap-12 items-center";
const textBlock = "flex flex-col gap-4";
const bodyText = "text-[1rem] leading-[1.8] text-[#a1a1a6] font-light m-0";
const sectionHeading =
	"text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold tracking-[-0.025em] text-[#f5f5f7] leading-[1.15] mt-1";
const widePhoto =
	"relative rounded-[20px] overflow-hidden aspect-[4/3] bg-[#161617]";

export default function Page() {
	return (
		<main className="bg-black text-[#f5f5f7]">

			{/* ── Parallax hero ── */}
			<div className="p-0 m-0 h-[90svh] overflow-x-hidden overflow-y-scroll perspective-near w-screen">
				<section className="relative h-[90svh] w-screen transform-3d -z-10">
					<h1 className="absolute inset-0 flex items-center justify-center text-center px-6 text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tight leading-tight text-[#f5f5f7] z-10">
						I&apos;m always walking<br />the extra mile
					</h1>
					<div className="absolute inset-0 bg-[url('/images/about-me/about-me-main-sky.png')] bg-no-repeat bg-center bg-cover translate-z-[-400px] scale-[2.33333333] -z-30 opacity-25 lg:bg-[url('/images/about-me/about-me-main-sky-desktop.png')] lg:translate-z-[-250px] lg:scale-[1.833333333] lg:bg-[50%_75%] mask-t-from-10% lg:mask-t-from-80%" />
					<div className="absolute inset-0 bg-[url('/images/about-me/about-me-main-mountains-lake.png')] bg-no-repeat bg-center bg-cover translate-z-[-250px] scale-[1.833333333] -z-20 opacity-75 lg:bg-[url('/images/about-me/about-me-main-mountains-lake-desktop.png')] lg:translate-z-[-125px] lg:scale-[1.4167] lg:bg-[50%_75%]" />
					<div className="absolute inset-0 bg-[url('/images/about-me/about-me-foreground.png')] bg-no-repeat bg-center bg-cover translate-z-0 scale-100 -z-10 md:bg-[url('/images/about-me/about-me-foreground-tablet.png')] lg:bg-[url('/images/about-me/about-me-foreground-desktop.png')] lg:bg-[50%_75%] mask-b-from-70%" />
				</section>
			</div>

			{/* ── Intro ── */}
			<section className={`${section} text-center`}>
				<div className={`${sectionInner} flex flex-col items-center gap-4`}>
					<p className={eyebrow}>About Me</p>
					<h2 className={sectionHeading}>
						Design thinking meets{" "}
						<span className={gradientText}>engineering depth.</span>
					</h2>
					<p className={`${bodyText} max-w-[640px]`}>
						Having a graphic design and UX/UI background, I know that creating a
						pretty website isn&apos;t enough. A developer should see the bigger
						picture — including the business objectives and technical limitations
						— and passionately embrace findings based in user research.
					</p>
				</div>
			</section>

			{/* ── Wearing many hats ── */}
			<section className={`${section} bg-[#0a0a0a]`}>
				<div className={sectionInner}>
					<div className={twoCol}>
						<div className={`${textBlock} md:order-1`}>
							<p className={eyebrow}>Versatility</p>
							<h2 className={sectionHeading}>
								I&apos;m used to wearing{" "}
								<span className={gradientText}>many hats.</span>
							</h2>
							<p className={bodyText}>
								I transform from a designer that creates 8-foot-tall vinyl window
								graphics to a copywriter that captures readers&apos; hearts with
								evocative words. It&apos;s all thanks to my passion for learning
								new skills and staying on top of trends.
							</p>
						</div>
						<div className="grid grid-cols-2 gap-3 md:order-2">
							{[
								{ src: imageHat1, alt: "Julia at Machu Picchu" },
								{ src: imageHat2, alt: "Julia on the beach" },
								{ src: imageHat3, alt: "Julia by a lake" },
								{ src: imageHat4, alt: "Julia at the beach" },
							].map((img) => (
								<div key={img.alt} className="relative rounded-2xl overflow-hidden aspect-square bg-[#161617]">
									<Image src={img.src} alt={img.alt} fill className="object-cover" />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ── Dive deep ── */}
			<section className={section}>
				<div className={sectionInner}>
					<div className={twoCol}>
						<div className={widePhoto}>
							<Image src={imageDiving} alt="Julia scuba diving" fill className="object-cover" />
						</div>
						<div className={textBlock}>
							<p className={eyebrow}>Curiosity</p>
							<h2 className={sectionHeading}>
								I&apos;m ready to{" "}
								<span className={gradientText}>dive deep.</span>
							</h2>
							<p className={bodyText}>
								If you can&apos;t find me at my computer, I&apos;m either hiking,
								knitting, kayaking, strumming the ukulele, learning a new language,
								or travelling. I&apos;ve been to 25 countries and counting. My most
								recent adventure: earning my PADI Scuba-diving Certificate.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ── Grab coffee ── */}
			<section className={`${section} bg-[#0a0a0a]`}>
				<div className={sectionInner}>
					<div className={twoCol}>
						<div className={textBlock}>
							<p className={eyebrow}>Let&apos;s connect</p>
							<h2 className={sectionHeading}>
								Let&apos;s grab{" "}
								<span className={gradientText}>coffee.</span>
							</h2>
							<p className={bodyText}>
								Interested in hearing more about my projects? Want to hear some
								awesome dad jokes? Feel free to reach out using any of the links
								below — I&apos;d love to chat.
							</p>
							<div className="flex flex-wrap gap-3 mt-2">
								<Link href="mailto:juliakimseohyeon@gmail.com" className={btnPrimary}>
									Send me an email
								</Link>
								<Link
									href="https://www.linkedin.com/in/julia-kim-seo-hyeon"
									target="_blank"
									className={btnSecondary}
								>
									LinkedIn ↗
								</Link>
							</div>
							<SocialIcons containerClassName="mt-2" />
						</div>
						<div className={widePhoto}>
							<Image
								src={imageCoffee}
								alt="A coffee mug reading 'What does the future hold? Arthritis'"
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
