import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import LayoutPublic from "../Components/Layout/LayoutPublic";
import LoadingSpinner from "../Components/Spinner/LoadingSpinner";
import { mapStyles } from "../helpers/routerTransitions";
import {
	AboutMain,
	ActivitiesList,
	ActivityInfo,
	CategoriesForm,
	Contact,
	ContactForm,
	DonationsGreet,
	Home,
	LoginForm,
	Members,
	PageNotFound,
	RegisterForm,
	SchoolCampaign,
	TestimonialForm,
	ThanksGreet,
	ToysCampaign,
	UserForm,
} from "./Router/publicRoutes";

function Public() {
	return (
		<LayoutPublic>
			<Suspense fallback={<LoadingSpinner />}>
				<AnimatedSwitch
					atEnter={{ opacity: 0 }}
					atLeave={{ opacity: 0 }}
					atActive={{ opacity: 1 }}
					className="switch-wrapper"
					mapStyles={mapStyles}
				>
					{/* pasar a backoffice? */}
					<Route exact path="/create-category" component={CategoriesForm} />
					<Route
						exact
						path="/create-testimonials"
						component={TestimonialForm}
					/>
					<Route exact path="/create-user" component={UserForm} />
					<Route exact path="/edit-user/:id" component={UserForm} />

					{/* publicas  */}
					<Route exact path="/school-campaign" component={SchoolCampaign} />
					<Route exact path="/toys-campaign" component={ToysCampaign} />
					<Route exact path="/about" component={AboutMain} />
					<Route exact path="/contact-form" component={ContactForm} />
					<Route exact path="/register-form" component={RegisterForm} />
					<Route exact path="/login-form" component={LoginForm} />
					<Route exact path="/actividades" component={ActivitiesList} />
					<Route exact path="/actividades/:id" component={ActivityInfo} />
					<Route exact path="/donar" component={DonationsGreet} />
					<Route exact path="/gracias" component={ThanksGreet} />
					<Route exact path="/about/members" component={Members} />
					<Route exact path="/contacto" component={Contact} />
					<Route exact path="/" component={Home} />
					<Route component={PageNotFound} />
				</AnimatedSwitch>
			</Suspense>
		</LayoutPublic>
	);
}
export default Public;
