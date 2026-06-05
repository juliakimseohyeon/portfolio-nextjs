import SocialIcons from "@/components/SocialIcons/SocialIcons";
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

export default function Page() {
	return (
		<main className="about-page">

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
			<section className="about-section about-section--intro">
				<div className="about-section-inner">
					<p className="apple-eyebrow">About Me</p>
					<h2 className="about-section-title">
						Design thinking meets{" "}
						<span className="apple-gradient-text">engineering depth.</span>
					</h2>
					<p className="about-body">
						Having a graphic design and UX/UI background, I know that creating a
						pretty website isn&apos;t enough. A developer should see the bigger
						picture — including the business objectives and technical limitations
						— and passionately embrace findings based in user research.
					</p>
				</div>
			</section>

			{/* ── Wearing many hats ── */}
			<section className="about-section about-section--alt">
				<div className="about-section-inner about-two-col about-two-col--media-right">
					<div className="about-text-block">
						<p className="apple-eyebrow">Versatility</p>
						<h2 className="about-section-title">
							I&apos;m used to wearing{" "}
							<span className="apple-gradient-text">many hats.</span>
						</h2>
						<p className="about-body">
							I transform from a designer that creates 8-foot-tall vinyl window
							graphics to a copywriter that captures readers&apos; hearts with
							evocative words. It&apos;s all thanks to my passion for learning
							new skills and staying on top of trends.
						</p>
					</div>
					<div className="about-photo-grid">
						{[
							{ src: imageHat1, alt: "Julia at Machu Picchu" },
							{ src: imageHat2, alt: "Julia on the beach" },
							{ src: imageHat3, alt: "Julia by a lake" },
							{ src: imageHat4, alt: "Julia at the beach" },
						].map((img) => (
							<div key={img.alt} className="about-photo-grid-item">
								<Image src={img.src} alt={img.alt} fill className="object-cover" />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Dive deep ── */}
			<section className="about-section">
				<div className="about-section-inner about-two-col">
					<div className="about-wide-photo">
						<Image src={imageDiving} alt="Julia scuba diving" fill className="object-cover" />
					</div>
					<div className="about-text-block">
						<p className="apple-eyebrow">Curiosity</p>
						<h2 className="about-section-title">
							I&apos;m ready to{" "}
							<span className="apple-gradient-text">dive deep.</span>
						</h2>
						<p className="about-body">
							If you can&apos;t find me at my computer, I&apos;m either hiking,
							knitting, kayaking, strumming the ukulele, learning a new language,
							or travelling. I&apos;ve been to 25 countries and counting. My most
							recent adventure: earning my PADI Scuba-diving Certificate.
						</p>
					</div>
				</div>
			</section>

			{/* ── Grab coffee ── */}
			<section className="about-section about-section--alt">
				<div className="about-section-inner about-two-col about-two-col--media-right">
					<div className="about-text-block">
						<p className="apple-eyebrow">Let&apos;s connect</p>
						<h2 className="about-section-title">
							Let&apos;s grab{" "}
							<span className="apple-gradient-text">coffee.</span>
						</h2>
						<p className="about-body">
							Interested in hearing more about my projects? Want to hear some
							awesome dad jokes? Feel free to reach out using any of the links
							below — I&apos;d love to chat.
						</p>
						<div className="about-cta-row">
							<Link href="mailto:juliakimseohyeon@gmail.com" className="apple-btn-primary">
								Send me an email
							</Link>
							<Link
								href="https://www.linkedin.com/in/julia-kim-seo-hyeon"
								target="_blank"
								className="apple-btn-secondary"
							>
								LinkedIn ↗
							</Link>
						</div>
						<SocialIcons containerClassName="about-social-row" />
					</div>
					<div className="about-wide-photo">
						<Image
							src={imageCoffee}
							alt="A coffee mug with the text 'What does the future hold? Arthritis'"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}
