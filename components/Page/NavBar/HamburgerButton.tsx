import { useState, PropsWithChildren } from "react";

import styles from "./HamburgerButton.module.scss";

export default function HamburgerButton(
	props: PropsWithChildren<{ onChange: (e: string) => void; [x: string]: any }>,
) {
	const handleChange = (event) => {
		props.onChange(event.target.checked);
	};

	return (
		<div className={styles.button__container}>
			<input
				id="navBarToggleID"
				type="checkbox"
				onChange={handleChange}
				className={styles.navBar__toggle__checkbox}
			/>
			<label htmlFor="navBarToggleID" className={styles.navBar__toggle__label}>
				<span className={styles.hamburgerMenu__container}>
					<span></span>
					<span></span>
					<span></span>
				</span>
			</label>
		</div>
	);
}
