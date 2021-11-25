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
<<<<<<< HEAD
import ProjectsForm from "./Components/Projects/ProjectsForm";
import { DonationsGreet } from "./Components/Donations/DonationsGreet";
import { ThanksGreet } from "./Components/Donations/ThanksGreet";
import ContactForm from "./Components/Contact/ContactForm";
=======
import MembersEdit from "./Components//Members/MembersEdit";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import { DonationsGreet } from "./Components/Donations/DonationsGreet";
import { ThanksGreet } from "./Components/Donations/ThanksGreet";
>>>>>>> fdc4a759865f89269ac0ecbe01ef1ba43706d831

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact component={} />           Esta ruta debe ser para el Home */}
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/backoffice/members/edit" component={MembersEdit} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/backoffice/news/:id" component={NewsForm} />
          <Route path="/backoffice/news" component={NewsForm} />
          <Route path="/donar" component={DonationsGreet} />
          <Route path="/gracias" component={ThanksGreet} />
<<<<<<< HEAD
          <Route path="/contact-form" component={ContactForm} />
=======
>>>>>>> fdc4a759865f89269ac0ecbe01ef1ba43706d831
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
