import React, { useState, useEffect } from "react";
import { getNews } from "../../Services/news";
import "../CardListStyles.css";
import NewsItemList from "./NewsItemList";
import { Link } from "react-router-dom";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews()
      .then((res) => setNews(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Listado de Novedades</h1>
      <Link to={`news/create`}>Crear</Link>
      <ul className="list-container">
        {news.length > 0 ? (
          news.map((element) => {
            return <NewsItemList {...element} key={element.id} />;
          })
        ) : (
          <p>No hay novedades</p>
        )}
      </ul>
    </div>
  );
};

export default NewsList;
