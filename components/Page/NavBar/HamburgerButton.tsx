import styles from "./HamburgerButton.module.scss";

const HamburgerButton: React.FunctionComponent<{
	onChange: (e: boolean) => void;
	color?: string;
	[x: string]: any;
}> = (props) => {
	const { className, children, color, onChange, ...otherProps } = props;

	const handleChange = (event) => {
		onChange(event.target.checked);
	};

	return (
		<>
			<input
				onChange={handleChange}
				className={styles.input}
				type="checkbox"
				id="hamburger_checkbox"
				style={{ display: "none" }}
			/>
			<label
				{...otherProps}
				htmlFor="hamburger_checkbox"
				className={`${styles.label} ${className || ""}`}
			>
				<div className={styles["hamburger_checkbox--container"]}>
					<span style={{ background: color || "black" }}></span>
					<span style={{ background: color || "black" }}></span>
					<span style={{ background: color || "black" }}></span>
				</div>
			</label>
		</>
	);
};
export default HamburgerButton;
