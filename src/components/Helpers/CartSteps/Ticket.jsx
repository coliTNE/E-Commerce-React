import { Link } from "react-router-dom";

export default function Ticket({ ticket }) {
  const { buyer, items } = ticket;
  return (
    <main className="main__cart">
      <div className="desktop__container">
        <div className="ticket container">
          <h2 className="ticket-title">
            Gracias por comprar en E-colimmerce, {buyer?.name} !
          </h2>
          <div className="main__cartTicket">
            <div className="main__cartTicketDiv">
              <h2>Productos comprados</h2>
              {items?.map((item) => (
                <div className="cart__container" key={item.id}>
                  <div className="cart__product">
                    <div className="cart__imgContainer">
                      <img
                        src={item.pictureUrl}
                        alt={`Zapatilla ${item.brand}`}
                        className="cart__img"
                      />
                    </div>
                    <div className="cart__item cart__item-ticket">
                      <h3>{item.name}</h3>
                      <p>Talle: {item.sizes}</p>
                    </div>
                  </div>
                  <div className="cart__prices">
                    <div>Cantidad: {item.qty}</div>
                    <div>{`Precio $ ${item.price?.toLocaleString("es")}`}</div>
                    <div>{`Subtotal $ ${(item.qty * item.price)?.toLocaleString(
                      "es"
                    )}`}</div>
                  </div>
                </div>
              ))}
              <h3 className="ticket__total">
                Total de tu compra: ${ticket.total?.toLocaleString("es")}
              </h3>
            </div>
            <div className="main__cartTicketDiv main__cartTicketDiv-data">
              <h2>Datos de tu compra</h2>
              <div className="ticketData">
                <ul className="ticketData__list">
                  <li className="ticketData__item">
                    Tu codigo de compra: {ticket.id}
                  </li>
                  <li className="ticketData__item">Email: {buyer?.email}</li>
                  <li className="ticketData__item">Celular: {buyer?.mobile}</li>
                </ul>
              </div>
              <Link to="/inicio" className="ticket__button-container">
                <button className="ticket__button">Volver al inicio</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
