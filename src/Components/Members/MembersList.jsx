import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Get } from "../../Services/privateApiService";
import SearchBar from "../SearchBar/SearchBar";

const MembersList = () => {
	const [members, setMembers] = useState([]);
	const [message, setMessage] = useState("");
	console.log(members);
	const fetchApiData = async () => {
		const response = await Get(process.env.REACT_APP_API_MEMBERS);
		if (response.success) {
			setMembers(response.data);
		}
	};

	const handleDeleteActivity = async (id) => {
		setMessage("");
		setMembers((prevState) =>
			prevState.filter((activity) => +activity.id !== +id)
		);
		setMessage("Eliminado exitosamente");
	};

	useEffect(() => {
		fetchApiData();
	}, []);

	return (
		<div className="manage-activities-container">
			<Link to="/backoffice/members/create" className="new-activity-link">
				Create New Member
			</Link>
			<SearchBar setSerachResult={setMembers} />
			{members.length ? (
				<>
					<table className="table-container">
						<thead>
							<tr>
								<th className="activity-table-data">Nombre</th>
								<th className="activity-table-data">Foto</th>
							</tr>
						</thead>
						<tbody>
							{members.map((member) => (
								<Fragment key={member.id}>
									<tr>
										<td className="activity-table-data">{member.name}</td>
										<td className="activity-table-data">
											<img
												className="activity-image"
												src={member.image || ""}
												alt="descripcion"
												onError={(e) => {
													e.target.src =
														"https://www.sedistudio.com.au/wp-content/themes/sedi/assets/images/placeholder/placeholder.png";
												}}
											/>
										</td>

										<td className="activity-table-data">
											<Link to={`/backoffice/members/edit/${member.id}`}>
												Editar
											</Link>
											<button onClick={() => handleDeleteActivity(member.id)}>
												Eliminar
											</button>
										</td>
									</tr>
								</Fragment>
							))}
						</tbody>
					</table>
					<div
						className={
							message.includes("mal") ? "error-message" : "success-message"
						}
					>
						{message}
					</div>
				</>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default MembersList;
