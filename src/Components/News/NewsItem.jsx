import React from "react";
import { Link } from "react-router-dom";
import apiDateToText from "../../helpers/apiDateToText";
import { Delete } from "../../Services/privateApiService";

const NewsItem = ({ id, name, image, created_at, setNews }) => {
  const { date, time } = apiDateToText(created_at);

  const handleDelete = () => {
    Delete("news", id)
      .then((res) => {
        setNews((prev) => prev.filter((news) => news.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <li className="list__item">
      <img className="list__item-image" src={image} alt={name} />
      <div className="list__item-group">
        <h3 className="list__item-title">{name}</h3>
        <p className="list__item-datetime">
          {date} {time}
        </p>
        <Link to={`news/${id}`} className="list__item-edit-link">
          Editar
        </Link>
        <button onClick={handleDelete} className="list__item-remove-btn">
          Remover
        </button>
      </div>
    </li>
  );
};

export default NewsItem;
