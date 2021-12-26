import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import { AuthLogout } from "./AuthLogout";
import "./headerWeb.scss";
import logo from "../../assets/images/logo.png";

import { AuthLogin } from "./AuthLogin";
import useAuthActions from "../../store/hooks/useAuthActions";

const HeaderWeb = () => {
	const { isLogged } = useAuthActions();

	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const showMenu = () => {
		setMenuIsOpen((prev) => !prev);
		document.querySelector(".header__menuPanel").classList.toggle("active");
	};

	const data = [
		{
			text: "Inicio",
			link: "/",
		},
		{
			text: "Nosotros",
			link: "/about",
		},
		{
			text: "Contacto",
			link: "/contacto",
		},
		{
			text: "Juguetes",
			link: "/toys-campaign",
		},
		{
			text: "Escuela",
			link: "/school-campaign",
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
			<div className={`header__menuPanel ${menuIsOpen && "active"}`}>
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
					{isLogged ? <AuthLogout /> : <AuthLogin />}
				</div>
			</div>
		</nav>
	);
};

export default withRouter(HeaderWeb);
