import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";

import LoadingSpinner from "../../Spinner/LoadingSpinner";
import apiDateToText from "../../../helpers/apiDateToText";
import { Title } from "../../Title/Title";
import { Get } from "../../../Services/privateApiService";
import "../../../styles/components/detailsStyles.scss";
/*
RECEIVES => empty

HOW =>
fetch from /activities/:id and saves the info into currentActivity

inside currentActivity there is a prop called "created_at" which returns a date

the "getDateTime" function taken from "helpers/apiDateToText" is inside a performance friendly useCallback which only calculates the date and time from the "created_at" prop whenever the prop changes.

RETURNS => activity info component and displays some interesting data about a specific activity


*/

const ActivityInfo = () => {
  const { id } = useParams();
  const [currentActivity, setCurrentActivity] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Get("activities", id);
        setCurrentActivity(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  const { name, description, created_at, image } = currentActivity;

  const getDateTime = useCallback(() => {
    return created_at !== undefined
      ? apiDateToText(created_at)
      : { date: null, time: null };
  }, [created_at]);

  return (
    <>
      {currentActivity !== {} ? (
        <section className="detail">
          <Title image={image} title={name} />
          <hgroup className="detail__datetime">
            <p className="detail__datetime-text">
              {getDateTime().date} {getDateTime().time}
            </p>
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
