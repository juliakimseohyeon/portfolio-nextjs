import Image from "next/image";
import Link from "next/link";
import LogoCarousel from "./projects/components/LogoCarousel";
import { projects } from "./projects/data/ProjectData";
import { testimonials } from "./projects/data/TestimonialsData";
import {
	eyebrow,
	gradientText,
	btnPrimary,
	btnSecondary,
	chip,
	chipSm,
	sectionInner,
	sectionTitle,
} from "@/lib/styles";

export const metadata = {
	title: "Julia Kim — Full Stack Developer",
	description: "Full Stack Developer. Designed to build. Engineered to impress.",
};

const skills = [
	{ category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCN UI"] },
	{ category: "Backend", items: ["Nest.js", "Node.js", "Express", "REST APIs"] },
	{ category: "Database", items: ["PostgreSQL", "Prisma ORM", "MySQL"] },
	{ category: "AI / APIs", items: ["OpenAI API", "StabilityAI", "Prompt Engineering"] },
	{ category: "Design", items: ["Figma", "Adobe XD", "Adobe Illustrator", "UI/UX"] },
	{ category: "DevOps", items: ["AWS Amplify", "Heroku", "Vercel", "Git"] },
];

const highlights = [
	{ stat: "3+", label: "Years of experience" },
	{ stat: "20+", label: "Technologies mastered" },
	{ stat: "8+", label: "Five-star reviews" },
	{ stat: "∞", label: "Cups of coffee" },
];

const section = "py-24 px-6 border-b border-white/[0.07]";
const featureHeadline = "py-28 px-6 text-center border-b border-white/[0.07]";

export default function Home() {
	return (
		<main className="bg-black text-[#f5f5f7]">

			{/* ── Hero ── */}
			<section className="min-h-svh flex items-center justify-center bg-black border-b border-white/10 text-center px-6 pt-24 pb-16">
				<div className="flex flex-col items-center gap-2 max-w-[800px]">
					<span className="inline-block bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 text-white text-[0.75rem] font-bold tracking-[0.15em] uppercase px-[0.9rem] py-[0.3rem] rounded-full mb-3">
						New
					</span>
					<h1 className="text-[clamp(3.5rem,10vw,7rem)] font-bold tracking-[-0.03em] leading-none text-[#f5f5f7]">
						Julia Kim
					</h1>
					<p className="text-[clamp(3.5rem,10vw,7rem)] font-bold tracking-[-0.03em] leading-none bg-gradient-to-br from-purple-500 via-indigo-400 to-blue-400 bg-clip-text text-transparent mb-5">
						Pro.
					</p>
					<p className="text-[clamp(1.1rem,2.5vw,1.4rem)] font-light text-[#a1a1a6] leading-relaxed mb-8">
						Full Stack Developer.
						<br />
						Designed to build. Engineered to impress.
					</p>
					<div className="flex flex-wrap gap-4 justify-center">
						<Link href="mailto:juliakimseohyeon@gmail.com" className={btnPrimary}>
							Hire Me
						</Link>
						<Link href="#projects" className={btnSecondary}>
							View Projects
						</Link>
					</div>
				</div>
			</section>

			{/* ── Pricing bar ── */}
			<div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 bg-[#1d1d1f] px-6 py-[0.85rem] text-[0.8rem] text-[#a1a1a6] border-b border-white/[0.08]">
				<span className="font-medium text-[#f5f5f7]">Available for hire</span>
				<span className="inline-block w-px h-[14px] bg-white/20" />
				<Link href="mailto:juliakimseohyeon@gmail.com" className="text-violet-400 transition-colors duration-150 hover:text-violet-300">
					Contact Julia
				</Link>
				<span className="inline-block w-px h-[14px] bg-white/20" />
				<Link href="https://www.linkedin.com/in/julia-kim-seo-hyeon/" target="_blank" className="text-violet-400 transition-colors duration-150 hover:text-violet-300">
					LinkedIn ↗
				</Link>
				<span className="inline-block w-px h-[14px] bg-white/20" />
				<Link href="https://github.com/juliakimseohyeon" target="_blank" className="text-violet-400 transition-colors duration-150 hover:text-violet-300">
					GitHub ↗
				</Link>
			</div>

			{/* ── Big tagline 1 ── */}
			<section className={`${featureHeadline} bg-[#0a0a0a]`}>
				<div className="max-w-[900px] mx-auto">
					<p className={eyebrow}>Full Stack. Front to back.</p>
					<h2 className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold tracking-[-0.025em] leading-[1.1] text-[#f5f5f7] mt-3">
						Beautiful on the outside.{" "}
						<span className={gradientText}>Solid on the inside.</span>
					</h2>
				</div>
			</section>

			{/* ── Stats row ── */}
			<div className="flex flex-wrap justify-center bg-[#111] border-b border-white/[0.07]">
				{highlights.map((h) => (
					<div
						key={h.stat}
						className="flex-1 basis-[150px] flex flex-col items-center justify-center gap-[0.3rem] py-12 px-6 border-r border-white/[0.07] last:border-r-0"
					>
						<span className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-[-0.03em] bg-gradient-to-br from-purple-500 to-blue-400 bg-clip-text text-transparent">
							{h.stat}
						</span>
						<span className="text-[0.8rem] text-[#a1a1a6] font-light text-center">
							{h.label}
						</span>
					</div>
				))}
			</div>

			{/* ── Skills ── */}
			<section id="skills" className={`${section} bg-[#0a0a0a]`}>
				<div className={sectionInner}>
					<p className={eyebrow}>Tech Stack</p>
					<h2 className={sectionTitle}>Built with the best tools.</h2>
					<div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
						{skills.map((group) => (
							<div key={group.category} className="bg-[#161617] border border-white/[0.08] rounded-[18px] p-7">
								<h3 className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-violet-400 mb-4">
									{group.category}
								</h3>
								<div className="flex flex-wrap gap-2">
									{group.items.map((item) => (
										<span key={item} className={chip}>{item}</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Logo carousel ── */}
			<section className="py-20 bg-black border-b border-white/[0.07] overflow-hidden">
				<p className={`${eyebrow} text-center mb-8`}>And more where that came from</p>
				<LogoCarousel />
			</section>

			{/* ── Big tagline 2 ── */}
			<section className={featureHeadline}>
				<div className="max-w-[900px] mx-auto">
					<p className={eyebrow}>Every project. Every detail.</p>
					<h2 className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold tracking-[-0.025em] leading-[1.1] text-[#f5f5f7] mt-3">
						<span className={gradientText}>Shipped.</span> Not shelved.
					</h2>
				</div>
			</section>

			{/* ── Projects ── */}
			<section id="projects" className={section}>
				<div className={sectionInner}>
					<p className={eyebrow}>Work</p>
					<h2 className={sectionTitle}>Select projects.</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{projects.map((project) => (
							<Link
								key={project.id}
								href={`/projects/${project.id}`}
								className="group flex flex-col bg-[#161617] border border-white/[0.08] rounded-[20px] overflow-hidden no-underline transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-violet-400/30"
							>
								<div className="relative w-full aspect-video overflow-hidden">
									<Image
										src={project.image}
										alt={project.project_name}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
								</div>
								<div className="flex flex-col gap-[0.6rem] p-6 flex-1">
									<h3 className="text-[1.15rem] font-semibold text-[#f5f5f7] tracking-[-0.01em]">
										{project.project_name}
									</h3>
									<p className="text-[0.82rem] text-[#86868b] leading-[1.55] line-clamp-3 m-0">
										{project.intro_text}
									</p>
									<div className="flex flex-wrap gap-[0.4rem] mt-1">
										{project.tags.slice(0, 3).map((tag) => (
											<span key={tag} className={chipSm}>{tag}</span>
										))}
									</div>
									<span className="mt-auto pt-3 text-[0.85rem] text-violet-400 font-medium transition-colors duration-150 group-hover:text-violet-300">
										Learn more →
									</span>
								</div>
							</Link>
						))}
					</div>
					<div className="flex justify-center mt-14">
						<Link href="/projects" className={btnPrimary}>
							View All Projects
						</Link>
					</div>
				</div>
			</section>

			{/* ── Big tagline 3 ── */}
			<section className={`${featureHeadline} bg-[#0a0a0a]`}>
				<div className="max-w-[900px] mx-auto">
					<p className={eyebrow}>Testimonials</p>
					<h2 className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold tracking-[-0.025em] leading-[1.1] text-[#f5f5f7] mt-3">
						Don&apos;t take our word for it.{" "}
						<span className={gradientText}>Take theirs.</span>
					</h2>
				</div>
			</section>

			{/* ── Reviews ── */}
			<section id="reviews" className={`${section} bg-[#0a0a0a]`}>
				<div className={sectionInner}>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
						{testimonials.map((t) => (
							<Link
								key={t.id}
								href="https://www.linkedin.com/in/julia-kim-seo-hyeon/details/recommendations/?detailScreenTabIndex=0"
								target="_blank"
								className="group flex flex-col gap-4 bg-[#161617] border border-white/[0.08] rounded-[20px] p-7 no-underline transition-[transform,border-color] duration-200 hover:-translate-y-[3px] hover:border-violet-400/30"
							>
								<span className="text-amber-400 text-[0.9rem] tracking-[0.05em]">★★★★★</span>
								<p className="text-[0.85rem] text-[#a1a1a6] leading-[1.7] flex-1 line-clamp-6 m-0">
									&ldquo;{t.text}&rdquo;
								</p>
								<div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/[0.07]">
									<div className="w-11 h-11 rounded-full overflow-hidden border border-white/[0.12] shrink-0">
										<Image
											src={t.photo}
											alt={t.name}
											width={44}
											height={44}
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<p className="text-[0.85rem] font-semibold text-[#f5f5f7] m-0">{t.name}</p>
										<p className="text-[0.72rem] text-[#86868b] m-0 mt-[0.1rem]">
											{t.relationship}
										</p>
									</div>
								</div>
							</Link>
						))}
					</div>
					<div className="flex justify-center mt-14">
						<Link
							href="https://www.linkedin.com/in/julia-kim-seo-hyeon/details/recommendations/?detailScreenTabIndex=0"
							target="_blank"
							className={btnSecondary}
						>
							Read all on LinkedIn ↗
						</Link>
					</div>
				</div>
			</section>

			{/* ── Final CTA ── */}
			<section className="bg-black text-center py-32 px-6 border-t border-white/[0.07]">
				<div className="max-w-[700px] mx-auto flex flex-col items-center gap-3">
					<p className={eyebrow}>Ready to build something great?</p>
					<h2 className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold tracking-[-0.03em] leading-[1.05] text-[#f5f5f7] mb-6">
						Hire Julia Kim.
						<br />
						<span className={gradientText}>Pro.</span>
					</h2>
					<div className="flex flex-wrap gap-4 justify-center">
						<Link href="mailto:juliakimseohyeon@gmail.com" className={btnPrimary}>
							Get in Touch
						</Link>
						<Link
							href="https://www.linkedin.com/in/julia-kim-seo-hyeon/"
							target="_blank"
							className={btnSecondary}
						>
							View LinkedIn ↗
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
