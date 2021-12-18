import FooterPublic from "../Footer/FooterPublic";

const LayoutPublic = ({ children }) => {
	return (
		<div style={{ position: "relative" }}>
			<div>HEADER</div>
			<main style={{ minHeight: "calc(100vh - 29vh)", marginBottom: "40px" }}>
				{children}
			</main>
			<FooterPublic />
		</div>
	);
};

export default LayoutPublic;
