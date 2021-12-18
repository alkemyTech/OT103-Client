import React from "react";
import logo from "../../assets/images/logo.png";
import logojuguetes from "../../assets/images/toys/logojuguetes.png";
import "./headerToys.scss";

const Header = () => {
	return (
		<header className='header__toys'>
			<div className="header__toys-content">
				<img src={logojuguetes} alt="logo" className='header__toys-logo' />
			</div>
			<div className="header__toys-ong">
				<img src={ logo } alt="logo ONG"  className='header__toys-logo-ong'/>
			</div>
			<div className="header__toys-slogan">
				<h5 className="slogan">Los chicos te necesitan hoy</h5>
				<h5 className="slogan">Sumate con tu donación !!</h5>
			</div>

		</header>
	);
}
 
export default Header;