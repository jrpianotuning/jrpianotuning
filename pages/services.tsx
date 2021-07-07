import Page from "../components/Page";
import styles from "../styles/Services.module.scss";
import LazyCoverImage from "../components/LazyCover";
import {
	TextContent,
	TextContentContainer,
	ServiceContent,
} from "../components/TextContent";
import Form from "../components/Form";

export default function Services() {
	return (
		<Page title="JRPianoTuning - Our Services">
			<section>
				<LazyCoverImage src="./img/piano1.jpg" />
			</section>
			<section>
				<TextContentContainer className={styles.textContent__container}>
					<TextContent title="The Basics">
						<div className={styles.services__container}>
							<ServiceContent title="Piano Tuning">
								Pianos have incredible musical potential - when
								they are in tune! Changes in temperature and
								humidity, moving house, and frequent playing
								cause pianos to fall out of tune, making them
								less enjoyable to play. If a piano goes too long
								without a tuning, it may also require a pitch
								adjustment before it can hold a tune. Having
								your piano tuned and serviced once or twice a
								year will extend the life of your piano and help
								your piano sound just right all year round!
							</ServiceContent>
							<ServiceContent title="Title">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</ServiceContent>
							<ServiceContent title="Title">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.
							</ServiceContent>
						</div>
					</TextContent>
				</TextContentContainer>
			</section>
		</Page>
	);
}
