/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			perspective: {
				near: "1000px",
			},
			transformStyle: {
				"3d": "preserve-3d",
			},
			translate: {
				z: {
					0: "0",
					125: "125px",
					250: "250px",
					400: "400px",
				},
			},
		},
	},
	plugins: [],
};
