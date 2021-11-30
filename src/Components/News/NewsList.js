import React, { useState, useEffect } from "react";
import { getNews } from "../../Services/news";
import "../CardListStyles.css";

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
      <ul className="list-container">
        {news.length > 0 ? (
          news.map((element) => {
            return (
              <li className="card-info" key={element.id}>
                <h3>{element.name}</h3>
                <p>{element.description}</p>
              </li>
            );
          })
        ) : (
          <p>No hay novedades</p>
        )}
      </ul>
    </div>
  );
};

export default NewsList;
