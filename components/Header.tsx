import styles from "../styles/Header.module.scss";
import Navbar from "./Navbar";

export default function Header() {
	return (
		<header className={styles.header__container}>
			<Navbar />
		</header>
	);
}
