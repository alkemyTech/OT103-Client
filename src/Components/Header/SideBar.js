import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const SideBar = ({ isOpen = false }) => {
  const [statusNav, setStatusNav] = useState('closeNav')

  useEffect(() => {
    if(isOpen){
      setStatusNav('openNav');
    }else{
      setStatusNav('closeNav');
    }
  }, [isOpen])

  return (
    <aside className={`aside ${statusNav}`} >
      <nav className="aside__nav">
        <Link className="nav__item" to="/">
          Inicio
        </Link>
        <Link className="nav__item" to="/backoffice/activities">
          Actividades
        </Link>
        <Link className="nav__item" to="/backoffice/slides">
          Slides
        </Link>
        <Link className="nav__item" to="/backoffice/news">
          Novedades
        </Link>
        <Link className="nav__item" to="/backoffice/users">
          Usuarios
        </Link>
        <Link className="nav__item" to="/backoffice/organization">
          Organización
        </Link>
      </nav>
    </aside>
  );
};
