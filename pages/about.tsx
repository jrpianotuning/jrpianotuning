import Page from "../components/Page/Page";
import styles from "../styles/About.module.scss";
import ParallaxBackground from "../components/ParallaxBackground";
import { TextContent, TextContentContainer } from "../components/TextContent";

export default function About() {
	return (
		<Page title="JRPianoTuning - About Us">
			<section className={`${styles.section}`}>
				<div className={`${styles.section__heading}`}>
					<h1>About Us</h1>
				</div>
			</section>
			<section className={`${styles.section}`}>
				<div className={styles.story__container}>
					<h3>Our Story</h3>
					<p>
						<em>
							Music is powerful. It gathers people and makes any occasion memorable. I
							believe everyone - and every family - can create it with the right
							instruments.
						</em>
						<br></br>
						<br></br>
						In my childhood, my family frequently gathered around our piano to sing,
						creating some of my favorite memories. However, with time, the piano
						developed issues and those gatherings became less frequent. When I began
						studying piano technology in 2014, I quickly realized that many pianos -
						ours included - were playing far below their musical potential because they
						lacked the care they needed to perform well. With my training, I could
						provide proper care for my family&rsquo;s piano, allowing us to once again
						enjoy creating music together.
						<br></br>
						<br></br>I founded JR Piano Tuning to unlock that same musical potential in
						the homes and families of those it serves. When a client begins to play a
						freshly serviced piano, their face lights up with a smile, and they call
						their family in to listen, I know JR Piano Tuning has fulfilled its mission.
						Their family will have many musical gatherings to come - because their piano
						sounds and feels just right.
						<br></br>
						<br></br>I was raised in a large, loving homeschool family in
						Snowflake-Taylor, AZ. Thanks to parental support, I developed passions for
						piano technology and the Arabic language. I studied both subjects at BYU
						Provo (2016-2021) and will graduate with a double major in Middle Eastern
						Studies/Arabic and Arabic Language in December 2021. My wife and I love
						creating music and memories in our home in Cache Valley, UT.
					</p>
				</div>
			</section>
		</Page>
	);
}
