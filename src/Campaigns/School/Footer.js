import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="HS-campaign__footer-container">
      <div className="HS-campaign__footer-logo-container">
        <img src={logo} className="HS-campaign__footer-img" alt="logo" />
        <h1 className="fs-3">Somos Más</h1>
      </div>
      <div className="HS-campaign__footer-socialmedia">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="HS-campaign__footer-sm-item fs-4">
          <i className="fab fa-instagram fs-1 mx-2"></i>
            <strong>/ricardofort</strong>
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="HS-campaign__footer-sm-item fs-4">
            <i className="fab fa-linkedin-in fs-1 mx-2"></i>
            <strong>/elrickyfort</strong>
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="HS-campaign__footer-sm-item fs-4">
            <i className="fab fa-twitter fs-1 mx-2"></i>
            <strong>/elrickyfort</strong>
          </a>
      </div>
    </footer>
  );
};

export default Footer;
