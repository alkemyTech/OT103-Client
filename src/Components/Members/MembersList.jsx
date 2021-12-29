import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Get, Delete } from "../../Services/privateApiService";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import SearchBar from "./SearchBar";
import "./MembersList.scss";
import { alertError } from "../../Services/alerts/Alerts";
import MemberCard from "./MemberCard";

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

	const handleDeleteMember = async (id) => {
		setMessage("");
		const response = await Delete(process.env.REACT_APP_API_MEMBERS, id);
		if (response.success) {
			setMembers((prevState) =>
				prevState.filter((activity) => +activity.id !== +id)
			);
		} else {
			alertError("Algo salió mal, intente nuevamente");
		}
	};

	useEffect(() => {
		fetchApiData();
	}, []);

	return (
		<div className="membersList__container">
			<h2 className="text__title-secondary">Lista de miembros</h2>
			<Link to="/backoffice/members/create">
				<h3 className="text__title-tertiary">Crear nuevo +</h3>
			</Link>
			<SearchBar setSerachResult={setMembers} />
			{isLoading ? (
				<LoadingSpinner />
			) : members.length ? (
				<div>
					{members.map((member) => (
						<MemberCard
							member={member}
							key={member.id}
							deleteMember={handleDeleteMember}
						/>
					))}
				</div>
			) : (
				<div>Sin resultados</div>
			)}
			<div className={"form__message-success"}>{message}</div>
		</div>
	);
};

export default MembersList;
