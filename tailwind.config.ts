/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			primary: "Orbitron",
			secondary: "Rajdhani",
			tertiary: "Aldrich",
		},
		container: {
			padding: {
				DEFAULT: "15px",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		extend: {
			colors: {
				primary: "#0a0a0a",
				accent: "#B809C3",
            logo: "linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #3bace2 100%,  #406aff 117.04%)"
			},
			backgroundImage: {
				site: "url('./assets/site-bg.jpg')",
				about: "url('./assets/about.png')",
				services: "url('./assets/services.png')",
			},
		},
	},
	plugins: [],
};
