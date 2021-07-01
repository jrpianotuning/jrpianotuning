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
					<TextContent title="Services">
						<div className={styles.services__container}>
							<ServiceContent title="A long very very long title">
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
