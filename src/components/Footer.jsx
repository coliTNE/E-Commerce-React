import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <FontAwesomeIcon icon={faCopyright} className="footer__icon" />
        <h3>2022 E-Colimmerce.</h3>
      </div>
    </footer>
  );
}
