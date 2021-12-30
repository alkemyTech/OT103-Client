import React from "react";

const Image = ({ url, description }) => {
	return <img src={url} alt={description} loading="lazy" />;
};

export default Image;
