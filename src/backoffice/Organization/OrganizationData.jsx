import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Get } from "../../Services/privateApiService";
import LoadingSpinner from "../../Components/Spinner/LoadingSpinner";
import "./organizationData.scss";
//import { alertError } from '../../Services/alerts/Alerts';
//import '../../styles/components/cardStyles.scss'

const OrganizationData = (props) => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	const getData = async () => {
		try {
			const response = await Get(process.env.REACT_APP_API_ORGANIZATION);
			setData(response.data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const redirection = () => {
		props.history.push("/backoffice/organization/edit");
	};

	return (
		<>
			<h2 className="text__title-secondary">Lista de miembros</h2>
			{loading ? (
				<LoadingSpinner />
			) : (
				<div className="container">
					<div className="card">
						<figure>
							<img src={data.logo} alt="logo" />
						</figure>
						<div className="content">
							<h1 className="content-title">{data.name}</h1>
							<p className="content-description">{data.short_description}</p>
							<button className="content-button" onClick={redirection}>
								Formulario de edición
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default withRouter(OrganizationData);
