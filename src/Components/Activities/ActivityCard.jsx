import React from "react";
import "./Activities.scss";
const ActivityCard = ({ activity }) => {
  return (
    <li className="list__item">
      <h3>{activity.name}</h3>
      {activity.image !== null ? (
        <img
          className="list__image"
          src={activity.image}
          alt={`${activity.name}`}
        />
      ) : null}
      {/* TODO esto no se debe hacer... ver como arreglarlo */}
      <div dangerouslySetInnerHTML={{ __html: activity.description }}></div>
    </li>
  );
};

export default ActivityCard;
