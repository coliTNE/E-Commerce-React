const styles = {
  flex: "flex",
  spaceB: "space-between",
  center: "center",
  liPadding: "0 1em",
  liSize: "1.1rem",
  zero: 0,
};

function NavBar() {
  return (
    <header
      style={{
        width: "100%",
        position: "fixed",
        left: styles.zero,
        top: styles.zero,
        backgroundColor: "#fff",
        borderBottom: "solid 1px #EAEAEA",
      }}
    >
      <nav
        style={{
          width: "65%",
          margin: "0 auto",
          display: styles.flex,
          color: "#3F3844",
          justifyContent: styles.spaceB,
          alignItems: styles.center,
        }}
      >
        <h1 style={{ fontSize: "1.7rem", letterSpacing: ".6px" }}>
          E-Colimmerce
        </h1>
        <ul style={{ listStyle: "none", display: styles.flex }}>
          <a href="" style={{ textDecoration: "none", color: "#3F3844" }}>
            <li style={{ padding: styles.liPadding, fontSize: styles.liSize }}>
              Inicio
            </li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#3F3844" }}>
            <li style={{ padding: styles.liPadding, fontSize: styles.liSize }}>
              Contacto
            </li>
          </a>
          <a href="" style={{ textDecoration: "none", color: "#3F3844" }}>
            <li style={{ padding: styles.liPadding, fontSize: styles.liSize }}>
              Carrito
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
