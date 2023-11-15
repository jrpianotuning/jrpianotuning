import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Page from "../components/Page/Page";
import BookButton from "../components/BookButton";

import Link from "next/link";

export default function Home() {
	return (
		<Page title="JRPianoTuning">
			<section>
				<div className={styles.cover}>
					<div className={styles.background_image}></div>
					<div className={styles.logo_container}>
						<div className="logo">Logo</div>
						{/* <Image */}
						{/* 	src="/img/logo-notext-outline.png" */}
						{/* 	alt="JRPianoTuning logo" */}
						{/* 	width={450} */}
						{/* 	height={450} */}
						{/* /> */}
					</div>
					<div className={styles.title_content_container}>
						<h1 className={styles.title}>
							JR<br></br>PIANO<br></br>TUNING
						</h1>
						<BookButton />
					</div>
				</div>
			</section>
			<section>
				<div className={styles.card_container}>
					<div className={styles.our_content}>
						<h2>Our Purpose</h2>
						<p>
							Unlock your family's potential to create beautiful music through
							your piano.
						</p>
						<Link href="/about">Learn&nbsp;more...</Link>
					</div>
					<div className={styles.our_content}>
						<h2>Our Methods</h2>
						<p>
							Provide consistent, thorough, timely care for your piano through
							tuning and repairs so it sounds and feels <i>just right</i>.{" "}
						</p>
						<Link href="/about">Learn&nbsp;more...</Link>
					</div>
					<div className={styles.our_content}>
						<h2>Our Locations</h2>
						<p>
							Near home and family, in Cache Valley, UT and <b>nearby areas</b>.{" "}
						</p>
						<Link href="/about">Learn&nbsp;more...</Link>
					</div>

					{/* <Card title="Our Goal">
						<p>
							Unlock your family's potential to create beautiful music through your
							piano.
							<br />
							<br />
							<Link href="/services">Learn&nbsp;more...</Link>
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
					</Card> */}
				</div>
			</section>
			<section>
				<div className={styles.experience_container}>
					<div className={styles["experience_container--content"]}>
						{/* <h3>Why Us?</h3> */}
						{/* <p>
							Jared Rowles began studying piano technology in 2014 with the Randy
							Potter School of Piano Technology. Upon his acceptance to BYU, he worked
							for the BYU Piano Shop from 2017-21, further developing his skills in
							tuning, repairing and regulating pianos for the School of Music. In
							March 2021, Jared passed the last of three rigorous exams to become a
							Registered Piano Technician, one of less than 2,000 technicians to do
							so. With his combined experience at the School of Music and in the homes
							of his clients, Jared has tuned over 400 pianos and has 100+ hours of
							experience with repairs, regulation, and rebuilding. He continues to
							improve his skills through regular participation in the Piano
							Technicians Guild.
						</p> */}
						<div className={styles.experience_list}>
							<div className={styles.list_container}>
								<h4>
									<b>700+</b>
								</h4>
								<h5>Pianos Tuned</h5>
								<Link href="/about">Learn more...</Link>
							</div>
							<div className={styles.list_container}>
								<h4>
									<b>150+</b>
								</h4>
								<h5>Hours of Repairs</h5>
								<Link href="/about">Learn more...</Link>
							</div>
							<div className={styles.list_container}>
								<h4>
									<b>9+</b>
								</h4>
								<h5>Years Piano Technician</h5>
								<Link href="/about">Learn more...</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
        .logo {
          background-color: none;
          background: url("/img/logo-notext-outline.png") no-repeat center
            center;
          background-size: cover;
          width: 450px;
          height: 450px;
        }
      `}</style>
		</Page>
	);
}
