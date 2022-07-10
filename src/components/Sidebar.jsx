import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBars,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className={isShown ? "sidebar sidebar--active" : "sidebar"}>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <FontAwesomeIcon icon={faBars} onClick={() => setIsShown(!isShown)} />
        </li>
        <li className="sidebar__item">
          <Link to="inicio" className="sidebar__item--grid">
            <FontAwesomeIcon icon={faHome} />
            <p>Inicio</p>
          </Link>
        </li>
        <li className="sidebar__item sidebar__item--grid">
          <Link to="nosotros" className="sidebar__item--grid">
            <FontAwesomeIcon icon={faInfoCircle} />
            <p>Nosotros</p>
          </Link>
        </li>
        <li className="sidebar__item sidebar__item--grid">
          <Link to="contacto" className="sidebar__item--grid">
            <FontAwesomeIcon icon={faAddressCard} />
            <p>Contacto</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
