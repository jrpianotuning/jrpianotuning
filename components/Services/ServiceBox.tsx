import styles from "./ServiceBox.module.scss";

const ServiceBox: React.FunctionComponent<{
	image: string;
	title: string;
	price?: string;
	description?: string;
}> = (props) => {
	return (
		<div className={`container ${styles.container}`}>
			{props.price && <h2 className={`${styles.price}`}>{props.price}</h2>}
			<h2 className={styles.title}>
				<span className={styles.title_main}>{props.title}</span>
				<br />
				{props.description && <span className={styles.title_sub}>{props.description}</span>}
			</h2>
			<style jsx>{`
				.container {
					background-color: none;
					background: url("${props.image}") no-repeat center center;
					background-size: cover;
				}
			`}</style>
		</div>
	);
};

export default ServiceBox;
