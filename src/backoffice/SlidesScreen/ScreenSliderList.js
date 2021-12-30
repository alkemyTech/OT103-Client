import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ItemList } from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { fetchSlides } from "../../store/slices/slidesSlice";
import LoadingSpinner from "../../Components/Spinner/LoadingSpinner";

export const ScreenSliderList = () => {
	const { slidesData } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSlides());
	}, []);

	return (
		<div className="backofficeLists__container">
			<h2 className="text__title-secondary">Lista de slides</h2>

			<div className="backofficeLists__searchContainer">
				<Link to="/backoffice/Slides/create">
					<button className="form__btn-secondary">Crear nuevo +</button>
				</Link>
			</div>
			{slidesData.loading ? (
				<LoadingSpinner />
			) : slidesData.data.length ? (
				slidesData.data.map((data, i) => {
					return <ItemList key={i} data={data} />;
				})
			) : (
				<div className="backofficeLists__emptyCard">No hay resultados...</div>
			)}

			<div></div>
		</div>
	);
};
