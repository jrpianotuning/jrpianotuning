const path = require("path");
module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		loader: "imgix",
		path: "",
	},
};
