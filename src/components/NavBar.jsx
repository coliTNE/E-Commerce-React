import CartWidget from "./CartWidget";
import CategoryContainer from "./Helpers/Category/CategoryContainer";
import NavStringsContainer from "./Helpers/NavStrings/NavStringsContainer";

function NavBar() {
  return (
    <header>
      <nav className="nav">
        <h1>E-Colimmerce</h1>
        <ul className="nav__ul">
          <NavStringsContainer />
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
