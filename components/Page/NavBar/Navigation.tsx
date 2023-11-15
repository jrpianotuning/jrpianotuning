import React, { ReactElement, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import HamburgerButton from "./HamburgerButton";

import styles from "./Navigation.module.scss";

const Navigation: React.FunctionComponent<{
	className?: string;
	isDynamic?: boolean;
	barClassName?: string;
	hamburgerColor?: string;
	hamburgerPosition?: "left" | "right";
	barContent?: ReactElement;
	dynamicMenuClassName?: string;
}> = (props) => {
	const {
		children,
		className,
		isDynamic,
		barContent,
		barClassName,
		hamburgerColor,
		hamburgerPosition,
		dynamicMenuClassName,
		...otherProps
	} = props;
	const transitionClasses = {
		enter: styles[`navMenu-enter`],
		enterActive: styles[`navMenu-enter-active`],
		exit: styles[`navMenu-exit`],
		exitActive: styles[`navMenu-exit-active`],
	};

	const [isShowingNavMenu, setIsShowingNavMenu] = useState(false);

	const handleCheckboxChange = (isChecked) => {
		setIsShowingNavMenu(isChecked);
	};

	const renderNavBar = () => {
		if (!hamburgerPosition || hamburgerPosition === "left")
			return (
				<>
					<HamburgerButton
						color={hamburgerColor}
						onChange={handleCheckboxChange}
						className={styles.hamburgerMenuButton}
					/>
					{barContent}
				</>
			);

		if (hamburgerPosition === "right")
			return (
				<>
					{barContent}
					<HamburgerButton
						color={hamburgerColor}
						onChange={handleCheckboxChange}
						className={styles.hamburgerMenuButton}
					/>
				</>
			);
	};

	const renderDynamicNavMenu = () => {
		return (
			<>
				<div className={`${styles.hamburgerMenuBar} ${barClassName || ""}`}>
					{renderNavBar()}
				</div>
				{barContent}
				<CSSTransition
					in={isShowingNavMenu}
					timeout={200}
					classNames={transitionClasses}
					mountOnEnter
					unmountOnExit
				>
					<nav
						{...otherProps}
						className={`${styles["navMenu--dynamic"]} ${dynamicMenuClassName || className || ""
							}`}
					>
						{children}
					</nav>
				</CSSTransition>
			</>
		);
	};

	const renderNavMenu = () => {
		return (
			<nav {...otherProps} className={`${styles.navMenu} ${className || ""}`}>
				{children}
			</nav>
		);
	};

	return (
		<>
			{isDynamic && renderDynamicNavMenu()}
			{!isDynamic && renderNavMenu()}
		</>
	);
};

export default Navigation;
