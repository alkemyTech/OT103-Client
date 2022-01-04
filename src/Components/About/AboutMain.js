import React from "react";

import { Title } from "../Title/Title";
import { SocialMediaComponent } from "../SocialMedia/SocialMediaComponent";
import logo from "../../assets/images/logo.png";
import "./styles/AboutMain.scss";
import { Link } from "react-router-dom";

const AboutMain = ({
	about = "Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos. ﻿ Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de trabajo. Hoy somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social. ",
}) => {
	return (
		<>
			<div className="about__container">
				<div className="about__title-imported">
					<Title title={""} image={logo} />
				</div>
				<div className="about__wrapper">
					<h3 className="text__title-secondary">Sobre Nosotros</h3>

					<div className="about__text">{about}</div>
					<Link to="/about/members">
						<button className="form__btn-primary">Ver miembros</button>
					</Link>
				</div>
				<SocialMediaComponent />
			</div>
		</>
	);
};

export default AboutMain;
