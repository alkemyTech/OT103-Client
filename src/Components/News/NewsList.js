import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import { Link } from "react-router-dom";

import "../../styles/components/listStyles.scss";
import LoaderComponent from "../Loader/Loader";
import { alertError } from "../../Services/alerts/Alerts";
<<<<<<< HEAD
=======
import { fetchNews } from "../../store/slices/newsSlice";
import { useDispatch, useSelector } from "react-redux";
>>>>>>> df9eef0380424be7cd1473fd723a64834dbce2cf

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const { newsData } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
<<<<<<< HEAD
    Get("news")
      .then((res) => {
        setLoading(false);
        setNews(res.data);
      })
      .catch((err) => alertError(err));
=======
    dispatch(fetchNews());
>>>>>>> df9eef0380424be7cd1473fd723a64834dbce2cf
  }, []);

  useEffect(() => {
    if (newsData.error) {
      alertError("Algo salió mal, intente nuevamente");
    }
  }, [newsData.error]);

  return (
    <div className="news-list">
      <header className="header">
        <h1 className="header__title">Listado de Novedades</h1>
        <Link to={`news/create`} className="header__create-btn">
          Crear
        </Link>
      </header>
      <ul className="list">
<<<<<<< HEAD
        {loading && (
=======
        {newsData.loading && (
>>>>>>> df9eef0380424be7cd1473fd723a64834dbce2cf
          <div className="m-auto">
            <LoaderComponent />
          </div>
        )}
<<<<<<< HEAD
        {news.length > 0 ? (
          news.map((element) => {
=======
        {newsData.data.length > 0 ? (
          newsData.data.map((element) => {
>>>>>>> df9eef0380424be7cd1473fd723a64834dbce2cf
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
