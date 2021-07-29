import React from "react";
import Link from "next/link";

import styles from "./NavLinks.module.scss";

const NavLinks = (props) => {
	return (
		<ul
			className={`${styles.navlinks} ${
				props.vertical
					? styles.vertical
					: props.horizontal
					? styles.horizontal
					: styles.horizontal
			} ${props.className ?? ""}`}
		>
			{props.children}
		</ul>
	);
};

export const NavLink: React.FunctionComponent<{ href: string; label: string }> = (props) => {
	const { href, label, ...otherProps } = props;
	return (
		<li {...otherProps}>
			<Link href={href}>
				<a>{label}</a>
			</Link>
		</li>
	);
};

export default NavLinks;
