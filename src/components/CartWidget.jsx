import React from "react";
import ShoppingCartImage from "../Images/carritovector.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./CartContext";

export default function CartWidget() {
  const { getItemQty } = useContext(MyContext);

  return (
    <div>
      <li className="nav__li nav__li--img">
        <Link to="/cart">
          <img
            src={ShoppingCartImage}
            alt="carritoMarron"
            className="nav__img"
          />
          {getItemQty() > 0 ? (
            <span className="nav__shoppingCart">{getItemQty()}</span>
          ) : (
            <></>
          )}
        </Link>
      </li>
    </div>
  );
}
