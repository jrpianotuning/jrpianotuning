import React from "react";
import Image from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";
import HamburgerButton from "./HamburgerButton";

import styles from "./NavBar.module.scss";

export default function NavBar() {
	const [checked, setChecked] = React.useState<boolean>(false);

	return (
		<>
			<div className={`${styles.navBar__container} ${checked ? "show" : "hide"}`}>
				<div className={`${styles.navBar__links__container}`}>
					<LogoLink />
					{/* <NavLink href="#about">About</NavLink>
					<NavLink href="#projects">Projects</NavLink>
					<NavLink href="#contact">Contact</NavLink>
					<SocialLinks /> */}
				</div>
			</div>
			<HamburgerButton onChange={v => setChecked(false)} /> {/* TODO: FIX */}
		</>
	);
}

function NavLink(props) {
	return (
		<a
			{...props}
			href={props.href}
			className={`${styles.navMenu__link} ${props.className ? props.className : ""}`}
		>
			{props.children}
		</a>
	);
}

function SocialLinks() {
	return (
		<div className={`${styles.navLinks__container}`}>
			<NavLink href="#">
				<SiGithub />
			</NavLink>
			<NavLink href="#">
				<SiLinkedin />
			</NavLink>
		</div>
	);
}

function LogoLink() {
	return (
		<NavLink href="#">
			<Image
				width="32px"
				height="32px"
				src="/icons/favicon-32x32.png"
				alt="Image of favicon"
				draggable={false}
			/>
		</NavLink>
	);
}
