/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
	darkMode: "class",
	content: [
		"./app/**/*.tsx",
		"./src/**/*.tsx",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/rubricui/dist/**/*.{js,jsx,ts,tsx}"
	],
	presets: [require("./rubric.preset.js")],
};

export default tailwindConfig;
