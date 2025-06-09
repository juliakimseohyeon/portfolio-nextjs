"use client";

import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {
	return (
		<Typewriter
			onInit={(typewriter) => {
				typewriter
					.typeString('likes: ["\u{1F63B}", "\u{1F33F}"]')
					.pauseFor(1000)
					.deleteAll()
					.typeString('hobbies: ["\u{1F97E}", "\u{1F3D5}\u{FE0F}"]')
					.pauseFor(1000)
					.deleteAll()
					.start();
			}}
			options={{
				loop: true,
				delay: 75,
				deleteSpeed: 50,
				wrapperClassName: "font-extralight font-emoji",
			}}
		/>
	);
}
