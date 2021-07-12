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
				<ParallaxBackground src="./img/piano1.jpg">
					<div className={`${styles.section__heading}`}>
						<h1>JR Piano Tuning</h1>
					</div>

					<div className={`${styles.section__cardContainer}`}>
						<Card title="Our Goal" icon={FaTrophy} iconColor="rgb(228, 193, 39)">
							Unlock your family&apos;s potential to create better sounding music.
						</Card>
						<Card title="Our Method" icon={IoMusicalNotes}>
							Provide consistent, thorough, timely care for your piano through tuning
							and repairs so it sounds and feels just right.
						</Card>
						<Card
							title="Our Locations"
							icon={FaMapMarkerAlt}
							iconColor="rgb(189, 23, 23)"
						>
							Near our homes and families, including Cache Valley, UT, and White
							Mountains, AZ.
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
					<p>
						Jared Rowles began studying piano technology in 2014 with the Randy Potter
						School of Piano Technology. Upon his acceptance to BYU, he worked for the
						BYU Piano Shop from 2017-21, further developing his skills in tuning,
						repairing and regulating pianos for the School of Music. In March 2021,
						Jared passed the last of three rigorous exams to become a Registered Piano
						Technician, one of less than 2,000 technicians to do so. With his combined
						experience at the School of Music and in the homes of his clients, Jared has
						tuned over 400 pianos and has 100+ hours of experience with repairs,
						regulation, and rebuilding. He continues to improve his skills through
						regular participation in the Piano Technicians Guild.
					</p>
				</div>
			</section>
		</Page>
	);
}
