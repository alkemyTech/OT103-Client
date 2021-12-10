import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/components/listStyles.scss";
import ActivityCard from "./ActivityCard";
import LoaderComponent from "../Loader/Loader";
import { fetchActivities } from "../../store/slices/activitiesSlice";
import { alertError } from "../../Services/alerts/Alerts";
import { SkeletonLoader } from "../Loader/SkeletonLoader";
const ActivitiesList = () => {
  const { activities } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActivities()).catch((err) =>
      alertError("No hay actividades disponibles")
    );
  }, []);

  return (
    <div className="activities__list">
      <h1>Listado Actividades</h1>
      <ul className="list">
        {activities.data.length > 0 ? (
          activities.data.map((activity) => {
            return <ActivityCard key={activity.id} activity={activity} />;
          })
        ) : (
          <div className="activities__list gap-20px">
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </div>
        )}
      </ul>
    </div>
  );
};

export default ActivitiesList;
