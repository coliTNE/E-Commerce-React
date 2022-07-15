import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MyContext } from "./CartContext";

export default function ItemCount({ itemDescrip, initial, productSize }) {
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
    if (productSize) {
      isInCart(id);
      addItem(itemDescrip, counter, productSize);
      Swal.fire({
        title: "Añadiste el producto al carrito",
        icon: "success",
        showDenyButton: true,
        showConfirmButton: true,
        confirmButtonText: "VER CARRITO",
        denyButtonText: "SEGUIR COMPRANDO",
        confirmButtonColor: "#7a9e7e",
        denyButtonColor: "#7b9cda",
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
    } else {
      Swal.fire({
        title: "Por favor, elija una talla.",
        toast: true,
        timer: 2000,
        timerProgressBar: true,
        position: "top",
        showConfirmButton: false,
      });
    }
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
            <FontAwesomeIcon
              icon={faCircleMinus}
              className="itemCount__Operator"
              onClick={() => {
                itemCounter(stock, counter, false);
              }}
            />

            <p className="itemCount__Counter">
              {counter > 1 ? (
                <>{`${counter} unidades`}</>
              ) : (
                <>{`${counter} unidad`}</>
              )}{" "}
            </p>
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="itemCount__Operator"
              onClick={() => {
                itemCounter(stock, counter, true);
              }}
            />
          </div>
        </div>
        <p className="itemCheckout__p itemCheckout__stock">{`(${stock} disponibles)`}</p>
      </div>
      <div className="itemCheckout__buttonContainer">
        <button className="itemCheckout__button" onClick={onAdd}>
          <span>Agregar al carrito</span>
        </button>
      </div>
    </div>
  );
}
