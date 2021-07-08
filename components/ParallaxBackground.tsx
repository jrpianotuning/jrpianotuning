import React from "react";
import styles from "../styles/ParallaxBackground.module.scss";

export default function ParallaxBackground(props: {
	src: string;
	[x: string]: any;
}) {
	const [sourceLoaded, setSourceLoaded] = React.useState<string | null>(null);

	React.useEffect(() => {
		const img = new Image();
		img.src = props.src;
		img.onload = () => setSourceLoaded(props.src);
	}, [props.src]);

	return (
		<div className={`${styles.parallax__background__container}`}>
			<div
				{...props}
				className={`${props.className} parallax__background`}
			>
				<style jsx>{`
					.parallax__background {
						position: absolute;
						width: 100%;
						max-width: 100%;
						height: 100%;
						top: 0;
						background-image: url("${sourceLoaded}");
						transform: translateZ(-3px) scale(4);
						filter: opacity(0.4);
					}
				`}</style>
			</div>
			{props.children}
		</div>
	);
}
