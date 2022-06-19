import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

export default function ItemList({ products }) {
  return (
    <div className="main__shoesCarrousel" id="shoesCarrousel">
      {products?.map((product) => (
        <Link to={`/item/${product.id}`} key={product.id}>
          <Item  product={product} />
        </Link>
      ))}
    </div>
  );
}

