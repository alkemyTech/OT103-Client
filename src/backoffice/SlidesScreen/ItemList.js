import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { Link } from "react-router-dom";

import apiDateToText from "../../helpers/apiDateToText";
import { alertError } from "../../Services/alerts/Alerts";
import { Delete } from "../../Services/privateApiService";

export const ItemList = ({ data }) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const date = apiDateToText(data.updated_at).date;
	const order = data.order ? `Order: ${data.order}` : date;

	const handleDelete = async () => {
		try {
			const deleteData = await Delete("slides", data.id);
			if (!deleteData.success) {
				alertError(deleteData.error);
			} else {
				return deleteData.data;
			}
		} catch (error) {
			console.log(error);
			alertError("Esta publicación no existe");
		}
	};

	return (
		<div className="backofficeLists__cardContainer">
			{isDeleting && (
				<CgSpinner className="spinner__circle backofficeLists__cardSpinner" />
			)}
			<img
				className="backofficeLists__cardImage"
				src={data.image}
				alt={data.image}
			/>

			<div className="backofficeLists__cardContent">
				<div>{data.name}</div>
				<div>{order}</div>
				<div className="backofficeLists__cardBtnsContainer">
					<Link to={`/backoffice/Slides/edit/${data.id}`}>
						<button className="form__btn-secondary">Editar</button>
					</Link>
					<button onClick={handleDelete} className="form__btn-secondary">
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
};
