import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ItemList } from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { fetchSlides } from "../../store/slices/slidesSlice";

export const ScreenSliderList = () => {
  const { slidesData } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlides());
  }, []);

  return (
<<<<<<< HEAD
    <div className="table__main">
      <div className="table__head-container">
        <div className="table__head-title">Listado de Slides</div>
        <Link to="/backoffice/Slides/create" className="table__create-button">
          Create
        </Link>
      </div>
      <div>
        {slidesData.data.map((data, i) => {
          return <ItemList key={i} data={data} />;
        })}
      </div>
    </div>
  );
};
=======
    <table className="table__main">
      <tr className="table__head-container">
        <th className="table__head-title">Listado de Slides</th>
        <Link to="/backoffice/Slides/create" className="table__create-button">
          Create
        </Link>
      </tr>
      <tr>
        {slidesData.data.map((data, i) => {
          return <ItemList key={i} data={data} />;
        })}
      </tr>
    </table>
  );
};
>>>>>>> af44ea8d2b4585e291d3002deb7305f899e06a48
