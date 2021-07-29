import { PropsWithChildren } from "react";
import Copyright from "./Copyright";
import styles from "./Footer.module.scss";

export default function Footer(props: PropsWithChildren<{ [x: string]: any }>) {
	return (
		<footer {...props} className={`${props.className ?? ""} ${styles.footer}`}>
			{props.children}
			<Copyright />
		</footer>
	);
}
