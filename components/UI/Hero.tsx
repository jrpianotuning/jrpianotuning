const Hero: React.FunctionComponent<{ image?: string; height?: string; darken?: boolean }> = (
	props
) => {
	return (
		<div className="container">
			<div className="image"></div>
			{props.children}
			<style jsx>{`
				.container {
					position: relative;
					display: flex;
					width: 100%;
					height: ${props.height || "50vh"};
					justify-content: center;
					align-items: center;
					align-content: center;
					margin-bottom: 2rem;
					padding: 2rem;
				}
				.image {
					position: absolute;
					width: 100%;
					height: ${props.height || "50vh"};
					top: 0;
					left: 0;
					background-color: none;
					background: url("${props.image}") no-repeat center center fixed;
					-webkit-background-size: cover;
					-moz-background-size: cover;
					-o-background-size: cover;
					background-size: cover;
					${props.darken && "filter: brightness(0.4);"}
					overflow: hidden;
					z-index: -1;
				}
			`}</style>
		</div>
	);
};

export default Hero;
