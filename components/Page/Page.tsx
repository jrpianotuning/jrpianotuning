import React from "react";
import Head from "next/head";

import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NavLinks, { NavLink } from "./NavBar/NavLinks/NavLinks";

import styles from "./Page.module.scss";

export default function Page(props: React.PropsWithChildren<{ title?: string }>) {
	return (
		<>
			<Head>
				<title>{props.title ?? "RATIU5 - Portfolio"}</title>
				<link rel="icon" href="/icons/favicon.ico" />
			</Head>

			<Header className={styles.header}>
				<NavBar />
			</Header>

			<main className={styles.main}>{props.children}</main>

			<Footer>
				<div className={styles.footer_content}>
					<h4>Contact</h4>
					<div className={styles.info_box}>
						<p>Monday&nbsp;-&nbsp;Friday: 9&nbsp;AM&nbsp;-&nbsp;5&nbsp;PM</p>
						<p>
							Phone: <a href="tel:+1-928-229-1666">(928)&nbsp;229-1666</a>
						</p>
						<p>
							Email:{" "}
							<a href="mailto:jared@jrpianotuning.com">jared@jrpianotuning.com</a>
						</p>
					</div>
					<h4>Quick Links</h4>
					<NavLinks className={styles.navlinks} vertical>
						<NavLink href="/services" label="Services" />
						<NavLink href="/contact" label="Contact" />
						<NavLink href="/about" label="About" />
					</NavLinks>
				</div>
			</Footer>
		</>
	);
}
