import React from "react";
import ShoppingCartImage from "../Images/carritovector.png";
import { Link } from "react-router-dom"

export default function CartWidget() {
  let shoppingCart = 0;
  return (
    <div>
      <li className="nav__li nav__li--img">
        <Link to="/cart">
          <img
            src={ShoppingCartImage}
            alt="carritoMarron"
            className="nav__img"
          />
          <span className="nav__shoppingCart">{shoppingCart}</span>
        </Link>
      </li>
    </div>
  );
}
