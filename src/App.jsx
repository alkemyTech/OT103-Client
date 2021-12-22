import React from "react";
import "./App.css";
import Public from "./Routes/Public";
import Backoffice from "./Routes/Backoffice";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/school-campaign" component={SchoolCampaign} />
				<Route exact path="/toys-campaign" component={ToysCampaign} />
				<Route path="/backoffice" render={Backoffice} />
				<Route path="/" render={Public} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
