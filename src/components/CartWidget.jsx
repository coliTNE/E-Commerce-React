import React from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartWidget() {
  const { getItemQty } = useContext(MyContext);

  return (
    <div>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} className="nav__icon" />
        {getItemQty() > 0 ? (
          <span className="nav__shoppingCart">{getItemQty()}</span>
        ) : (
          <></>
        )}
      </Link>
    </div>
  );
}
