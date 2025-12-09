import { v4 as uuidv4 } from "uuid";
import photoGary from "../../../../public/images/testimonials/gary.jpg";
import photoGrace from "../../../../public/images/testimonials/grace.jpg";
import photoGuillermo from "../../../../public/images/testimonials/guillermo.jpg";
import photoJacob from "../../../../public/images/testimonials/jacob.jpg";
import photoJames from "../../../../public/images/testimonials/james.jpg";
import photoSara from "../../../../public/images/testimonials/sara.jpg";
import photoStephen from "../../../../public/images/testimonials/stephen.jpg";
import photoVictor from "../../../../public/images/testimonials/victor.jpg";

export const testimonials = [
	{
		id: uuidv4(),
		photo: photoGary,
		name: "Gary Chen",
		relationship: "Product Manager @BooksOpen",
		text: "100% a great addition to any team. Amazing learner, pure demonstration of range, and incredible commitment to customer and user experience across disciplines!",
	},
	{
		id: uuidv4(),
		photo: photoVictor,
		name: "Victor Nogueira",
		relationship: "Senior Software Developer @BooksOpen",
		text: "When I first started as a Senior Developer at BooksOpen, she was a huge help getting me up to speed with the system. I was honestly blown away by how fast she picked things up – she's a super quick learner and always game to try out new ideas. Julia's always professional and really proactive. Even though she was a junior dev on our small startup team, she was a massive help. She wasn't afraid to jump into big discussions and planning sessions for system changes, which was awesome to see. What really stood out to me was how much she grew in owning her work. She became great at taking features from start to finish with just a little guidance. Julia's a fantastic addition to any team, and I'd happily recommend her!",
	},
	{
		id: uuidv4(),
		photo: photoGrace,
		name: "Grace Noh",
		relationship: "Product Designer @Microsoft",
		text: "Julia is very intelligent, creative and friendly. She's dependable, self motivated and great with project management. She is also a fantastic team player and has excellent communication skills. She delivers high quality, detail oriented work and her skills are top-notch. I had a great experience at working with her on multiple projects.",
	},
	{
		id: uuidv4(),
		photo: photoJames,
		name: "James Nicolosi-Cao",
		relationship: "Designer @BooksOpen",
		text: "Julia is a very hard-working, personable, and skilled individual to work with. In my time at BooksOpen with her, I saw Julia consistently and efficiently deliver results and handle issues as they came up, working on short deadlines and pivoting on multiple tasks at once. Julia also made me feel at home at my first corporate work experience, providing me with valuable feedback and criticism of my work, advice, and a source of information and support. Julia would be an asset to any team. ",
	},
	{
		id: uuidv4(),
		photo: photoGuillermo,
		name: "Guillermo Moreno",
		relationship: "Lead UX Designer @Bubblefish UX",
		text: "Julia has a solid knowledge of software programs and a keen eye for design. She is eager to see projects through from start to finish, displaying initiative, creativity, and adept problem-solving skills. Additionally, she is curious and committed to learning, quickly gaining proficiency when exposed to unfamiliar technology and concepts.",
	},
	{
		id: uuidv4(),
		photo: photoSara,
		name: "Sara (I-Chun) Chang",
		relationship: "Colleague @BrainStation",
		text: "Julia impressed me with her proactive attitude throughout our web development bootcamp. I consistently heard great things about Julia from other classmates, who praised her collaborative spirit and technical ability. She is an excellent developer with a clear approach to tackling complex functionalities. She effectively guided our team through daily standups and ensured smooth collaboration.",
	},
	{
		id: uuidv4(),
		photo: photoStephen,
		name: "Stephen Werronen",
		relationship: "Developer @Command+K",
		text: "Julia guided the team to thoroughly analyze our business problem and create the best solution for the user. She then designed an amazing user interface while also writing much of the code to implement it, and debugging code written by others to resolve a serious issue and enable the team to meet its deadline. I recommend her as highly as possible, and I hope we will work together again soon!",
	},
	{
		id: uuidv4(),
		photo: photoJacob,
		name: "Jacob Kochatkov",
		relationship: "Developer @Alberni Online",
		text: "I was delighted to work with Julia on a group project for a Full Stack Application that manages Inventory Systems. She has taken on the leadership role, during daily scrum meetings, really well by organizing tasks for the whole team, exceptionally delivering her tasks, and displaying outstanding interpersonal skills. Her vision for the project was much needed, as it guided the team in the right direction. I look forward to working with Julia again!",
	},
];
