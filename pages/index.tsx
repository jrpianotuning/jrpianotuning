import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Page from "../components/Page";
import BookButton from "../components/BookButton";
import ParallaxBackground from "../components/ParallaxBackground";

import { FaTrophy, FaMapMarkerAlt } from "react-icons/fa";
import { IoMusicalNotes } from "react-icons/io5";

import Card from "../components/Card";

export default function Home() {
	return (
		<Page title="JRPianoTuning">
			<section className={`${styles.section}`}>
				<ParallaxBackground src="./img/piano1.jpg" />

				<div className={`${styles.section__heading}`}>
					<h2>JR Piano Tuning</h2>
				</div>

				<div className={`${styles.section__cardContainer}`}>
					<Card
						title="Our Goal"
						icon={FaTrophy}
						iconColor="rgb(228, 193, 39)"
					>
						Unlock your family&apos;s potential to create better
						sounding music.
					</Card>
					<Card title="Our Method" icon={IoMusicalNotes}>
						Provide consistent, thorough, timely care for your piano
						through tuning and repairs so it sounds and feels just
						right.
					</Card>
					<Card
						title="Our Locations"
						icon={FaMapMarkerAlt}
						iconColor="rgb(189, 23, 23)"
					>
						Near our homes and families, including Cache Valley, UT,
						and White Mountains, AZ.
					</Card>

					<div className={styles.bookButton__container}>
						<BookButton />
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<div className={styles.contrast__container}>
					<h4>Qualifications</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</div>
			</section>
		</Page>
	);
}
