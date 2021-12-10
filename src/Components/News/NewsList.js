import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import { Link } from "react-router-dom";
import { Get } from "../../Services/privateApiService";

import "../../styles/components/listStyles.scss";
import LoaderComponent from "../Loader/Loader";
import { alertError } from "../../Services/alerts/Alerts";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    const response = await Get("news");
    if (response.success) {
      setNews(response.data);
    } else {
      alertError("Algo salio mal, intente nuevamente.");
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="news-list">
      <header className="header">
        <h1 className="header__title">Listado de Novedades</h1>
        <Link to={`news/create`} className="header__create-btn">
          Crear
        </Link>
      </header>
      <ul className="list">
        {loading && (
          <div className="m-auto">
            <LoaderComponent />
          </div>
        )}
        {news.length > 0 ? (
          news.map((element) => {
            return <NewsItem {...element} key={element.id} setNews={setNews} />;
          })
        ) : (
          <p>No hay novedades</p>
        )}
      </ul>
    </div>
  );
};

export default NewsList;
