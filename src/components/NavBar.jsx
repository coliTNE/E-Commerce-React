import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [fixed, setFixed] = useState("header");

  const header = () => {
    if (window.scrollY > 0) {
      setFixed("header header.sticky");
    }
  };

  return (
    <>
      <header className={fixed} onScroll={header}>
        <nav className="nav container">
          <Link to="/inicio" className="nav__tittle">
            <div className="nav__tittle-div">
              <h1>E</h1>
            </div>
            <h2>-Colimmerce</h2>
          </Link>
          <CartWidget />
        </nav>
      </header>
    </>
  );
}

export default NavBar;

document.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
