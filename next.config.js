const path = require("path");
module.exports = {
	distDir: "build",
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};
