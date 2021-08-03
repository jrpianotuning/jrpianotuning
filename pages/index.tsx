import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Page from "../components/Page/Page";
import BookButton from "../components/BookButton";
import ParallaxBackground from "../components/ParallaxBackground";

import Card from "../components/Card";

export default function Home() {
	return (
		<Page title="JRPianoTuning">
			<section className={`${styles.section}`}>
				<ParallaxBackground src="./img/piano1.jpg">
					<div className={`${styles.section__heading}`}>
						<h1>JR Piano Tuning</h1>
					</div>

					<div className={`${styles.section__cardContainer}`}>
						<Card title="Our Goal">
							Unlock your family&apos;s potential to create beautiful music through
							your piano.
						</Card>
						<Card title="Our Method">
							Provide consistent, thorough, timely care for your piano through tuning
							and repairs so it sounds and feels <i>just right</i>.
						</Card>
						<Card title="Our Locations">
							Near home and family, in Cache Valley, UT and White Mountains, AZ.
						</Card>
					</div>
				</ParallaxBackground>
			</section>

			<section className={`${styles.section}`}>
				<BookButton />
			</section>

			<section className={`${styles.section}`}>
				<div className={`${styles.qualifications__section}`}>
					<h4>Experience</h4>
					<ul>
						<li>Registered Piano Technician</li>
						<li>400+ Pianos Tuned</li>
						<li>100+ Hours of technical care</li>
					</ul>
				</div>
			</section>
		</Page>
	);
}
