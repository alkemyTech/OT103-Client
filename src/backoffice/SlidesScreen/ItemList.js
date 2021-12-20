import React from "react";
import { Link } from "react-router-dom";
import { alertError } from "../../Services/alerts/Alerts";
import { Delete } from "../../Services/privateApiService";


export const ItemList = ({ data }) => {

	const handleDelete = async () => {
		try {
			const deleteData = await Delete("slides", data.id);
			if(!deleteData.success){
				alertError(deleteData.error);
			}else{
				return deleteData.data;
			}
		} catch (error) {
			console.log(error);
			alertError("Esta publicación no existe");
		}
	};

	return (
		<div className="table__items">
			<div className="table__text">
				<h3 className="table__title">{data.name}</h3>
				<div className="table__div-button">
					{
						data.order ?
							(<h5>Order: {data.order}</h5>)
							: (<h5>No order</h5>)
					}
					<div className="table__buttons-box">
						<Link
							// className="table__button-table edit-button"
							className='form__btn-primary edit-button'
							to={`/backoffice/Slides/create/${data.id}`}
						>Editar</Link>
						<button onClick={handleDelete} className="form__btn-primary delete-button">
							<p onClick={handleDelete}>Borrar</p>
						</button>
					</div>
				</div>
			</div>
			<img
				className="table__image"
				src={data.image}
				alt={data.image}
			/>
		</div>
	);
};
