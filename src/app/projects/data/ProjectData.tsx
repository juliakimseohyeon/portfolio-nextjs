import Image from "next/image";
import imgBooksOpen from "../../../../public/images/projects/booksopen-image.webp";
import imgBooksOpenImpact from "../../../../public/images/projects/booksopen-impact.jpg";
import imgBooksOpenResponsibilities from "../../../../public/images/projects/booksopen-responsibilities.jpg";
import imgBooksOpenTech from "../../../../public/images/projects/booksopen-tech.jpg";
import imgBooksOpenWhat from "../../../../public/images/projects/booksopen-what.svg";
import imgJuneAdmin from "../../../../public/images/projects/june-admin.webp";
import imgJuneAskJune from "../../../../public/images/projects/june-ask-june.webp";
import imgJuneBooking from "../../../../public/images/projects/june-booking.webp";
import imgJuneDashboard from "../../../../public/images/projects/june-dashboard.webp";
import imgJune from "../../../../public/images/projects/june-image.png";
import imgKongHow from "../../../../public/images/projects/kong-how.png";
import imgKong from "../../../../public/images/projects/kong-image.jpg";
import imgKongTech from "../../../../public/images/projects/kong-tech.jpg";
import imgKongWhat from "../../../../public/images/projects/kong-what.jpg";
import imgKongWhy from "../../../../public/images/projects/kong-why.jpg";
import imgPaqueteliasEntrega from "../../../../public/images/projects/paquetelias-entrega.webp";
import imgPaquetelias from "../../../../public/images/projects/paquetelias-image.webp";
import imgPaqueteliasRecorrido from "../../../../public/images/projects/paquetelias-recorrido.webp";
import imgPaqueteliasVolante from "../../../../public/images/projects/paquetelias-volante.webp";

export const projects = [
	{
		id: "june-health",
		project_name: "June Health",
		image: imgJune,
		intro_text:
			"The modern healthcare solution women deserve. June Health is a virtual women's healthcare platform that unites nurse practitioners, OBGYNs, therapists, and dietitians into one coordinated care team, supporting women across every stage and condition of life.",
		url: "https://app.junehealth.care/",
		tags: [
			"Design Engineer",
			"React Native",
			"Expo",
			"TypeScript",
			"UX/UI Design",
			"Prototyping",
			"Health Tech",
		],
		content: [
			{
				title: "What is June Health?",
				description:
					"<p>June Health is a <span className='font-bold'>comprehensive women's healthcare platform</span> that delivers virtual, coordinated care through a single unified team of specialists. Rather than treating women's health as one isolated condition, June supports the entire continuum of life's stages, from general and preventative health to fertility, family planning, perimenopause, menopause, and mental health, with care that is longitudinal, not transactional.</p>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover"
							src={imgJuneDashboard}
							alt="June Health member care dashboard"
							fill
						/>
					</div>
				),
			},
			{
				title: "My Role: Design Engineer",
				description:
					"<p>I drew on my background as a <span className='font-bold'>former graphic designer with strong UX/UI capabilities to work as a design engineer</span>, bridging design and development. I created prototypes and then implemented those designs directly into production-ready code, so the experience users saw was the experience I had designed, translated faithfully into a polished, functioning product.</p>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover"
							src={imgJuneAskJune}
							alt="June Health Ask June AI assistant"
							fill
						/>
					</div>
				),
			},
			{
				title: "Design to Code",
				description:
					"<ul><li>Prototyped flows and interfaces, then built them into working, production-ready code</li><li>Owned the handoff end to end, keeping the shipped product true to the design intent</li><li>Brought a designer's eye for detail, hierarchy, and polish to the engineering work</li></ul>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover"
							src={imgJuneBooking}
							alt="June Health appointment booking flow"
							fill
						/>
					</div>
				),
			},
			{
				title: "Advocating for the User",
				description:
					"<ul><li>Strongly advocated for UX research to ground decisions in real user needs</li><li>Championed user-centric design, encouraging it even when reviewing colleagues' code</li><li>Worked closely with leadership to help define sprint directions and priorities</li></ul>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover"
							src={imgJuneAdmin}
							alt="June Health employer admin portal"
							fill
						/>
					</div>
				),
			},
			{
				title: "Tech Stack",
				description:
					"<ul><li><span className='font-bold'>Mobile:</span> React Native with Expo for a cross-platform app</li><li><span className='font-bold'>Language:</span> TypeScript for type safety and maintainability</li><li><span className='font-bold'>Integrations:</span> PushWoosh for push notifications, Brevo for transactional email and messaging, and Stripe for payments</li></ul>",
			},
		],
	},
	{
		id: "kong",
		project_name: "Kong",
		image: imgKong,
		intro_text:
			"Get ready to fall in love with nature! Kong is a gamified plant identification app powered by OpenAI and StabilityAI which aims to foster a love for nature in a fun and artistic way.",
		url: "https://www.thekong.ca",
		tags: [
			"Full Stack",
			"Open AI",
			"Stability AI",
			"Image Recognition",
			"Image Generation",
			"Prompt Engineering",
		],
		content: [
			{
				title: "What Is Kong?",
				description:
					"<p>Kong is a <span className='font-bold'>gamified plant identification app powered by OpenAI and StabilityAI</span> which aims to foster a love towards nature in a fun and artistic way. When user uploads or takes a photo of a plant, the app identifies the plant and generates a Pokémon-like illustration. The content is then added to the user's collection.</p>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image className="object-cover" src={imgKongWhat} alt="Kong" fill />
					</div>
				),
			},
			{
				title: "Why is Kong necessary?",
				description:
					"<p>According to the World Economic Forum, <span className='font-bold'>almost 8 out of 10 children do not recognize common plants</span> like an oak leaf or a bluebell. In a world where climate crisis is worse than ever, it is essential that we don't forget about the very basics: fostering a culture where we love and appreciate nature and have empathy towards the environment.</p>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image className="object-cover" src={imgKongWhy} alt="Kong" fill />
					</div>
				),
			},
			{
				title: "Tech Stack",
				description:
					"<ul><li><span className='font-bold'>Authentication:</span> Clerk for secure and user-friendly authentication</li><li><span className='font-bold'>Backend:</span> Nest.js with TypeScript for type safety, structure and scalability</li><li><span className='font-bold'>Database:</span> Neon.tech's serverless PostgreSQL for effortless scaling</li><li><span className='font-bold'>Frontend:</span> Next.js with TypeScript,Tailwind CSS and ShadCN UI for a beautiful, accessible, and responsive interface</li><li><span className='font-bold'>Deployment:</span> Heroku for backend services and Vercel for frontend hosting</li></ul>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image className="object-cover" src={imgKongTech} alt="Kong" fill />
					</div>
				),
			},
			{
				title: "How does it work?",
				description:
					"<ol><li>User takes or uploads photo of a plant</li><li>MyPlantnet API identifies the plant</li><li>OpenAI API generates the plant data</li><li>StabilityAI API creates the illustration</li><li>User can read, update, or delete plant data</li></ol>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image src={imgKongHow} alt="Kong" />
					</div>
				),
			},
			{
				title: "Key Learnings",
				description:
					"<ul><li>How to write efficient and effective prompts for OpenAI API and StableAI API</li><li>Know when to change course of the project</li><li>Sticking with the planned deliverable and creating a solid MVP</li><li>Importance of a good night's sleep</li></ul>",
			},
			{
				title: "Next Steps",
				description:
					"<ul><li>Create login so each user would have access to their own plant collection</li><li>Incorporate Comfy UI for fine-tuned image generation</li><li>Tutorial on initial start to show how app works</li><li>Ability to send multiple photos to API for better identification</li><li>Google Maps integration to visually represent plant's habitat</li><li>Featured Plants page to show nearby plants that can be added to the collection</li></ul>",
			},
		],
	},
	{
		id: "booksopen",
		project_name: "BooksOpen",
		image: imgBooksOpen,
		intro_text:
			"Say goodbye to booking chaos! BooksOpen is your digital wingman for tattoo and piercing studios, turning appointment scheduling from a headache into a breeze. Built with love for service providers and clients alike, it's the modern way to manage your ink and piercing journey.",
		url: "https://booksopen.io",
		tags: [
			"Full Stack",
			"Next.js",
			"TypeScript",
			"Nest.js",
			"PostgreSQL",
			"Prisma",
			"AWS",
			"Heroku",
			"Tailwind CSS",
			"ShadCN UI",
		],
		content: [
			{
				title: "What is BooksOpen?",
				description:
					"<p>BooksOpen is a <span className='font-bold'>specialized scheduling system for the tattoo and piercing industry</span>. It streamlines the booking process, enhances communication between clients and service providers, and improves overall operational efficiency. The platform was developed with a strong focus on user experience and technical reliability.</p>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover !top-1/3 !left-1/5"
							src={imgBooksOpenWhat}
							alt="BooksOpen"
							fill
						/>
					</div>
				),
			},
			{
				title: "Tech Stack",
				description:
					"<ul><li><span className='font-bold'>Backend:</span> Nest.js with TypeScript for type safety, and Bull queue management for handling high-volume appointment requests</li><li><span className='font-bold'>Database:</span> PostgreSQL with Prisma ORM for robust data management</li><li><span className='font-bold'>Frontend:</span> Next.js with TypeScript,Tailwind CSS and ShadCN UI for a modern, responsive interface</li><li><span className='font-bold'>Deployment:</span> Heroku for backend services and AWS Amplify for frontend hosting</li></ul>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover"
							src={imgBooksOpenTech}
							alt="BooksOpen"
							fill
						/>
					</div>
				),
			},
			{
				title: "Key Responsibilities",
				description:
					"<ul><li>Collaborated with key decision makers and technical leads to align business objectives with technology initiatives</li><li>Shaped product strategy and defined technical roadmap as the sole long-term developer</li><li>Designed and optimized database schema for performance and maintainability</li><li>Managed deployment and continuous integration processes</li></ul>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover"
							src={imgBooksOpenResponsibilities}
							alt="BooksOpen"
							fill
						/>
					</div>
				),
			},
			{
				title: "Impact and Results",
				description:
					"<ul><li>Streamlined booking process for tattoo and piercing businesses</li><li>Enhanced communication between clients and service providers</li><li>Improved operational efficiency through automated scheduling</li><li>Established robust and scalable infrastructure</li><li>Fostered a collaborative and growth-oriented team environment</li></ul>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover"
							src={imgBooksOpenImpact}
							alt="BooksOpen"
							fill
						/>
					</div>
				),
			},
			{
				title: "Key Learnings",
				description:
					"<ul><li>Importance of aligning technical decisions with business objectives</li><li>Value of robust queue management for handling high-volume requests</li><li>Benefits of modern frontend frameworks for responsive design</li><li>Significance of cross-disciplinary collaboration in project success</li><li>Impact of continuous integration and deployment practices</li></ul>",
			},
		],
	},
	{
		id: "paquetelias",
		project_name: "Paquetelias",
		image: imgPaquetelias,
		intro_text:
			"Send packages with people already making the trip. Paquetelias is a collaborative shipping platform that connects people who need to send a parcel with drivers already travelling to that destination, turning spare vehicle capacity into affordable, hand-delivered shipping.",
		url: "https://paquetelias.es/",
		tags: [
			"Founding Developer",
			"Full Stack",
			"Infrastructure",
			"Database Design",
			"CI/CD",
			"Vercel",
			"Heroku",
			"GitHub",
		],
		content: [
			{
				title: "What is Paquetelias?",
				description:
					"<p>Paquetelias is a <span className='font-bold'>collaborative shipping platform</span> that connects senders with drivers who are already making a given journey. Instead of organizing dedicated delivery trips, it makes use of journeys that are already happening, so packages travel more cheaply and drivers are compensated for their travel costs.</p>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover"
							src={imgPaqueteliasRecorrido}
							alt="Paquetelias"
							fill
						/>
					</div>
				),
			},
			{
				title: "My Role",
				description:
					"<p>As the <span className='font-bold'>founding developer</span>, I owned the technical foundation of the product end to end.</p><ul><li>Set up the core infrastructure from the ground up</li><li>Designed the database schema and data model</li><li>Built out CI/CD pipelines across GitHub, Vercel, and Heroku for reliable, automated deployments</li><li>Worked directly with the founder and product designer to define business goals and translate them into product requirements</li></ul>",
			},
			{
				title: "How does it work?",
				description:
					"<ol><li>Search for a driver already travelling your route</li><li>Agree on a pickup location and time</li><li>The driver transports the package and hands it over in person at the destination</li></ol>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover"
							src={imgPaqueteliasVolante}
							alt="Paquetelias"
							fill
						/>
					</div>
				),
			},
			{
				title: "Who is it for?",
				description:
					"<ul><li><span className='font-bold'>Senders:</span> people who need to move a parcel between cities affordably</li><li><span className='font-bold'>Drivers:</span> travellers with spare capacity who want to offset their travel costs</li><li>A hand-delivery model keeps every handoff direct and personal</li></ul>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover"
							src={imgPaqueteliasEntrega}
							alt="Paquetelias"
							fill
						/>
					</div>
				),
			},
			{
				title: "Tech Stack",
				description:
					"<ul><li><span className='font-bold'>Frontend:</span> Vite and TypeScript with Tailwind CSS, packaged with Capacitor for cross-platform native builds</li><li><span className='font-bold'>Backend & Data:</span> Supabase for the database, auth, and APIs</li><li><span className='font-bold'>Integrations:</span> Didit for identity verification and TrustAp for escrow-backed, secure payments</li><li><span className='font-bold'>Infrastructure:</span> deployed across Vercel and Heroku with CI/CD on GitHub</li></ul>",
			},
			{
				title: "Next Steps",
				description:
					"<ul><li>Launch beyond the pre-launch waitlist to the first cities and routes</li><li>Define pricing, insurance coverage, and trust and safety flows</li><li>Grow the two-sided marketplace of senders and drivers</li></ul>",
			},
		],
	},
];
