import React from "react";
import { Link } from "react-router-dom";
import { SliderCarouselComponent } from "../slideHome/SliderCarouselComponent.js";
import "../styles/components/home.scss";
import Arrow1 from "../assets/images/arrow-1.png";
import Hand from "../assets/images/hand-heart.png";

import "./Home.scss";
import ContactForm from "../Components/Contact/ContactForm.js";
import TestimonialsCards from "./TestimonialsCards/TestimonialsCards.jsx";
import NewsCards from "./NewsCards/NewsCards.jsx";

const Home = () => {
	return (
		<>
			<section className="Home__section-main">
				<div className="Home__presentationContainer">
					<h1 className="Home__title">Bienvenidos!</h1>
					<p className="Home__presentationText">
						Simply dummy text of the printing and typesetting industry. Lorem
						Ipsum has been the industry's standard dummy text ever since the
						1500s, when an unknown printer
					</p>

					<div className="Home__donateContainer">
						<img src={Arrow1} alt="curved arrow" className="Home__arrowImage" />
						<img
							src={Hand}
							alt="hand with a heart"
							className="Home__handImage"
						/>
						<Link to="/donar">
							<button className="form__btn-primary">DONAR AHORA</button>
						</Link>
					</div>
				</div>
				<div className="Home__carousel">
					<SliderCarouselComponent />
				</div>
			</section>
			<section className="Home__section-news">
				<h1 className="Home__subtitle">ULTIMAS NOVEDADES</h1>
				<NewsCards />
				<button className="form__btn-primary">Ver Todas</button>
			</section>
			<section className="Home__section-testimonials">
				<h1 className="Home__subtitle">TESTIMONIOS</h1>
				<TestimonialsCards />
				<button className="form__btn-primary">Ver Todos</button>
			</section>
			<section className="Home__section-contact">
				<ContactForm />
			</section>
		</>
	);
};
export default Home;
