import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Header/header.scss";
import logo from "../../assets/images/logo.png";
import { AuthLogout } from "./AuthLogout";

const Header = () => {
	const [open, setOpen] = useState(false);
	const showMenu = () => {
		document.querySelector(".header__menuPanel").classList.toggle("active");
	};

	const data = [
		{
			text: "Actividades",
			link: "/backoffice/activities",
		},
		{
			text: "Novedades",
			link: "/backoffice/news",
		},
		{
			text: "Miembros",
			link: "/backoffice/members",
		},
		{
			text: "Organización",
			link: "/backoffice/organization",
		},
		{
			text: "Slides",
			link: "/backoffice/slices",
		},
		{
			text: "Usuarios",
			link: "/backoffice/users",
		},
	];

	return (
		<nav className="header__container">
			<Link to="/">
				<img src={logo} alt="logo" width={130} className="header__logo" />
			</Link>

			<button
				className="header__menuBtn form__btn-secondary"
				onClick={showMenu}
			>
				MENU
			</button>
			<div className="header__menuPanel">
				<ul className="header__navbar">
					{data.map((item, index) => (
						<li key={index}>
							<NavLink to={item.link} exact className="header__link">
								{item.text}
							</NavLink>
						</li>
					))}
				</ul>

				<div className="header__btnContainer">
					<AuthLogout />
				</div>
			</div>
		</nav>
	);
};
export default Header;
