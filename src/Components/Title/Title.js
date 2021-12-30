import defaultImage from "../../assets/images/404.png";
import Image from "../LazyLoadingImage/Image";

export const Title = ({ title, image }) => {
	return (
		<div>
			<Image url={!image ? defaultImage : image} description={title} />
			<h1 className="main-title">{title}</h1>
		</div>
	);
};
