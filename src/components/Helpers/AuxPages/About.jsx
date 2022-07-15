import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <main className="main__about">
      <img
        src="https://images.ctfassets.net/od02wyo8cgm5/64dIGT30Mu9ACmV05QloBK/01d74cc8f3b82558b95b0f3bdc055b1d/Filter_banner-ss22-mens-4.jpg?w=1200&fit=thumb"
        alt=""
        className="about__image about__image-desktop"
      />
      <img
        src="https://i.pinimg.com/originals/6f/fb/2a/6ffb2af2f4df3ad9faabb4c4c39aed1b.jpg"
        alt=""
        className="about__image about__image-mobile"
      />
      <div className="about">
        <div className="container">
          <h2>E-Colimmerce</h2>
          <p>
            Trabajamos todos juntos para ofrecer a nuestros clientes la mejor
            calidad en zapatillas. Contamos con las mejores marcas para los
            deportistas que buscan la perfeccion, como tambien para aquellos que
            solo quieren unas duraderas zapatillas que los acompañe en su vida
            diaria. Para pedidos especificos o cualquier duda que tengas
            contactanos !
          </p>
          <div className="about__button">
            <button>
              <Link to="/contacto">
                <p>Contacto</p>
                <FontAwesomeIcon icon={faAddressCard} className="about__icon" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
