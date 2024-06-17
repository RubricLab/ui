const rubricConfig = {
	content: ["./node_modules/rubricui/src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"brand-primary": {
					DEFAULT: "#FCFCFC",
				},
				"brand-contrast": {
					DEFAULT: "#050505",
				},
			},
			transitionDuration: {
				"brand-duration": "300ms",
			},
		},
	},
	plugins: [],
};

export default rubricConfig;
