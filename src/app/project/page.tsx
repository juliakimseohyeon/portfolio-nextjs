export default function Page() {
	return (
		<main className="py-4 max-w-full flex flex-col gap-20 md:gap-32">
			<section className="w-full flex flex-col gap-8">
				<div className="m-0">
					<h1>Hi, I'm Julia</h1>
					<h2>Scroll down for the good stuff</h2>
					{/* <IconArrowDown className="animate-bounce w-6" /> */}
				</div>
				<div className="w-full relative p-4 flex flex-col text-lg h-80 rounded-2xl md:box-border md:p-8">
					<div className="flex flex-row justify-start gap-2 max-w-full absolute top-4 left-4 md:top-8 md:left-8">
						<div className="size-4 rounded-full bg-red-300"></div>
						<div className="size-4 rounded-full bg-yellow-300"></div>
						<div className="size-4 rounded-full bg-blue-300"></div>
					</div>
					<div className="text-left">
						<p className="m-0">const julia =`&lbrace;`</p>
						<p className="pl-4 m-0">
							skills: ['HTML', 'CSS', 'Sass', 'React', 'JavaScript', 'Express',
							'and more'],
						</p>
						<p className="pl-4 m-0">hardWorker: true,</p>
						<p className="pl-4 m-0">isCreative: true,</p>
						{/* <Typewriter
              options={{ loop: true, autoStart: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<span style="padding-left: 1em">likes: ['<span className="hero__typewriter-icon" role="img" aria-label="cat-emoji">😻</span>', '<span className="hero__typewriter-icon" role="img" aria-label="leaf-emoji">🌿</span>']</span>`
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(
                    `<span style="padding-left: 1em">hobbies: ['<span className="hero__typewriter-icon" role="img" aria-label="boots-emoji">🥾</span>', '<span className="hero__typewriter-icon" role="img" aria-label="camping-emoji">🏕️</span>']</span>`
                  )
                  .pauseFor(1000)
                  .start();
              }}
            /> */}
						<p className="m-0">`&rbrace;`</p>
					</div>
				</div>
			</section>
			<section className="w-full">
				<h2>Skills</h2>
				{/* <Carousel /> */}
			</section>
			<section className="max-w-full md:w-4/5 lg:w-full">
				<h2>Projects</h2>
				<div className="w-full flex flex-col justify-between items-start text-left relative">
					{/* {projects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-stretch lg:flex-1 text-left relative bg-blue-300/20 rounded-2xl p-4 box-border gap-6 transition-[0.3s] hover:bg-blue-300/40 hover:scale-105 "
              key={project.id}
              onClick={() => setSelectedProject(project)}
            >
              <img className="w-full rounded-lg object-cover lg:flex-none lg:w-1/2" src={project.image} />
              <div className="lg:flex-1 lg:w-full lg:flex lg:flex-col lg:justify-between lg:items-start">
                <h3>{project.project_name}</h3>
                <p className="mb-6">
                  {project.intro_text}
                </p>
                <div className="flex flex-row justify-start items-start flex-wrap gap-2 pb-6">
                  {project.tags.map((tag, idx) => (
                    <p className="m-0 leading-1.5 label" key={idx}>
                      {tag}
                    </p>
                  ))}
                </div>
                <button>Read about {project.project_name}</button>
              </div>
            </Link>
          ))} */}
				</div>
			</section>
			{/* <Testimonials /> */}
		</main>
	);
}
