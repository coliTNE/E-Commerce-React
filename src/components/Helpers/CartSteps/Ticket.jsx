import { Link } from "react-router-dom";

export default function Ticket({ ticket }) {
  const { buyer, items } = ticket;
  return (
    <main className="main__cart">
      <div className="cart">
        <h1>Gracias por comprar en E-colimmerce, {buyer?.name} !</h1>
        <div className="main__cartTicket">
          <div className="main__cartTicketDiv">
            <h2>Productos comprados</h2>
            {items?.map((item) => (
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
            <h3>Total de tu compra: ${ticket.total?.toLocaleString("es")}</h3>
          </div>
          <div className="main__cartTicketDiv main__cartTicketDiv--data">
            <h2>Datos de tu compra</h2>
            <div className="ticketData">
              <div>
                <p>Tu codigo de compra: {ticket.id}</p>
                <p>Email: {buyer?.email}</p>
                <p>Celular: {buyer?.mobile}</p>
              </div>
              <Link to="/inicio">
                <button className="emptyCart__button">Volver al inicio</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
