import Page from "../components/Page";
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
					<h4>Hours</h4>
					<p>Monday - Friday: 9 AM - 7 PM</p>
					<h4>Phone</h4>
					<p>(801) 555-1234</p>
					<h4>Email</h4>
					<p>jared@jrpianotuning.com</p>
				</div>
			</section>
		</Page>
	);
}
