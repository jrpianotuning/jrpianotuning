import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import { CSSTransition } from "react-transition-group";

const Backdrop: React.FunctionComponent<{
	onClick: React.MouseEventHandler<HTMLDivElement>;
	isShowing: boolean;
}> = (props) => {
	return props.isShowing && <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay: React.FunctionComponent<{ isShowing: boolean; title?: string }> = (props) => {
	return (
		<CSSTransition
			in={props.isShowing}
			timeout={{
				enter: 200,
				exit: 200,
			}}
			classNames={{
				enter: styles.modal_open,
				enterActive: styles.modal_open_active,
				exit: styles.modal_closed,
				exitActive: styles.modal_closed_active,
			}}
			mountOnEnter
			unmountOnExit
		>
			<div className={styles.modal}>
				{props.title && (
					<header className={styles.modal_header}>
						<h2>{props.title}</h2>
					</header>
				)}
				<section className={styles.modal_content}>{props.children}</section>
			</div>
		</CSSTransition>
	);
};

const Modal: React.FunctionComponent<{
	onClick: React.MouseEventHandler<HTMLDivElement>;
	show: boolean;
	title?: string;
}> = (props) => {
	const ref = useRef();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		ref.current = document.querySelector("#modal_overlay");
		setMounted(true);
	}, []);

	return mounted ? (
		<>
			{createPortal(<Backdrop isShowing={props.show} onClick={props.onClick} />, ref.current)}
			{createPortal(
				<ModalOverlay title={props.title} isShowing={props.show}>
					{props.children}
				</ModalOverlay>,
				ref.current
			)}
		</>
	) : null;
};

export default Modal;
