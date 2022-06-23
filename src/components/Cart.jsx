import React from "react";
import { useContext } from "react";
import { MyContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, deleteItem, emptyCart, getItemPrice } = useContext(MyContext);

  console.log(cart);
  return (
    <>
      {cart.length > 0 ? (
        <main className="main__cart">
          <div className="cart">
            <div className="cart__checkout">
              <div className="cart__title">
                <h1>Carrito de Compras</h1>
                <button className="cart__clear" onClick={emptyCart}>
                  Eliminar Carrito
                </button>
              </div>
              <div className="cart__grid">
                <h2>Producto</h2>
                <h2>Precio</h2>
                <h2>Cantidad</h2>
                <h2>Subtotal</h2>
              </div>
              {cart?.map((item) => (
                <div className="cart__container cart__grid">
                  <div className="cart__product">
                    <div className="cart__imgContainer">
                      <img
                        src={item.pictureUrl}
                        alt={`Zapatilla ${item.brand}`}
                        className="cart__img"
                      />
                    </div>
                    <div className="cart__item">
                      <h2>{item.name}</h2>
                      <button
                        onClick={() => {
                          deleteItem(item.id);
                        }}
                      >
                        Eliminar producto
                      </button>
                    </div>
                  </div>
                  <div className="cart__price">{`$ ${item.price.toLocaleString(
                    "es"
                  )}`}</div>
                  <div className="cart__qty">{item.qty}</div>
                  <div className="cart__subtotal">{`$ ${(
                    item.qty * item.price
                  ).toLocaleString("es")}`}</div>
                </div>
              ))}
              <button className="cart__back">
                <Link to="/inicio">Continuar Comprando</Link>
              </button>
            </div>
            <div className="cart__payment">
              <h3>Resumen de compra</h3>
              <div className="cart__paymentCalc cart__paymentCalc--sub">
                <h2>Subtotal</h2>
                <p>{`$ ${getItemPrice()}`}</p>
              </div>
              <div className="cart__paymentCalc cart__paymentCalc--total">
                <h2>Total</h2>
                <p>{`$ ${getItemPrice()}`}</p>
              </div>

              <button className="cart__paymentButton">INICIAR PAGO</button>
            </div>
          </div>
        </main>
      ) : (
        <></>
      )}
    </>
  );
}
