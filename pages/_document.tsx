import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class Structure extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	public render() {
		return (
			<Html lang="en">
				<Head>
					<style>
						{`#__next {
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							min-height: 100vh;
							padding: 0;
							margin: 0;
							overflow: auto;
						}`}
					</style>
				</Head>
				<body>
					<noscript>You need JavaScript enabled to view this website</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Structure;
