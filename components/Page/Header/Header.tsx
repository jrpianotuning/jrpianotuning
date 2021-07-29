import { PropsWithChildren } from "react";
import styles from "./Header.module.scss";

export default function Header(props: PropsWithChildren<{ [x: string]: any }>) {
	return (
		<header {...props} className={`${props.className ?? ""} ${styles.header__container}`}>
			{props.children}
		</header>
	);
}
