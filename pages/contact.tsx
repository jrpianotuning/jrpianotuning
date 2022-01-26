import Page from "../components/Page/Page";
import styles from "../styles/Contact.module.scss";
import ParallaxBackground from "../components/ParallaxBackground";

export default function Contact() {
	return (
		<Page title="JRPianoTuning - Contact Us">
			<section className={`${styles.section}`}>
				<ParallaxBackground src="./img/piano1.jpg">
					<div className={`${styles.section__heading}`}>
						<h1>Contact Us</h1>
					</div>
				</ParallaxBackground>
			</section>

			<section className={`${styles.section}`}>
				<div>
					<h2>Hours</h2>
					<p>Monday - Friday: 9 AM - 5 PM</p>
					<h2>Phone</h2>
					<p>
						<a href="tel:801-928-9693">(801) 928-9693</a>
					</p>
					<h2>Email</h2>
					<p>
						<a href="mailto:jared@jrpianotuning.com">
							jared@jrpianotuning.com
						</a>
					</p>
				</div>
			</section>
		</Page>
	);
}
