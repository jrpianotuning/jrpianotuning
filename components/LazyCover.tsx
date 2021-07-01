import React from "react";
import styles from "../styles/LazyCover.module.scss";

export default function LazyCoverImage(
	props: React.PropsWithChildren<{
		src: string;
		className?: string;
		[other: string]: any;
	}>,
) {
	const [sourceLoaded, setSourceLoaded] = React.useState(null);

	React.useEffect(() => {
		const img = new Image();
		img.src = props.src;
		img.onload = () => setSourceLoaded(props.src);
	}, [props.src]);

	return (
		<div className={styles.lazyCover__container}>
			<div
				{...props.other}
				className={
					styles.image__container +
					(!sourceLoaded ? styles.preload : " image__background") +
					(props.className ? " " + props.className : "")
				}
			>
				{props.children}
				<style jsx>{`
					.image__background {
						filter: brightness(0.75);
						background-image: url("${sourceLoaded}");
						background-attachment: fixed;
						background-position: center;
						background-repeat: no-repeat;
						background-size: cover;
					}
				`}</style>
			</div>
		</div>
	);
}
