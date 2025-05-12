import React from "react";
// import TypewriterComponent from "typewriter-effect";
import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {
	return (
		// <TypewriterComponent />
		<div className="text-left">
			<p className="m-0">const julia =`&lbrace;`</p>
			<p className="pl-4 m-0">
				skills: ['HTML', 'CSS', 'Sass', 'React', 'JavaScript', 'Express', 'and
				more'],
			</p>
			<p className="pl-4 m-0">hardWorker: true,</p>
			<p className="pl-4 m-0">isCreative: true,</p>
			<div className="pl-4">
				{/* <Typewriter
								options={{
									loop: true,
									autoStart: true,
									strings: [
										'likes: ["😻", "🌿"]',
										'hobbies: ["🥾", "🏕️"]'
									],
									delay: 75,
									deleteSpeed: 50,
								}}
							/> */}
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString("Hello World!")
							.callFunction(() => {
								console.log("String typed out!");
							})
							.pauseFor(2500)
							.deleteAll()
							.callFunction(() => {
								console.log("All strings were deleted");
							})
							.start();
					}}
				/>
			</div>
			<p className="m-0">`&rbrace;`</p>
		</div>
	);
}
