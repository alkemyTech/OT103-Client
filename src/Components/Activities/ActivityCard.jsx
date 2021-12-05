import React from "react";
import { Title } from "../Title/Title";
import apiDateToText from "../../helpers/apiDateToText";
import { Link } from "react-router-dom";

const ActivityCard = ({ activity }) => {
  const { id, description, image, name, created_at } = activity;
  const { date, time } = apiDateToText(created_at);
  return (
    <li className="list__item">
      <Title title={name} image={image} />
      <div className="list__item-group">
        <p className="list__item-datetime">
          {date} {time}
        </p>

        {/*  esto es mala practica... ver como arreglarlo */}
        <div
          className="list__item-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      <footer className="list__item-footer">
        <Link to={`/actividades/${id}`} className="list__item-edit-link ">
          Mas info...
        </Link>
      </footer>
    </li>
  );
};

export default ActivityCard;
