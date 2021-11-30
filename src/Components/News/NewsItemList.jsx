import React from "react";
import { Link } from "react-router-dom";
import apiDateToText from "../../helpers/apiDateToText";

const NewsItemList = ({ id, name, image, created_at }) => {
  const { date, time } = apiDateToText(created_at);
  return (
    <li className="card">
      <img src={image} alt={name} className="small-img" />
      <h3>{name}</h3>
      <p>
        {date} {time}
      </p>
      <Link to={`news/${id}`}>Editar</Link>
      {/* TODO boton eliminar con la funcion REMOVE desde la api */}
      <button onClick={() => alert("Remove")}>Remover</button>
    </li>
  );
};

export default NewsItemList;
