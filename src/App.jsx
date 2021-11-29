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
import HomeForm from "./Components/HomeForm/HomeForm";
import DonationsGreet from "./Components/Donations/DonationsGreet";
import ThanksGreet from "./Components/Donations/ThanksGreet";
import ContactForm from "./Components/Contact/ContactForm";
import MembersEdit from "./Components//Members/MembersEdit";
import RegisterForm from './Components/Auth/RegisterForm';
import LoginForm from './Components/Auth/LoginForm';
import OrganizationForm from "./Components/OrganizationForm/OrganizationForm";
import ActivitiesList from "./Components/Activities/ActivitiesList";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact component={} />           Esta ruta debe ser para el Home */}
          <Route exact path="/actividades" component={ActivitiesList} />

          <Route exactpath="/create-activity" component={ActivitiesForm} />
          <Route exactpath="/create-category" component={CategoriesForm} />
          <Route exactpath="/create-news" component={NewsForm} />
          <Route exactpath="/backoffice/create-slide" component={SlidesForm} />
          <Route exactpath="/backoffice/organization/edit" component={OrganizationForm} />
          <Route exactpath="/backoffice/home" component={HomeForm} />
          <Route exact path="/create-testimonials" component={TestimonialForm} />
          <Route exactpath="/create-user" component={UserForm} />
          <Route path="/edit-user/:id" component={UserForm} />
          <Route exactpath="/create-member" component={MembersForm} />
          <Route exactpath="/backoffice/members/edit" component={MembersEdit} />
          <Route exactpath="/create-project" component={ProjectsForm} />
          <Route exactpath="/school-campaign" component={SchoolCampaign} />
          <Route exactpath="/toys-campaign" component={ToysCampaign} />
          <Route exactpath="/backoffice/news/:id" component={NewsForm} />
          <Route exactpath="/backoffice/news" component={NewsForm} />
          <Route exactpath="/donar" component={DonationsGreet} />
          <Route exactpath="/gracias" component={ThanksGreet} />
          <Route exactpath="/backoffice/slides" component={SlidesForm} />
          <Route exactpath="/contact-form" component={ContactForm} />
          <Route exactpath="/register-form" component={RegisterForm} />
          <Route exactpath="/login-form" component={LoginForm} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
