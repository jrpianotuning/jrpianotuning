import Page from "../components/Page";
import styles from "../styles/Services.module.scss";
import ParallaxBackground from "../components/ParallaxBackground";
import Card from "../components/Card";
import BookButton from "../components/BookButton";

export default function Services() {
	return (
		<Page title="JRPianoTuning - Our Services">
			<section className={`${styles.section}`}>
				<ParallaxBackground src="./img/piano1.jpg">
					<div className={`${styles.section__heading}`}>
						<h1>Our Services</h1>
					</div>
				</ParallaxBackground>
			</section>

			<section className={`${styles.section}`}>
				<BookButton />
			</section>

			<div className={styles.guarantee__container}>
				<h3>Our Guarantee:</h3>
				<p>
					At JR Piano Tuning, we are committed to providing our clients with the best
					service we can offer. If our service does not meet your expectations, we will
					work with you to resolve your concern. If a tuning is unsatisfactory and you
					contact us by phone or email within two weeks of the tuning, we will provide a{" "}
					<b>complimentary return visit</b> to correct the concern. If a purchased repair
					or regulation fails due to misdiagnosis or a mistake on the part of the
					technician, we will either{" "}
					<b>refund your money or provide an equivalent value of prepaid labor</b> to
					solve the issue.
				</p>
			</div>

			{/* three column > 768px w */}
			{/* Images over heading */}

			<section className={`${styles.section}`}>
				<Card title="Tuning">
					Pianos have incredible musical potential - when they are in tune! Changes in
					temperature and humidity, moving house, and frequent playing cause pianos to
					fall out of tune, making them less enjoyable to play. If a piano goes too long
					without a tuning, it may also require a pitch adjustment before it can hold a
					tune. Having your piano tuned and serviced once or twice a year will extend the
					life of your piano and help your piano sound <i>just right</i> all year round!
				</Card>
				<Card title="Cleaning">
					Pianos are long-term investments and they can last for decades - that&apos;s a
					long time to gather dust! Over its lifetime, a piano collects dust, insect
					remains, and perhaps even mice droppings. Regular cleanings will help maintain
					your piano&apos;s sanitation levels and prevent pests that might damage piano
					felts and parts so it feels <i>just right</i> to play for years to come.
				</Card>
				<Card title="Repairs and Regulation">
					With time and use, piano parts may wear out, break, or fall out of alignment,
					making the piano less enjoyable or impossible to play. Repairing broken and worn
					parts and/or regulating a piano so its parts are in alignment makes it more
					pleasureable to play. At every tuning appointment, our technicians diagnose the
					piano for possible or necessary repairs and regulations that will help your
					piano fulfill its potential, as you gather your family around a piano that
					plays&nbsp;
					<i>just right</i>!
				</Card>
			</section>

			<section className={`${styles.section}`}>
				<BookButton />
			</section>
		</Page>
	);
}
