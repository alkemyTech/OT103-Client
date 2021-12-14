import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const NavbarDashboard = () => {
  return (
    <nav className="backoffice__nav">
      <img src={logo} className="backoffice__nav-logo" alt="Somos Más" />
      <ul className="backoffice__nav-link">
        <strong>
          <Link className="backoffice__nav-item" to="#">Inicio</Link>
        </strong>
        <strong>
          <Link className="backoffice__nav-item" to="#">Nosotros</Link>
        </strong>
        <strong>
          <Link className="backoffice__nav-item" to="#">Actividades</Link>
        </strong>
        <strong>
          <Link className="backoffice__nav-item" to="#">Novedades</Link>
        </strong>
        <strong>
          <Link className="backoffice__nav-item" to="#">Testimonios</Link>
        </strong>
        <strong>
          <Link className="backoffice__nav-item" to="#">Contacto</Link>
        </strong>
      </ul>
    </nav>
  );
};

export default NavbarDashboard;
