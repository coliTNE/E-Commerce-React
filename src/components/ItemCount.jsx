import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MyContext } from "./CartContext";

export default function ItemCount({ itemDescrip, initial }) {
  const { stock, id } = itemDescrip;
  const [counter, setCounter] = useState(initial);
  const navigate = useNavigate();

  //Contador

  const itemCounter = (stock, counter, onAdd) => {
    if ((onAdd && counter < stock) || (!onAdd && counter > initial))
      setCounter(counter + (onAdd ? 1 : -1));
  };

  //CartContext

  const { isInCart, addItem } = useContext(MyContext);

  const onAdd = () => {
    isInCart(id);
    addItem(itemDescrip, counter);
    Swal.fire({
      title: "Añadiste el producto al carrito",
      icon: "success",
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: "VER CARRITO",
      denyButtonText: "SEGUIR COMPRANDO",
      confirmButtonColor: "#53917e",
      denyButtonColor: "#5288d0",
      padding: "3rem 3rem",
      allowOutsideClick: false,
      customClass: {
        confirmButton: "swalButton swalButton--confirm",
        denyButton: "swalButton swalButton--deny",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      } else if (result.isDenied) {
        navigate("/inicio");
      }
    });
  };

  return (
    <div className="itemCheckout">
      {stock <= 10 ? (
        <h3 className="itemMainDetail__h3">
          Stock Disponible
          <span className="itemCheckout__stock--last">(Ultimas unidades!)</span>
        </h3>
      ) : (
        <h3 className="itemMainDetail__h3">Stock Disponible</h3>
      )}
      <div className="itemCheckout__stockCounter">
        <p className="itemCheckout__p">
          Cantidad: <span className="itemCheckout__span"></span>
        </p>
        <div className="itemCount">
          <div className="itemCount__Buttons">
            <button
              onClick={() => {
                itemCounter(stock, counter, false);
              }}
              className="itemCount__Operator itemCount__Operator--minus"
            >
              -
            </button>

            <p className="itemCount__Counter">
              {counter > 1 ? (
                <>{`${counter} unidades`}</>
              ) : (
                <>{`${counter} unidad`}</>
              )}{" "}
            </p>
            <button
              onClick={() => {
                itemCounter(stock, counter, true);
              }}
              className="itemCount__Operator"
            >
              +
            </button>
          </div>
        </div>
        <p className="itemCheckout__p itemCheckout__stock">{`(${stock} disponibles)`}</p>
      </div>
      <div className="itemCheckout__buttons">
        <button className="itemCheckout__grayButton" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
