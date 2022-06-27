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
                <h2 className="cart__center">Precio</h2>
                <h2 className="cart__center">Cantidad</h2>
                <h2 className="cart__center">Subtotal</h2>
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
                  <div className="cart__center">{`$ ${item.price.toLocaleString(
                    "es"
                  )}`}</div>
                  <div className="cart__center">{item.qty}</div>
                  <div className="cart__center">{`$ ${(
                    item.qty * item.price
                  ).toLocaleString("es")}`}</div>
                </div>
              ))}
              <button className="cart__back">
                <Link to="/inicio">Continuar Comprando</Link>
              </button>
            </div>
            <div className="cart__payment">
              <div className="cart__payment--grid">
                <h2>Resumen de compra</h2>
                <div className="cart__paymentCalc cart__paymentCalc--sub">
                  <h2 className="cart__center">Subtotal</h2>
                  <p className="cart__center">{`$ ${getItemPrice().toLocaleString(
                    "es"
                  )}`}</p>
                </div>
                <div className="cart__paymentCalc cart__paymentCalc--total">
                  <h2 className="cart__center">Total</h2>
                  <p className="cart__center">{`$ ${getItemPrice().toLocaleString(
                    "es"
                  )}`}</p>
                </div>
              </div>
            </div>
            <div className="cart__paymentButton">
              <button>Iniciar pago</button>
            </div>
          </div>
        </main>
      ) : (
        <main className="main__emptyCart">
          <div className="emptyCart">
            <img
              src="https://www.rosarioseguridad.com.ar/images/carro-vacio.png"
              alt="carrito vacio"
            />
            <h1>Tu carrito esta vacío</h1>
            <Link to="/inicio">
              <button className="emptyCart__button">Empezar a comprar</button>
            </Link>
          </div>
        </main>
      )}
    </>
  );
}
