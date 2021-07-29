import styles from "./Copyright.module.scss";

const Copyright = props => {
	return (
		<div className={`${styles.copyright} ${props.className ?? ""}`}>
			<span>2021 &copy; Copyright. All Rights Reserved.</span>
			<span>
				Designed by <a href="https://RATIU5.DEV/">RATIU5DEV</a>
			</span>
		</div>
	);
};

export default Copyright;
