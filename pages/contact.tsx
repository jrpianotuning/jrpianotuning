import Page from "../components/Page";
import styles from "../styles/Contact.module.scss";
import LazyCoverImage from "../components/LazyCover";
import { TextContent, TextContentContainer } from "../components/TextContent";

export default function Contact() {
	return (
		<Page title="JRPianoTuning - Contact Us">
			<section>
				<LazyCoverImage src="./img/piano1.jpg" />
			</section>
			<section>
				<TextContentContainer>
					<TextContent title="Contact">
						<h4>Hours</h4>
						<p>Monday - Friday: 9 AM - 7 PM</p>
						<h4>Phone</h4>
						<p>(801) 555-1234</p>
						<h4>Email</h4>
						<p>jared@jrpianotuning.com</p>
					</TextContent>
				</TextContentContainer>
			</section>
		</Page>
	);
}
