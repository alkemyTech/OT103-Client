import React from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="highschool__header-">
      <img
        className="highschool__header-img"
        src="https://cdn-sp.radionacional.com.ar/wp-content/uploads/2017/04/ONG.png"
        alt="logo"
      />
      <h1 className="fs-2">Slogan de campaña</h1>
      <img className="highschool__header-img" src={logo} alt="logo" />
    </header>
  );
};

export default Header;