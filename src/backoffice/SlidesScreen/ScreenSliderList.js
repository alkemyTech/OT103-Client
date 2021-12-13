import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ItemList } from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { fetchSlides } from "../../store/slices/slidesSlice";
import { SkeletonLoader } from "../../Components/Loader/SkeletonLoader";

export const ScreenSliderList = () => {
  const { slidesData } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlides());
  }, []);

  return (
    <table className="table__main">
      <tr className="table__head-container mb-3">
        <th className="table__head-title">Listado de Slides</th>
        <Link to="/backoffice/Slides/create" className="table__create-button">
          Create
        </Link>
      </tr>
      <SkeletonLoader />
      <tr className="mt-3">
        {slidesData.data.map((data, i) => {
          return <ItemList key={i} data={data} />;
        })}
      </tr>
    </table>
  );
};
