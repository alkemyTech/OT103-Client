import React from "react";
import { Link } from "react-router-dom";

export const SideBar = ({ left = -100 }) => {
  return (
    <aside className="backoffice__aside" style={{ left: `${left}%` }}>
      <nav className="backoffice__nav">
        <Link className="backoffice__item" to="/">
          Inicio
        </Link>
        <Link className="backoffice__item" to="#">
          Nosotros
        </Link>
        <Link className="backoffice__item" to="#">
          Actividades
        </Link>
        <Link className="backoffice__item" to="#">
          Novedades
        </Link>
        <Link className="backoffice__item" to="#">
          Testimonios
        </Link>
        <Link className="backoffice__item" to="#">
          Contacto
        </Link>
      </nav>
    </aside>
  );
};
