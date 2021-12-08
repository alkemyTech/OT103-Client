import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { getAllActivities } from "../../Services/public/activitiesApi";
import ActivityCard from "./ActivityCard";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import { fetchActivities } from "../../store/slices/activitiesSlice";

const ActivitiesList = () => {
  const { activitiesReducer } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivities());
  }, []);

  return (
    <div className="activities">
      <h1>Listado Actividades</h1>
      <ul className="list">
        {activitiesReducer.data.length > 0 ? (
          activitiesReducer.data.map((activity) => {
            return <ActivityCard key={activity.id} activity={activity} />;
          })
        ) : (
          <LoadingSpinner />
        )}
      </ul>
    </div>
  );
};

export default ActivitiesList;
