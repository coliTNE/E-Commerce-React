import { useContext, useState } from "react";
import { MyContext } from "./CartContext";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
  doc,
  getDoc,
} from "firebase/firestore";
import Ticket from "./Helpers/CartSteps/Ticket";
import Form from "./Helpers/CartSteps/Form";
import Loading from "./Loading";

export default function Cart() {
  const { cart, deleteItem, emptyCart, getItemPrice } = useContext(MyContext);
  const [step, setStep] = useState(1);
  const [ticket, setTicket] = useState([]);
  const [loading, setLoading] = useState(false);

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  const stepCall = (num) => {
    setStep(num);
  };

  const createOrder = (formValues) => {
    const { name, email, mobile } = formValues;
    const order = {
      buyer: { name, email, mobile },
      items: cart,
      total: getItemPrice(),
      date: serverTimestamp(),
    };
    addDoc(orderCollection, order).then(({ id }) => {
      createTicket(id);
    });
    emptyCart();
    stepCall(3);
  };

  const createTicket = (id) => {
    const ticketRef = doc(db, "orders", id);
    getDoc(ticketRef).then((res) => {
      setTicket({ ...res.data(), id: res.id });
      setLoading(true);
    });
  };

  return (
    <>
      {step === 1 &&
        (cart.length > 0 ? (
          <main className="main__cart">
            <div className="desktop__container">
              <div className="cart container">
                <div className="cart__left">
                  <div className="cart__title">
                    <h2>Carrito de Compras</h2>
                    <button className="cart__clear" onClick={emptyCart}>
                      Eliminar Carrito
                    </button>
                  </div>
                  {cart?.map((item) => (
                    <div className="cart__container" key={item.id}>
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
                          <p>Talle: {item.sizes}</p>
                          <button
                            onClick={() => {
                              deleteItem(item.id);
                            }}
                          >
                            Eliminar producto
                          </button>
                        </div>
                      </div>
                      <div className="cart__prices">
                        <div>Cantidad: {item.qty}</div>
                        <div>{`Precio $ ${item.price?.toLocaleString(
                          "es"
                        )}`}</div>
                        <div>{`Subtotal $ ${(
                          item.qty * item.price
                        )?.toLocaleString("es")}`}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart__rigth">
                  <div className="cart__payment">
                    <h2 className="cart__payment-title">Resumen de compra</h2>
                    <div>
                      <div className="cart__paymentCalc cart__paymentCalc--sub">
                        <h2 className="cart__center">Subtotal</h2>
                        <p className="cart__center">{`$ ${getItemPrice()?.toLocaleString(
                          "es"
                        )}`}</p>
                      </div>
                      <div className="cart__paymentCalc cart__paymentCalc--total">
                        <h2 className="cart__center">Total</h2>
                        <p className="cart__center">{`$ ${getItemPrice()?.toLocaleString(
                          "es"
                        )}`}</p>
                      </div>
                    </div>
                    <div className="cart__paymentButton">
                      <button onClick={() => stepCall(2)}>Iniciar pago</button>
                    </div>
                  </div>
                  <div className="cart__back">
                    <button>
                      <Link to="/inicio">Continuar Comprando </Link>
                    </button>
                  </div>
                </div>
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
        ))}
      {step === 2 && (
        <main className="main__cart">
          <div className="desktop__container container">
            <div className="cart__form">
              <div className="cart__title">
                <h2>Datos para el Envío</h2>
                <button className="cart__clear" onClick={() => stepCall(1)}>
                  Volver al carrito
                </button>
              </div>
              <div className="cart__checkout">
                <Form createOrder={createOrder} />
              </div>
            </div>
          </div>
        </main>
      )}
      {step === 3 && <>{loading ? <Ticket ticket={ticket} /> : <Loading />}</>}
    </>
  );
}
