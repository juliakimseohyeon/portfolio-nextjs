"use client";

import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {
	return (
		<div className="font-emoji">
			<div className="inline-block">
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString("likes: 😻")
							.pauseFor(1000)
							.deleteAll()
							.typeString('hobbies: ["🥾", "🏕️"]')
							.pauseFor(1000)
							.deleteAll()
							.start();
					}}
					options={{
						loop: true,
						delay: 75,
						deleteSpeed: 50,
						wrapperClassName: "font-emoji font-thin inline-block",
					}}
				/>
			</div>
		</div>
	);
}
