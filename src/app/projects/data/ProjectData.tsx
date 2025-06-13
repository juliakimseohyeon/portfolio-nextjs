import Image from "next/image";
import imgBooksOpen from "../../../../public/images/projects/booksopen-image.webp";
import imgBooksOpenImpact from "../../../../public/images/projects/booksopen-impact.jpg";
import imgBooksOpenResponsibilities from "../../../../public/images/projects/booksopen-responsibilities.jpg";
import imgBooksOpenTech from "../../../../public/images/projects/booksopen-tech.jpg";
import imgBooksOpenWhat from "../../../../public/images/projects/booksopen-what.svg";
import imgBubblefish from "../../../../public/images/projects/bubblefish-image.jpg";
import imgBubblefishTech from "../../../../public/images/projects/bubblefish-tech.jpg";
import imgBubblefishWho from "../../../../public/images/projects/bubblefish-who.jpg";
import imgBubblefishWhy from "../../../../public/images/projects/bubblefish-why.jpg";
import imgKongHow from "../../../../public/images/projects/kong-how.png";
import imgKong from "../../../../public/images/projects/kong-image.jpg";
import imgKongTech from "../../../../public/images/projects/kong-tech.jpg";
import imgKongWhat from "../../../../public/images/projects/kong-what.jpg";
import imgKongWhy from "../../../../public/images/projects/kong-why.jpg";

export const projects = [
	{
		id: "kong",
		project_name: "Kong",
		image: imgKong,
		intro_text:
			"Get ready to fall in love with nature! Kong is a gamified plant identification app powered by OpenAI and StabilityAI which aims to foster a love for nature in a fun and artistic way.",
		url: "https://kong-app.netlify.app/",
		github_frontend: "https://github.com/juliakimseohyeon/kong-app",
		github_backend: "https://github.com/juliakimseohyeon/kong-app-api",
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
					"<ul><li>React</li><li>Express</li><li>MySQL</li><li>OpenAI API</li><li>StabilityAI API</li></ul>",
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
		id: "bubblefish",
		project_name: "Bubblefish UX",
		image: imgBubblefish,
		intro_text:
			"'Dive in' to the art of user-centric design with Bubblefish UX! Their revamped website showcases their commitment to creating accessible, modern, and visually engaging user experiences.",
		url: "https://www.bubblefishux.design/",
		tags: ["Front End", "Tailwind", "Accessibility", "UI Design", "Animation"],
		content: [
			{
				title: "Who is Bubblefish UX Design?",
				description:
					"<p>Bubblefish UX Design is a Brighton-based UX consultancy. They have provided holistic UX design services to major UK companies such as 'Chambers and Partners', 'HMRC', 'Public Health Wales', and 'Tristar Worldwide'.</p>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover"
							src={imgBubblefishWho}
							alt="Bubblefish UX Design"
							fill
						/>
					</div>
				),
			},
			{
				title: "Why was the new website necessary?",
				description:
					"<p>Because their focus is on creating designs that are accessible and easy to use for everyone, Bubblefish UX needed a website that would also embody those values. They also wanted to move away from their old website design to something that was more modern and polished.</p>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover"
							src={imgBubblefishWhy}
							alt="Bubblefish UX Design"
							fill
						/>
					</div>
				),
			},
			{
				title: "Tech Stack",
				description: "<ul><li>React</li><li>Tailwind</li></ul>",
				content: (
					<div className="flex h-full w-full items-center justify-center">
						<Image
							className="object-cover"
							src={imgBubblefishTech}
							alt="Bubblefish UX Design"
							fill
						/>
					</div>
				),
			},
			{
				title: "Next Steps",
				description:
					"<ul><li>Implement additional features such as a blog or news section to keep the content fresh and engaging.</li><li>Expand the website to include case studies and client testimonials to showcase successful projects.</li><li>Regularly update the design and content to keep up with the latest trends and user expectations.</li></ul>",
			},
		],
	},
];
