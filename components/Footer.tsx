import styles from "../styles/Footer.module.scss";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className={styles.footer__container}>
			<div className={styles.footer__content__container}>
				<div className={styles.footer__links}>
					<span className={styles.footer__link__container}>
						<Link href="/">
							<a>Home</a>
						</Link>
					</span>
					<span className={styles.footer__link__container}>
						<Link href="/services">
							<a>Services</a>
						</Link>
					</span>
					<span className={styles.footer__link__container}>
						<Link href="/about">
							<a>About</a>
						</Link>
					</span>
					<span className={styles.footer__link__container}>
						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</span>
				</div>
			</div>
		</footer>
	);
}
