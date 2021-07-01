import React from "react";
import styles from "../styles/Form.module.scss";
import BookButton from "./BookButton";

export default function Form() {
	return (
		<form className={styles.form}>
			<FormElement type="text" required>
				Name
			</FormElement>
			<FormElement type="phone">Phone Number</FormElement>
			<FormElement type="email" required>
				Email
			</FormElement>
			<FormElement type="text" required>
				Street Address
			</FormElement>
			<FormElement type="text">Street Address Line 2</FormElement>
			<FormElement type="text" required>
				City
			</FormElement>
			<FormElement type="dropdown" options={["UT", "AZ"]} required>
				State
			</FormElement>
			<FormElement type="number" required>
				Postal/Zip Code
			</FormElement>
			<FormElement type="textarea" required>
				How can we help?
			</FormElement>
			<div className={styles.button__container}>
				<BookButton type="submit" name="Send!" />
			</div>
		</form>
	);
}

export function FormElement(
	props: React.PropsWithChildren<{
		type?: "text" | "textarea" | "number" | "email" | "dropdown" | "phone";
		name?: string;
		required?: boolean;
		disabled?: boolean;
		selected?: string;
		options?: string[];
		children?: string;
	}>,
) {
	const name =
		(props.children ?? props.name ?? "undefined") +
		(props.required ? " *" : "");
	const [value, setValue] = React.useState("");
	const hasValue = (): boolean => value && value !== "";

	const handleChange = (e) => {
		const val = e.target.value;
		setValue(val);
	};

	const renderInput = function () {
		if (props.type === "dropdown") {
			return (
				<select onChange={handleChange}>
					<option></option>
					{props.options?.map((e: string, i: number) => (
						<option key={i}>{e}</option>
					))}
				</select>
			);
		}

		if (props.type === "textarea")
			return (
				<textarea
					required={props.required}
					disabled={props.disabled}
					onChange={handleChange}
					value={value}
				></textarea>
			);

		return (
			<input
				type={props.type === "phone" ? "number" : props.type}
				required={props.required}
				disabled={props.disabled}
				onChange={handleChange}
				value={value}
			/>
		);
	};

	return (
		<label>
			{renderInput()}
			<span
				className={
					(props.type === "dropdown"
						? styles.label__text_dropdown
						: styles.label__text) +
					(hasValue() ? " " + styles.filled : "")
				}
			>
				{name}
			</span>
		</label>
	);
}
