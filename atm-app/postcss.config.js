import cssnano from "cssnano";
import postcssPurgecss from "@fullhuman/postcss-purgecss";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		// cssnano: {
		// 	preset: "default",
		// },
		// postcssPurgecss: {
		// 	content: ["./src/**/*.tsx", "./*.html"],
		// 	defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
		// },
	},
};
