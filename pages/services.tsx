import Image from "next/image";
import Page from "../components/Page/Page";
import styles from "../styles/Services.module.scss";
import ParallaxBackground from "../components/ParallaxBackground";
import Card from "../components/Card";
import BookButton from "../components/BookButton";
import Hero from "../components/UI/Hero";
import ServiceBox from "../components/Services/ServiceBox";

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
				<ServiceBox
					image="/img/tuning.jpg"
					title="Pitch Adjustment"
					price="$50"
					description="Make your piano sound new again!"
				>
					<p>
						Pianos have incredible musical potential - when they are in tune! Changes in
						temperature, moving house, and frequent playing cause pianos to fall out of
						tune. If a piano goes too long without a tuning, it may also require a pitch
						adjustment before it will stay in tune. Having your piano tuned once or
						twice a year will extend the life of your piano and help your piano sound
						just right!
					</p>
				</ServiceBox>
				<ServiceBox
					image="/img/cleaning.jpg"
					title="Cleaning"
					price="$60"
					description="Make your piano sound new again!"
				>
					<p>
						Pianos are long-term investments and they can last for decades -
						that&rsquo;s a long time to gather dust! Over its lifetime, a piano collects
						dust, insect remains, and perhaps even mice droppings. Regular cleanings
						will help maintain your piano&rsquo;s sanitation levels and prevent pests
						that might damage piano felts and parts, so it feels just right to play for
						years to come.
					</p>
				</ServiceBox>
				<ServiceBox
					image="/img/repairs.jpg"
					title="Repairs & Regulation"
					price="$120/hr"
					description="Make your piano sound new again!"
				>
					<p>
						Pianos have incredible musical potential - when they are in tune! Changes in
						temperature, moving house, and frequent playing cause pianos to fall out of
						tune. If a piano goes too long without a tuning, it may also require a pitch
						adjustment before it will stay in tune. Having your piano tuned once or
						twice a year will extend the life of your piano and help your piano sound
						just right!
					</p>
				</ServiceBox>
				{/* <div className={styles.service_box}>
					<div className={styles.service_box_content}>
						<h2>
							Cleaning <span>$60</span>
						</h2>
						<p>
							Pianos are long-term investments and they can last for decades -
							that&rsquo;s a long time to gather dust! Over its lifetime, a piano
							collects dust, insect remains, and perhaps even mice droppings. Regular
							cleanings will help maintain your piano&rsquo;s sanitation levels and
							prevent pests that might damage piano felts and parts, so it feels just
							right to play for years to come.
						</p>
					</div>
					<Image src="img/cleaning.jpg" alt="A dirty piano" width={300} height={300} />
				</div>
				<div className={styles.service_box}>
					<div className={styles.service_box_content}>
						<h2>
							Repairs & Regulation <span>$120/hr</span>
						</h2>
						<p>
							With time and use, piano parts may wear out, break, or fall out of
							alignment. Repairing broken and worn parts and/or regulating a piano so
							its parts are in alignment makes it more enjoyable to play. At every
							tuning appointment, I diagnose the piano for needed repairs and
							regulations that will help your piano fulfill its potential, so you can
							gather your family around a piano that plays just right!
						</p>
					</div>
					<Image src="img/repairs.jpg" alt="A broken piano" width={300} height={300} />
				</div> */}
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
