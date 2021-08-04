import Image from "next/image";
import Page from "../components/Page/Page";
import styles from "../styles/Services.module.scss";
import ParallaxBackground from "../components/ParallaxBackground";
import Card from "../components/Card";
import BookButton from "../components/BookButton";
import Hero from "../components/UI/Hero";

export default function Services() {
	return (
		<Page title="JRPianoTuning - Our Services">
			<section>
				<Hero image="/img/services_page.jpg" height="30vh" darken>
					<div className={styles.hero_container}>
						<h1 className={styles.hero_title}>Our Services</h1>
					</div>
				</Hero>
			</section>

			{/* <section className={`${styles.section}`}>
				<BookButton />
			</section> */}

			<section>
				<div>
					<h2>
						Pitch Adjustment <span>$50</span>
					</h2>
				</div>
				<div>
					<h2>
						Cleaning <span>$60</span>
					</h2>
				</div>
				<div>
					<h2>
						Repairs & Regulation <span>$120/hr</span>
					</h2>
				</div>
				{/* <Card title="Tuning">
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
				</Card> */}
			</section>

			<section>
				<BookButton />
			</section>
		</Page>
	);
}
