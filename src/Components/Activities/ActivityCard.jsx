import React from "react";
import "./Activities.scss";
import { Title } from "../Title/Title";
import apiDateToText from "../../helpers/apiDateToText";

const ActivityCard = ({ activity }) => {
  const { date, time } = apiDateToText(activity["created_at"]);
  return (
    <li className="list__item">
      {/* TODO WAIT FOR TITLE TO BE FIXED */}
      <Title title={activity.name} image={activity.image} />
      <p className="list__item-shutdown-text">
        {date} {time}
      </p>

      {/* TODO esto es mala practica... ver como arreglarlo */}
      <div dangerouslySetInnerHTML={{ __html: activity.description }}></div>
    </li>
  );
};

export default ActivityCard;
