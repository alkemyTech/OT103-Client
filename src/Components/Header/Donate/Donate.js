import React from "react";
import "./Donate.scss";
import { GiReceiveMoney } from "react-icons/fa";
import { Link } from "react-router-dom";

function Donate() {
	return (
		<div>
			<Link to="/donate">
				<button className="donate__button">
					Donar
					<i className="fas fa-donate"></i>
				</button>
			</Link>
		</div>
	);
}

export default Donate;
