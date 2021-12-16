import React from "react";
import "./PageNotFound.scss";

function PageNotFound() {
	return (
		<div className="notFound__container">
			<h1 className="__first-title">404</h1>
			<i className="__icon far fa-sad-cry"></i>
			<h2 className="__second-title">Page Not Found</h2>
		</div>
	);
}

export default PageNotFound;
