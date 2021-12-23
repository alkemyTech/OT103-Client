import React from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { mapStyles } from "../helpers/routerTransitions";
import SlidesForm from "../Components/Slides/SlidesForm";
import HomeForm from "../Components/HomeForm/HomeForm";
import MembersEdit from "../Components//Members/MembersEdit";
import OrganizationForm from "../Components/OrganizationForm/OrganizationForm";
import ManageActivities from "../Components/ManageActivities/ManageActivities";
import { UsersList } from "../Components/Users/UsersList";
import NewsList from "../Components/News/NewsList";
import { ScreenSliderList } from "../backoffice/SlidesScreen/ScreenSliderList";
import HomeDashboard from "../Components/HomeDashboard/HomeDashboard";
import OrganizationData from "../backoffice/Organization/OrganizationData";
import LayoutBackoffice from "../backoffice/Layouts/LayoutBackoffice";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import NewsForm from "../Components/News/NewsForm";
import CategoriesForm from "../Components/Categories/CategoriesForm";
import TestimonialForm from "../Components/Testimonials/TestimonialsForm";
import UserForm from "../Components/Users/UsersForm";

function Backoffice() {
	return (
		<LayoutBackoffice>
			<AnimatedSwitch
				atEnter={{ opacity: 0 }}
				atLeave={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
				className="switch-wrapper"
				mapStyles={mapStyles}
			>
				{/* roto el id */}
				<Route exact path="/backoffice/Slides/create" component={SlidesForm} />
				<Route exact path="/backoffice/Slides" component={ScreenSliderList} />
				{/* no se sabe que hace */}
				<Route exact path="/backoffice/home" component={HomeForm} />
				{/* roto ckeditor */}
				<Route exact path="/backoffice/members/edit" component={MembersEdit} />
				<Route
					exact
					path="/backoffice/organization/edit"
					component={OrganizationForm}
				/>
				<Route
					exact
					path="/backoffice/organization"
					component={OrganizationData}
				/>
				<Route
					exact
					path="/backoffice/activities"
					component={ManageActivities}
				/>
				{/* roto loop infinito */}
				<Route exact path="/backoffice/users" component={UsersList} />
				<Route exact path="/backoffice/news" component={NewsList} />
				<Route exact path="/backoffice/news/create" component={NewsForm} />
				<Route exact path="/backoffice/news/edit/:id" component={NewsForm} />

				<Route exact path="/create-category" component={CategoriesForm} />
				<Route exact path="/create-testimonials" component={TestimonialForm} />
				<Route exact path="/create-user" component={UserForm} />
				<Route exact path="/edit-user/:id" component={UserForm} />

				<Route path="/backoffice" exact component={HomeDashboard} />
				<Route component={PageNotFound} />
			</AnimatedSwitch>
		</LayoutBackoffice>
	);
}
export default Backoffice;
