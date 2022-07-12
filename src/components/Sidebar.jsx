import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const sidebarOptions = [
    {
      id: 1,
      title: "inicio",
      icon: faHome,
    },
    {
      id: 2,
      title: "nosotros",
      icon: faInfoCircle,
    },
    {
      id: 3,
      title: "contacto",
      icon: faAddressCard,
    },
  ];
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {sidebarOptions?.map((item) => (
          <li className="sidebar__item" key={item.id}>
            <Link to={item.title} className="sidebar__link">
              <FontAwesomeIcon icon={item.icon} />
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
