import styles from "../styles/Footer.module.scss";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className={styles.footer__container}>
			<div className={styles.footer__content__container}>
				<div className={styles.footer__links}>
					<span className={styles.footer__link__container}>
						<Link href="/" as={process.env.BACKEND_URL + "/"}>
							<a>Home</a>
						</Link>
					</span>
					<span className={styles.footer__link__container}>
						<Link
							href="/services"
							as={process.env.BACKEND_URL + "/services"}
						>
							<a>Services</a>
						</Link>
					</span>
					<span className={styles.footer__link__container}>
						<Link
							href="/about"
							as={process.env.BACKEND_URL + "/about"}
						>
							<a>About</a>
						</Link>
					</span>
					<span className={styles.footer__link__container}>
						<Link
							href="/contact"
							as={process.env.BACKEND_URL + "/contact"}
						>
							<a>Contact</a>
						</Link>
					</span>
				</div>
			</div>
			<p className={styles.footer__copy}>
				2021 &copy; Copyright. All Rights Reserved.
			</p>
		</footer>
	);
}
