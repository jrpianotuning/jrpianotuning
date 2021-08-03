import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Page from "../components/Page/Page";
import BookButton from "../components/BookButton";
import ParallaxBackground from "../components/ParallaxBackground";

import Card from "../components/Card";
import Link from "next/link";

export default function Home() {
	return (
		<Page title="JRPianoTuning">
			<section>
				<div className={styles.background_image}>
					<div className={styles.logo_container}>
						<Image
							src="/img/logo.png"
							alt="JRPianoTuning logo"
							width={400}
							height={400}
						/>
					</div>
					<h1 className={styles.title}>
						JR<br></br>PIANO<br></br>TUNING
					</h1>
				</div>
			</section>
			<section>
				<div className={styles.card_container}>
					<Card title="Our Goal">
						<p>
							Unlock your family's potential to create beautiful music through your
							piano.
							<br />
							<br />
							<Link href="/about">Learn&nbsp;more...</Link>
						</p>
					</Card>
					<Card title="Our Method">
						<p>
							Provide consistent, thorough, timely care for your piano through tuning
							and repairs so it sounds and feels just right.
							<br />
							<br />
							<Link href="/services">Learn&nbsp;more...</Link>
						</p>
					</Card>
					<Card title="Our Locations">
						<p>
							Near home and family, in Cache Valley, UT and White Mountains, AZ.
							<br />
							<br />
							<Link href="#">View&nbsp;map...</Link>
						</p>
					</Card>
				</div>
			</section>
			<section>
				<div>
					<h3>Why Us?</h3>
				</div>
			</section>
		</Page>
	);
}
