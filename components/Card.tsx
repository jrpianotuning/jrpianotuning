import React, { PropsWithChildren } from "react";
import styles from "../styles/Card.module.scss";
import { IconType } from "react-icons";

export interface iCardProps {
	title?: string;
	icon?: IconType;
	iconColor?: string;
	children: any;
}

export default function Card(props: PropsWithChildren<iCardProps>) {
	return (
		<div className={styles.card__container}>
			<CardHeader
				title={props.title}
				icon={props.icon}
				iconColor={props.iconColor}
			/>
			<div className={styles.card__body}>{props.children}</div>
		</div>
	);
}

interface iCardHeaderProps {
	title: string;
	icon: IconType;
	iconColor: string;
}

function CardHeader(props: iCardHeaderProps) {
	const Icon = props.icon;
	return (
		<div className={styles.cardHeader__container}>
			{props.title ? <h2>{props.title}</h2> : ""}
			{props.icon ? (
				<span>
					{props.iconColor ? (
						<Icon style={{ color: props.iconColor }} />
					) : (
						<Icon />
					)}
				</span>
			) : (
				""
			)}
		</div>
	);
}
