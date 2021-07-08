import Page from "../components/Page";
import styles from "../styles/About.module.scss";
import ParallaxBackground from "../components/ParallaxBackground";
import { TextContent, TextContentContainer } from "../components/TextContent";

export default function About() {
	return (
		<Page title="JRPianoTuning - About Us">
			<section className={`${styles.section}`}>
				<ParallaxBackground src="./img/piano1.jpg">
					<div className={`${styles.section__heading}`}>
						<h1>About Us</h1>
					</div>
				</ParallaxBackground>
			</section>
			<section className={`${styles.section}`}>
				<div className={styles.statement__container}>
					<h3>Mission Statement</h3>
					<p>
						Unlock your family&apos;s musical potential by providing
						consistent, quality care for your piano so you can
						create more music and memories together.
					</p>
				</div>
				<div className={styles.story__container}>
					<h3>Our Story</h3>
					<p>
						Music is powerful. It gathers people and makes any
						occasion memorable. I believe everyone - and every
						family - can create it with the right instruments.
						<br></br>
						<br></br>
						In my childhood, my family frequently gathered around
						our piano to sing, creating some of my favorite
						memories. However, with time, the piano developed issues
						and those gatherings became less frequent. When I began
						studying piano technology in 2014, I quickly realized
						that many pianos - ours included - were playing far
						below their musical potential because they lacked the
						care they needed to perform well.
						<br></br>
						<br></br>With my training, I could provide proper care
						for my family&apos;s piano, allowing us to once again
						enjoy creating music together.
						<br></br>
						<br></br>I founded JR Piano Tuning to unlock that same
						musical potential in the homes and families of those it
						serves. When a client begins to play a freshly serviced
						piano, their face lights up with a smile, and they call
						their family in to listen, I know JR Piano Tuning has
						fulfilled its mission. Their family will have many
						musical gatherings to come - because their piano sounds
						and feels just right.
					</p>
				</div>
			</section>
		</Page>
	);
}
