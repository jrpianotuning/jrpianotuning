const path = require("path");
module.exports = {
	distDir: "build/jrpianotuning",
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};
