import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartWidget from "./CartWidget";
import NavStringsContainer from "./Helpers/NavStrings/NavStringsContainer";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function NavBar() {
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(!visibility);
  };
  return (
    <>
      <header>
        <div className="container container--header">
          <nav className="nav">
            <div className="nav__dropDown">
              <button className="nav-toggle" onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} />
              </button>
              <ul className={visibility ? "nav__list--visible" : "nav__list"}>
                <NavStringsContainer />
              </ul>
            </div>
            <h1>E-Colimmerce</h1>

            <CartWidget />
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
