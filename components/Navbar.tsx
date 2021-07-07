import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
	const router = useRouter();

	const isCurrentPage = (pageUrl: string): boolean =>
		router.route === pageUrl;

	const css_linkSelected = (pageUrl: string): string =>
		(isCurrentPage(pageUrl) ? styles.selectedPage + " " : "") +
		styles.navItem__link;

	const renderLink = (text: string, url: string) => {
		if (isCurrentPage(url))
			return <a className={css_linkSelected(url)}>{text}</a>;
		else
			return (
				<Link href={url}>
					<a className={css_linkSelected(url)}>{text}</a>
				</Link>
			);
	};

	return (
		<>
			<input
				id="menuCheckboxId"
				className={styles.navBar__checkbox}
				type="checkbox"
			/>
			<div className={styles.navBar__shadow}></div>
			<div className={styles.navBar__container}>
				<label
					htmlFor="menuCheckboxId"
					className={styles.navBar__button}
				>
					<span className={styles.navBar__bar__container}>
						<span className={styles.navBar__bar}></span>
						<span className={styles.navBar__bar}></span>
						<span className={styles.navBar__bar}></span>
					</span>
				</label>
			</div>

			<div className={styles.navMenu__container}>
				<ul className={styles.navMenu__items}>
					<li className={styles.navItem__container}>
						{renderLink("Home", "/")}
					</li>
					<li className={styles.navItem__container}>
						{renderLink("Services", "/services")}
					</li>
					<li className={styles.navItem__container}>
						{renderLink("Contact", "/contact")}
					</li>
					<li className={styles.navItem__container}>
						{renderLink("About", "/about")}
					</li>
				</ul>
			</div>
		</>
	);
}
