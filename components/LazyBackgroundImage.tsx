import React from "react";

export default function LazyBackgroundImage(props: {
	src: string;
	[x: string]: any;
}) {
	const [sourceLoaded, setSourceLoaded] = React.useState(null);

	React.useEffect(() => {
		const img = new Image();
		img.src = props.src;
		img.onload = () => setSourceLoaded(props.src);
	}, [props.src]);

	return (
		<div
			className={
				"lazyBackgroundImage__container" +
				(props.className ? " " + props.className : "")
			}
		>
			{props.children}
			<style jsx>{`
				.lazyBackgroundImage__container {
					background-image: url("${sourceLoaded}");
				}
			`}</style>
		</div>
	);
}
