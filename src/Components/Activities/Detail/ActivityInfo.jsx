import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { getActivityById } from "../../../Services/public/activitiesApi";
import LoadingSpinner from "../../Spinner/LoadingSpinner";
import apiDateToText from "../../../helpers/apiDateToText";
import { Title } from "../../Title/Title";

const ActivityInfo = () => {
  const { id } = useParams();
  const [currentActivity, setCurrentActivity] = useState({});

  useEffect(() => {
    getActivityById(parseInt(id))
      .then((res) => setCurrentActivity(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const { name, description, created_at, image } = currentActivity;

  console.log(currentActivity);
  const getDateTime = useCallback(() => {
    return created_at !== undefined
      ? apiDateToText(created_at)
      : { date: null, time: null };
  }, [created_at]);

  return (
    <>
      {currentActivity !== {} ? (
        <section>
          <Title image={image} title={name} />
          <hgroup>
            <p className="list__item-shutdown-text">{getDateTime().date}</p>
            <p className="list__item-shutdown-text">{getDateTime().time}</p>
          </hgroup>

          {/* OTRA VEZ LA MALA PRACTICA PERO NO ENCUENTRO ALTERNATIVA */}
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </section>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default ActivityInfo;
