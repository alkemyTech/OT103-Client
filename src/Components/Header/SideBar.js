import React from "react";
import { Link } from "react-router-dom";

export const SideBar = ({ left = -100 }) => {
  return (
    <aside className="backoffice__aside" style={{ left: `${left}%` }}>
      <nav className="backoffice__nav">
        <Link className="backoffice__item" to="/">
          Inicio
        </Link>
        <Link className="backoffice__item" to="/backoffice/activities">
          Actividades
        </Link>
        <Link className="backoffice__item" to="/backoffice/slides">
          Slides
        </Link>
        <Link className="backoffice__item" to="/backoffice/news">
          Novedades
        </Link>
        <Link className="backoffice__item" to="/backoffice/users">
          Usuarios
        </Link>
        <Link className="backoffice__item" to="/backoffice/organization">
          Organización
        </Link>
      </nav>
    </aside>
  );
};
