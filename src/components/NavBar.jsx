import CardsWidget from "./CardsWidget";


function NavBar() {
    return (
        <nav className="nav">
            <h1>E-Colimmerce</h1>
            <ul className="nav__ul">
                <a href=""><li className="nav__li">Inicio</li></a>
                <a href=""><li className="nav__li">Nosotros</li></a>
                <a href=""><li className="nav__li">Contacto</li></a>
                <a href=""><li className="nav__li nav__li--img"><CardsWidget/></li></a>
            </ul>
        </nav>
    )
}

export default NavBar;