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

export default function Cart() {
  const { cart, deleteItem, emptyCart, getItemPrice } = useContext(MyContext);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");
  const [ticket, setTicket] = useState([]);

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  const stepCall = (num) => {
    setStep(num);
  };

  const createOrder = () => {
    if (name !== "" && email !== "" && cel !== "") {
      const order = {
        buyer: { name, email, cel },
        items: cart,
        total: getItemPrice(),
        date: serverTimestamp(),
      };
      addDoc(orderCollection, order).then(({ id }) => {
        createTicket(id);
      });
      stepCall(3);
    } else {
      alert("completa todos los datos");
    }
  };

  const createTicket = (id) => {
    const ticketRef = doc(db, "orders", id);
    getDoc(ticketRef).then((res) => {
      setTicket({ ...res.data(), id: res.id });
    });
  };

  return (
    <>
      {step === 1 &&
        (cart.length > 0 ? (
          <main className="main__cart">
            <div className="cart">
              <div>
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
                  <div className="cart__container cart__grid" key={item.id}>
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
                    <div className="cart__center">{`$ ${item.price?.toLocaleString(
                      "es"
                    )}`}</div>
                    <div className="cart__center">{item.qty}</div>
                    <div className="cart__center">{`$ ${(
                      item.qty * item.price
                    )?.toLocaleString("es")}`}</div>
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
              </div>
              <div className="cart__paymentButton">
                <button onClick={() => stepCall(2)}>Iniciar pago</button>
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
          <div className="cart">
            <div className="cart__header">
              <h1>Datos para el Envío</h1>
              <button
                className="cart__checkoutBack"
                onClick={() => stepCall(1)}
              >
                Volver al carrito
              </button>
            </div>
            <div className="cart__checkout">
              <div className="cart__inputs">
                <input
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ingrese su Nombre"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingrese su Email"
                />
                <input
                  onChange={(e) => setCel(e.target.value)}
                  placeholder="Ingrese su numero de celular"
                />
                <button className="cart__checkoutButton" onClick={createOrder}>
                  Comprar
                </button>
              </div>
              <div className="cart__purchase">
                <h2>Resumen de Compra</h2>
                {cart?.map((item) => (
                  <div className="cart__purchaseItem" key={item.id}>
                    <img
                      src={item.pictureUrl}
                      alt={`Zapatilla ${item.brand}`}
                      className="cart__img"
                    />
                    <div>
                      <h4>{item.name}</h4>
                      <div className="purchaseItem__detail">
                        <p>{`${item.qty} unidades`}</p>
                        <p>{`$ ${item.price?.toLocaleString("es")} c/u`}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}
      {step === 3 && (
        <main className="main__cart">
          <div className="cart">
            <h1>Gracias por comprar en E-colimmerce, {ticket.buyer?.name} !</h1>
            <div className="main__cartTicket">
              <div className="main__cartTicketDiv">
                <h2>Productos comprados</h2>
                {ticket.items?.map((item) => (
                  <div className="cart__purchaseItem" key={item.id}>
                    <img
                      src={item.pictureUrl}
                      alt={`Zapatilla ${item.brand}`}
                      className="cart__img"
                    />
                    <div>
                      <h4>{item.name}</h4>
                      <div className="purchaseItem__detail">
                        <p>{`${item.qty} unidades`}</p>
                        <p>{`$ ${item.price?.toLocaleString("es")} c/u`}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <h3>
                  Total de tu compra: ${ticket.total?.toLocaleString("es")}
                </h3>
              </div>
              <div className="main__cartTicketDiv main__cartTicketDiv--data">
                <h2>Datos de tu compra</h2>
                <div className="ticketData">
                  <div>
                    <p>Tu codigo de compra: {ticket.id}</p>
                    <p>Email: {ticket.buyer?.email}</p>
                    <p>Celular: {ticket.buyer?.cel}</p>
                  </div>
                  <Link to="/inicio">
                    <button className="emptyCart__button">
                      Volver al inicio
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
