import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { Link } from "react-router-dom";
import apiDateToText from "../../helpers/apiDateToText";
import { alertError, alertInformation } from "../../Services/alerts/Alerts";
import { Delete } from "../../Services/privateApiService";
import "./CategoriesTable.scss";

export const CategoriesTable = ({ category }) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = async (id, category) => {
		const categoryDelete = await Delete("categories", category.id);

		if (categoryDelete.message) {
			alertInformation(categoryDelete.message);
		} else {
			alertError("La categoria no existe");
		}
	};

	return (
		<div className="categories backofficeLists__cardContainer">
			{isDeleting && (
				<CgSpinner className="spinner__circle backofficeLists__cardSpinner" />
			)}
			{/* <img
				className="backofficeLists__cardImage"
				src={category.image || ""}
				alt="descripcion"
				onError={(e) => {
					e.target.src =
						"https://www.sedistudio.com.au/wp-content/themes/sedi/assets/images/placeholder/placeholder.png";
				}}
			/> */}
			<div className="backofficeLists__cardContent">
				<div>
					<div>{category.name}</div>
					<div>{apiDateToText(category.created_at).date}</div>
				</div>
				<div className="backofficeLists__cardBtnsContainer">
					<Link to={`/backoffice/categories/edit/${category.id}`}>
						<button className="form__btn-secondary">Editar</button>
					</Link>
					<button
						className="form__btn-secondary"
						onClick={handleDelete}
						disabled={isDeleting}
					>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
};
