import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Get, Delete } from "../../Services/privateApiService";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import SearchBar from "./SearchBar";
import "./MembersList.scss";

const MembersList = () => {
	const [members, setMembers] = useState([]);
	const [message, setMessage] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const fetchApiData = async () => {
		const response = await Get(process.env.REACT_APP_API_MEMBERS);
		if (response.success) {
			setMembers(response.data);
		}
		setIsLoading(false);
	};

	const handleDeleteActivity = async (id) => {
		setMessage("");
		const response = await Delete(process.env.REACT_APP_API_MEMBERS, id);
		if (response.success) {
			setMembers((prevState) =>
				prevState.filter((activity) => +activity.id !== +id)
			);
			setMessage("Eliminado exitosamente");
		}
	};

	useEffect(() => {
		fetchApiData();
	}, []);

	return (
		<div className="MembersList__container">
			<Link to="/backoffice/members/create" className="MembersList__title">
				Create New Member +
			</Link>
			<SearchBar setSerachResult={setMembers} />
			{isLoading ? (
				<LoadingSpinner />
			) : members.length ? (
				<>
					<div>
						{members.map((member) => (
							<Fragment key={member.id}>
								<div className="MembersList__card">
									{/* <div> */}
									<img
										className="MembersList__image"
										src={member.image || ""}
										alt="descripcion"
										onError={(e) => {
											e.target.src =
												"https://www.sedistudio.com.au/wp-content/themes/sedi/assets/images/placeholder/placeholder.png";
										}}
									/>
									{/* </div> */}
									<div className="MembersList__content">
										<div>{member.name}</div>
										<div className="MembersList__btn-container">
											<Link to={`/backoffice/members/edit/${member.id}`}>
												<button className="form__btn-secondary">Editar</button>
											</Link>
											<button
												className="form__btn-secondary"
												onClick={() => handleDeleteActivity(member.id)}
											>
												Eliminar
											</button>
										</div>
									</div>
								</div>
							</Fragment>
						))}
					</div>
					<div
						className={
							message.includes("mal") ? "error-message" : "success-message"
						}
					>
						{message}
					</div>
				</>
			) : (
				<div>Sin resultados</div>
			)}
		</div>
	);
};

export default MembersList;
