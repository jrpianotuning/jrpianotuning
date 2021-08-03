import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./NavLinks.module.scss";

const NavLinks: React.FunctionComponent<{
	vertical?: boolean;
	horizontal?: boolean;
	[x: string]: any;
}> = (props) => {
	const { horizontal, vertical, className, ...otherProps } = props;

	return (
		<ul
			{...otherProps}
			className={`${styles.navlinks} ${
				vertical ? styles.vertical : horizontal ? styles.horizontal : styles.horizontal
			} ${className ?? ""}`}
		>
			{props.children}
		</ul>
	);
};

export const NavLink: React.FunctionComponent<{
	href: string;
	label: string;
	className?: string;
	activeClassName?: string;
	[x: string]: any;
}> = (props) => {
	const { href, label, className, activeClassName, ...otherProps } = props;
	const router = useRouter();

	const isActiveClass = (url: string): string => {
		if (router.pathname === url) return activeClassName || "";
		return "";
	};

	return (
		<li {...otherProps} className={`${className || ""} ${isActiveClass(href)}`}>
			<Link href={href}>
				<a>{label}</a>
			</Link>
		</li>
	);
};

export default NavLinks;
