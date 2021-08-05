import { useState } from "react";
import BookButton from "../BookButton";
import Modal from "../UI/Modal";
import styles from "./ServiceBox.module.scss";

const ServiceBox: React.FunctionComponent<{
	image: string;
	title: string;
	price?: string;
	description?: string;
}> = (props) => {
	const [showModal, setShowModal] = useState(false);

	const onClickHandler = () => {
		setShowModal(true);
	};

	const hideModalHandler = () => {
		setShowModal(false);
	};

	return (
		<div className={`container ${styles.container}`}>
			<Modal title={props.title} show={showModal} onClick={hideModalHandler}>
				{props.children}
			</Modal>
			{props.price && <h2 className={`${styles.price}`}>{props.price}</h2>}
			<h2 className={styles.title}>
				<span className={styles.title_main}>{props.title}</span>
				<br />
				{props.description && <span className={styles.title_sub}>{props.description}</span>}
			</h2>
			<footer className={styles.footer}>
				<button className={styles.button_checkout} onClick={onClickHandler}>
					View Details
				</button>
				<a
					href="https://gazelleapp.io/scheduling/Y9t3bBh9Tzbj6KTpVtWqhXXN"
					className={styles.button_book}
				>
					Book Appointment!
				</a>
			</footer>
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
