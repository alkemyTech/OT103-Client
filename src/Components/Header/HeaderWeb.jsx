import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import { AuthLogout } from "./AuthLogout";
import "./headerWeb.scss";
import logo from "../../assets/images/logo.png";

import { AuthLogin } from "./AuthLogin";
import useAuthActions from "../../store/hooks/useAuthActions";

const HeaderWeb = () => {
	const { isLogged, getRoleId } = useAuthActions();

	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const showMenu = () => {
		setMenuIsOpen(true);
	};
	const hideMenu = () => {
		setMenuIsOpen(false);
	};

	const data = [
		{
			text: "Inicio",
			link: "/",
		},
		{
			text: "Actividades",
			link: "/actividades",
		},
		{
			text: "Nosotros",
			link: "/about",
		},
		{
			text: "Contacto",
			link: "/contacto",
		},
	];

	// if (getRoleId() === 1) {
	// 	data.splice(2, 1);
	// }

	return (
		<nav className="header__container">
			<Link to="/">
				<img src={logo} alt="logo" width={130} className="header__logo" />
			</Link>

			<button
				className="header__menuBtn form__btn-secondary"
				onClick={showMenu}
				onBlur={hideMenu}
			>
				MENU
			</button>
			<div className={`header__menuPanel ${menuIsOpen && "active"}`}>
				<ul className="header__navbar">
					{data.map((item, index) => (
						<li key={"link" + index}>
							<NavLink to={item.link} exact className="header__link">
								{item.text}
							</NavLink>
						</li>
					))}
					<li>
						<NavLink
							to="/toys-campaign"
							exact
							className="header__link"
							target="_blank"
						>
							Juguetes <i className="fas fa-external-link-square-alt"></i>
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/school-campaign"
							exact
							className="header__link"
							target="_blank"
						>
							Escuela <i className="fas fa-external-link-square-alt"></i>
						</NavLink>
					</li>
				</ul>
				<div className="header__btnContainer">
					{isLogged ? (
						<>
							<AuthLogout />
							<Link to="/backoffice">
								<button className="form__btn-secondary">
									<i className="fas fa-columns"></i>
								</button>
							</Link>
						</>
					) : (
						<AuthLogin />
					)}
				</div>
			</div>
		</nav>
	);
};

export default withRouter(HeaderWeb);
