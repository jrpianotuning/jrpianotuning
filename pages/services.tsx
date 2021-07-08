import Page from "../components/Page";
import styles from "../styles/Services.module.scss";
import ParallaxBackground from "../components/ParallaxBackground";
import {
	TextContent,
	TextContentContainer,
	ServiceContent,
} from "../components/TextContent";
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
				<Card title="Piano Tuning">
					Pianos have incredible musical potential - when they are in
					tune! Changes in temperature and humidity, moving house, and
					frequent playing cause pianos to fall out of tune, making
					them less enjoyable to play. If a piano goes too long
					without a tuning, it may also require a pitch adjustment
					before it can hold a tune. Having your piano tuned and
					serviced once or twice a year will extend the life of your
					piano and help your piano sound just right all year round!
				</Card>
				<Card title="Piano Tuning">
					Pianos have incredible musical potential - when they are in
					tune! Changes in temperature and humidity, moving house, and
					frequent playing cause pianos to fall out of tune, making
					them less enjoyable to play. If a piano goes too long
					without a tuning, it may also require a pitch adjustment
					before it can hold a tune. Having your piano tuned and
					serviced once or twice a year will extend the life of your
					piano and help your piano sound just right all year round!
				</Card>
				<Card title="Piano Tuning">
					Pianos have incredible musical potential - when they are in
					tune! Changes in temperature and humidity, moving house, and
					frequent playing cause pianos to fall out of tune, making
					them less enjoyable to play. If a piano goes too long
					without a tuning, it may also require a pitch adjustment
					before it can hold a tune. Having your piano tuned and
					serviced once or twice a year will extend the life of your
					piano and help your piano sound just right all year round!
				</Card>
			</section>

			<section className={`${styles.section}`}>
				<BookButton />
			</section>
		</Page>
	);
}
