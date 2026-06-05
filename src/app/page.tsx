import Image from "next/image";
import Link from "next/link";
import LogoCarousel from "./projects/components/LogoCarousel";
import { projects } from "./projects/data/ProjectData";
import { testimonials } from "./projects/data/TestimonialsData";

export const metadata = {
	title: "Julia Kim — Full Stack Developer",
	description:
		"Full Stack Developer. Designed to build. Engineered to impress.",
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

export default function Home() {
	return (
		<main className="apple-main">

			{/* ── HERO ── */}
			<section className="apple-hero">
				<div className="apple-hero-inner">
					<span className="apple-new-badge">New</span>
					<h1 className="apple-hero-name">Julia Kim</h1>
					<p className="apple-hero-pro">Pro.</p>
					<p className="apple-hero-tagline">
						Full Stack Developer.
						<br />
						Designed to build. Engineered to impress.
					</p>
					<div className="apple-hero-ctas">
						<Link
							href="mailto:juliakimseohyeon@gmail.com"
							className="apple-btn-primary"
						>
							Hire Me
						</Link>
						<Link href="#projects" className="apple-btn-secondary">
							View Projects
						</Link>
					</div>
				</div>
			</section>

			{/* ── PRICING BAR ── */}
			<div className="apple-pricing-bar">
				<span className="apple-pricing-label">Available for hire</span>
				<span className="apple-pricing-divider" />
				<Link
					href="mailto:juliakimseohyeon@gmail.com"
					className="apple-pricing-link"
				>
					Contact Julia
				</Link>
				<span className="apple-pricing-divider" />
				<Link
					href="https://www.linkedin.com/in/julia-kim-seo-hyeon/"
					target="_blank"
					className="apple-pricing-link"
				>
					LinkedIn ↗
				</Link>
				<span className="apple-pricing-divider" />
				<Link
					href="https://github.com/juliakimseohyeon"
					target="_blank"
					className="apple-pricing-link"
				>
					GitHub ↗
				</Link>
			</div>

			{/* ── BIG TAGLINE 1 ── */}
			<section className="apple-feature-headline apple-bg-alt">
				<div className="apple-feature-headline-inner">
					<p className="apple-eyebrow">Full Stack. Front to back.</p>
					<h2 className="apple-big-statement">
						Beautiful on the outside.{" "}
						<span className="apple-gradient-text">Solid on the inside.</span>
					</h2>
				</div>
			</section>

			{/* ── STATS ROW ── */}
			<section className="apple-stats-row">
				{highlights.map((h) => (
					<div key={h.stat} className="apple-stat">
						<span className="apple-stat-number">{h.stat}</span>
						<span className="apple-stat-label">{h.label}</span>
					</div>
				))}
			</section>

			{/* ── SKILLS ── */}
			<section id="skills" className="apple-section apple-bg-alt">
				<div className="apple-section-inner">
					<p className="apple-eyebrow">Tech Stack</p>
					<h2 className="apple-section-title">Built with the best tools.</h2>
					<div className="apple-skills-grid">
						{skills.map((group) => (
							<div key={group.category} className="apple-skill-group">
								<h3 className="apple-skill-category">{group.category}</h3>
								<div className="apple-skill-chips">
									{group.items.map((item) => (
										<span key={item} className="apple-chip">
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── LOGO CAROUSEL ── */}
			<section className="apple-carousel-section">
				<p className="apple-eyebrow" style={{ textAlign: "center", marginBottom: "2rem" }}>
					And more where that came from
				</p>
				<LogoCarousel />
			</section>

			{/* ── BIG TAGLINE 2 ── */}
			<section className="apple-feature-headline apple-bg-dark">
				<div className="apple-feature-headline-inner">
					<p className="apple-eyebrow">Every project. Every detail.</p>
					<h2 className="apple-big-statement">
						<span className="apple-gradient-text">Shipped.</span> Not shelved.
					</h2>
				</div>
			</section>

			{/* ── PROJECTS ── */}
			<section id="projects" className="apple-section">
				<div className="apple-section-inner">
					<p className="apple-eyebrow">Work</p>
					<h2 className="apple-section-title">Select projects.</h2>
					<div className="apple-projects-grid">
						{projects.map((project) => (
							<Link
								key={project.id}
								href={`/projects/${project.id}`}
								className="apple-project-card"
							>
								<div className="apple-project-image-wrap">
									<Image
										src={project.image}
										alt={project.project_name}
										className="apple-project-image"
									/>
									<div className="apple-project-overlay" />
								</div>
								<div className="apple-project-info">
									<h3 className="apple-project-name">{project.project_name}</h3>
									<p className="apple-project-desc">{project.intro_text}</p>
									<div className="apple-project-tags">
										{project.tags.slice(0, 3).map((tag) => (
											<span key={tag} className="apple-chip apple-chip-sm">
												{tag}
											</span>
										))}
									</div>
									<span className="apple-project-cta">Learn more →</span>
								</div>
							</Link>
						))}
					</div>
					<div className="apple-section-cta-row">
						<Link href="/projects" className="apple-btn-primary">
							View All Projects
						</Link>
					</div>
				</div>
			</section>

			{/* ── BIG TAGLINE 3 ── */}
			<section className="apple-feature-headline apple-bg-alt">
				<div className="apple-feature-headline-inner">
					<p className="apple-eyebrow">Testimonials</p>
					<h2 className="apple-big-statement">
						Don&apos;t take our word for it.{" "}
						<span className="apple-gradient-text">Take theirs.</span>
					</h2>
				</div>
			</section>

			{/* ── REVIEWS ── */}
			<section id="reviews" className="apple-section apple-bg-alt">
				<div className="apple-section-inner">
					<div className="apple-reviews-grid">
						{testimonials.map((t) => (
							<Link
								key={t.id}
								href="https://www.linkedin.com/in/julia-kim-seo-hyeon/details/recommendations/?detailScreenTabIndex=0"
								target="_blank"
								className="apple-review-card"
							>
								<div className="apple-review-stars">★★★★★</div>
								<p className="apple-review-text">&ldquo;{t.text}&rdquo;</p>
								<div className="apple-review-author">
									<div className="apple-review-photo-wrap">
										<Image
											src={t.photo}
											alt={t.name}
											className="apple-review-photo"
											width={44}
											height={44}
										/>
									</div>
									<div>
										<p className="apple-review-name">{t.name}</p>
										<p className="apple-review-role">{t.relationship}</p>
									</div>
								</div>
							</Link>
						))}
					</div>
					<div className="apple-section-cta-row">
						<Link
							href="https://www.linkedin.com/in/julia-kim-seo-hyeon/details/recommendations/?detailScreenTabIndex=0"
							target="_blank"
							className="apple-btn-secondary"
						>
							Read all on LinkedIn ↗
						</Link>
					</div>
				</div>
			</section>

			{/* ── FINAL CTA ── */}
			<section className="apple-final-cta">
				<div className="apple-final-cta-inner">
					<p className="apple-eyebrow">Ready to build something great?</p>
					<h2 className="apple-final-title">
						Hire Julia Kim.
						<br />
						<span className="apple-gradient-text">Pro.</span>
					</h2>
					<div className="apple-hero-ctas">
						<Link
							href="mailto:juliakimseohyeon@gmail.com"
							className="apple-btn-primary"
						>
							Get in Touch
						</Link>
						<Link
							href="https://www.linkedin.com/in/julia-kim-seo-hyeon/"
							target="_blank"
							className="apple-btn-secondary"
						>
							View LinkedIn ↗
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
