import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import { AboutMain } from "./Components/About/AboutMain";
import HomeForm from "./Components/HomeForm/HomeForm";
import ContactForm from "./Components/Contact/ContactForm";
import MembersEdit from "./Components//Members/MembersEdit";
import RegisterForm from "./Components/Auth/RegisterForm";
import LoginForm from "./Components/Auth/LoginForm";
import OrganizationForm from "./Components/OrganizationForm/OrganizationForm";
import ActivitiesList from "./Components/Activities/ActivitiesList";
import ActivityInfo from "./Components/Activities/Detail/ActivityInfo";
import ManageActivities from "./Components/ManageActivities/ManageActivities";
import { UsersList } from "./Components/Users/UsersList";
import { DonationsGreet } from "./Components/Donations/DonationsGreet";
import { ThanksGreet } from "./Components/Donations/ThanksGreet";
import { ScreenSliderList } from "./backoffice/SlidesScreen/ScreenSliderList";
import Home from './Home/Home';
import HomeDashboard from "./Components/HomeDashboard/HomeDashboard";
import OrganizationData from "./backoffice/Organization/OrganizationData";
import Members from "./Components/About/Members";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>

          <Route exact path="/actividades" component={ActivitiesList} />
          <Route exact path="/actividades/:id" component={ActivityInfo} />
          <Route path="/backoffice" exact component={HomeDashboard}/>
          <Route exact path="/create-activity" component={ActivitiesForm} />
          <Route exact path="/create-category" component={CategoriesForm} />
          <Route exact path="/create-news" component={NewsForm} />
          <Route exact path="/backoffice/Slides" component={ScreenSliderList} />
          <Route exact path="/backoffice/Slides/create" component={SlidesForm} />
          <Route
            exact
            path="/backoffice/organization/edit"
            component={OrganizationForm}
          />
          <Route exact path="/backoffice/home" component={HomeForm} />
          <Route
            exact
            path="/create-testimonials"
            component={TestimonialForm}
          />
          <Route exact path="/create-user" component={UserForm} />
          <Route exact path="/edit-user/:id" component={UserForm} />
          <Route exact path="/create-member" component={MembersForm} />
          <Route
            exact
            path="/backoffice/members/edit"
            component={MembersEdit}
          />
          <Route exact path="/create-project" component={ProjectsForm} />
          <Route exact path="/school-campaign" component={SchoolCampaign} />
          <Route exact path="/toys-campaign" component={ToysCampaign} />
          <Route exact path="/backoffice/news/:id" component={NewsForm} />
          <Route exact path="/backoffice/news" component={NewsForm} />
          <Route
            exact
            path="/backoffice/activities"
            component={ManageActivities}
          />
          <Route exact path="/backoffice/users" component={UsersList} />
          <Route exact path="/donar" component={DonationsGreet} />
          <Route exact path="/gracias" component={ThanksGreet} />
          <Route exact path="/about" component={AboutMain} />
          <Route exact path="/backoffice/slides" component={SlidesForm} />
          <Route exact path="/contact-form" component={ContactForm} />
          <Route exact path="/register-form" component={RegisterForm} />
          <Route exact path="/login-form" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/backoffice/organization" component={OrganizationData} />
          <Route exact path="/about/members" component={Members} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
