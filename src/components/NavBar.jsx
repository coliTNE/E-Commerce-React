import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header>
        <nav className="nav container">
          <Link to="/inicio" className="nav__tittle">
            <h1>E-Colimmerce</h1>
          </Link>
          <CartWidget />
        </nav>
      </header>
    </>
  );
}

export default NavBar;
