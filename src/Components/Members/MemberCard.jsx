import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { Link } from "react-router-dom";

const MemberCard = ({ member, deleteMember }) => {
	const [isDeleting, setIsDeleting] = useState(false);

	return (
		<div className="membersList__card">
			{isDeleting && (
				<CgSpinner className="spinner__circle membersList__spinner" />
			)}
			<img
				className="membersList__image"
				src={member.image || ""}
				alt="descripcion"
				onError={(e) => {
					e.target.src =
						"https://www.sedistudio.com.au/wp-content/themes/sedi/assets/images/placeholder/placeholder.png";
				}}
			/>

			<div className="membersList__content">
				<div>{member.name}</div>
				<div className="membersList__btn-container">
					<Link to={`/backoffice/members/edit/${member.id}`}>
						<button className="form__btn-secondary">Editar</button>
					</Link>
					<button
						className="form__btn-secondary"
						onClick={async () => {
							setIsDeleting(true);
							await deleteMember(member.id);
							setIsDeleting(false);
						}}
						disabled={isDeleting}
					>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
};

export default MemberCard;
