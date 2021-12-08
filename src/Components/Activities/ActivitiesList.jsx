import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/components/listStyles.scss";
import ActivityCard from "./ActivityCard";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import { fetchActivities } from "../../store/slices/activitiesSlice";

const ActivitiesList = () => {
  const { activities } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivities());
  }, []);

  return (
    <div className="activities-list">
      <h1>Listado Actividades</h1>
      <ul className="list">
        {activities.data.length > 0 ? (
          activities.data.map((activity) => {
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
