import CartWidget from "./CartWidget";
import NavStringsContainer from "./Helpers/NavStrings/NavStringsContainer";


function NavBar() {
    return (
        <nav className="nav">
            <h1>E-Colimmerce</h1>
            <ul className="nav__ul">
                <NavStringsContainer />
                <CartWidget />
            </ul>
        </nav>
    )
}

export default NavBar;