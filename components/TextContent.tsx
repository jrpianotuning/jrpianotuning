import styles from "../styles/TextContent.module.scss";

export interface iTextContentProps {
	title: string;
	[x: string]: any;
}

export function TextContent(props: React.PropsWithChildren<iTextContentProps>) {
	return (
		<div {...props} className={styles.textContent__container}>
			<div className={styles.textContent__header}>
				<h3>{props.title}</h3>
			</div>
			<div className={styles.textContent__body}>{props.children}</div>
		</div>
	);
}

export function TextContentContainer(
	props: React.PropsWithChildren<{ className?: string; [x: string]: any }>,
) {
	return (
		<div
			{...props}
			className={
				styles.textContentContainer__container +
				(props.className ? " " + props.className : "")
			}
		>
			{props.children}
		</div>
	);
}

export function ServiceContent(
	props: React.PropsWithChildren<{ title?: string; [x: string]: any }>,
) {
	return (
		<div className={styles.serviceContent__container}>
			<div className={styles.serviceContent__header}>
				<h4>{props.title}</h4>
			</div>
			<div className={styles.serviceContent__body}>{props.children}</div>
		</div>
	);
}
