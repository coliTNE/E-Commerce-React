import React from "react";

import { Link } from "react-router-dom";

import CategoryContainer from "./Helpers/Category/CategoryContainer";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="main__banner">
          <Link to="/category">
            <img
              className="banner__img img-desktop"
              src="https://www.paris.cl/on/demandware.static/-/Sites/es_CL/dw0c086768/marketing/imagenes/zapatillas/banner_zapatillas_larga-vida_mar22.jpg"
              alt="zapatillas banner"
            />
          </Link>
          <Link to="/category">
            <img
              className="banner__img img-mobile"
              src="https://www.paris.cl/on/demandware.static/-/Sites/es_CL/dwa3df72ed/marketing/imagenes/zapatillas/banner_zapatillas_larga-vida_mar22_mob.jpg"
              alt="zapatillas banner"
            />
          </Link>
        </div>
        <CategoryContainer />
      </div>
    </main>
  );
}
