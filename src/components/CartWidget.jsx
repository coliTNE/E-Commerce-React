import React from "react";
import ShoppingCartImage from "../Images/carritovector.png";

export default function CartWidget() {
  let shoppingCart = 0;
  return (
    <div>
      <a href="">
        <li className="nav__li nav__li--img">
          <img
            src={ShoppingCartImage}
            alt="carritoMarron"
            className="nav__img"
          />
          <span className="nav__shoppingCart">{shoppingCart}</span>
        </li>
      </a>
    </div>

  );
}
