import React, { useEffect, useState } from "react";
import Head from "next/head";

import Navigation from "./NavBar/Navigation";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NavLinks, { NavLink } from "./NavBar/NavLinks/NavLinks";
import useWindowDimensions from "../../hooks/windowSize";

import styles from "./Page.module.scss";
import Space from "../UI/Space";

export default function Page(props: React.PropsWithChildren<{ title?: string }>) {
	const windowSize = useWindowDimensions();
	const [isDynamic, setIsDynamic] = useState(false);

	useEffect(() => {
		if (windowSize.width <= 650) setIsDynamic(true);
		else {
			setIsDynamic(false);
		}
	}, [setIsDynamic, windowSize.width]);

	return (
		<>
			<Head>
				<title>{props.title ?? "JRPianoTuning"}</title>
				<link rel="icon" href="/icons/favicon.ico" />
			</Head>

			<Header className={styles.header}>
				<Navigation
					isDynamic={isDynamic}
					className={styles.navMenu__container}
					hamburgerPosition="right"
					dynamicMenuClassName={styles["navMenu__container--dynamic"]}
					barClassName={styles["navMenu__container--bar"]}
					barContent={<div></div>}
				>
					<Space />
					<NavLinks
						className={styles.header__navLinks}
						vertical={isDynamic}
						isDynamic={isDynamic}
					>
						<NavLink
							className={styles["header__navLinks--link"]}
							activeClassName={styles["header__navLinks--link--active"]}
							href="/"
							label="Home"
						/>
						<NavLink
							className={styles["header__navLinks--link"]}
							activeClassName={styles["header__navLinks--link--active"]}
							href="/services"
							label="Services"
						/>
						<NavLink
							className={styles["header__navLinks--link"]}
							activeClassName={styles["header__navLinks--link--active"]}
							href="/contact"
							label="Contact"
						/>
						<NavLink
							className={styles["header__navLinks--link"]}
							activeClassName={styles["header__navLinks--link--active"]}
							href="/about"
							label="About"
						/>
					</NavLinks>
				</Navigation>
			</Header>

			<main className={styles.main}>{props.children}</main>

			<Footer className={styles.footer}>
				<div className={styles.footer_content}>
					<div className={styles["footer_content--box"]}>
						<h4>Quick Links</h4>
						<NavLinks className={styles.footer__navLinks} vertical>
							<NavLink href="/services" label="Services" />
							<NavLink href="/contact" label="Contact" />
							<NavLink href="/about" label="About" />
						</NavLinks>
					</div>
					<div className={styles["footer_content--box"]}>
						<h4>Contact</h4>
						<div className={styles.info_box}>
							<p>Monday&nbsp;-&nbsp;Friday: 9&nbsp;AM&nbsp;-&nbsp;5&nbsp;PM</p>
							<p>
								Phone: <a href="tel:+1-801-928-9693">(801)&nbsp;928-9693</a>
							</p>
							<p>
								Email:{" "}
								<a href="mailto:jared@jrpianotuning.com">jared@jrpianotuning.com</a>
							</p>
						</div>
					</div>
				</div>
			</Footer>
		</>
	);
}
