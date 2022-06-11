import React from "react";

export default function ItemDetail({ itemDescrip }) {
  const {
    brand,
    title,
    type,
    description,
    colors,
    price,
    pictureUrl,
    images,
    sizes,
    models,
  } = itemDescrip;

  // const [bigPicture, setBigPicture] = useState(pictureUrl)

  return (
    <div className="itemDetail">
      <div className="itemDetail__column itemDetail__column--images">
        <div className="columnImages__littleImages">
          {images?.map((item) => (
            <img
              key={item.id}
              src={item.pictureUrl}
              alt={`${brand} shoe ${item.id}`}
              // onClick={() => {
              //   setBigPicture(item.pictureUrl)
              // }}
            />
          ))}
        </div>
        <div className="columnImages__bigImage">
          <img src={title} alt={`${brand} logo`} className="brandImage" />
          <img src={pictureUrl} alt={`${brand} logo`} className="bigImage" />
        </div>
      </div>
      <div className="itemDetail__column itemDetail__column--description">
        <div className="itemDetail__mainData">
          <span className="mainData__type">{type}</span>
          <h2 className="mainData__h2">ZAPATILLAS {description} ROJA</h2>
          <p className="mainData__price">{price}</p>
          <span className="mainData__colors">{colors}</span>
        </div>
        <div className="itemDetail__secondaryData">
          <h3 className="itemDetail__h3">Talle Arg:</h3>
          <ul className="secondaryData__sizesList">
            {sizes?.map((item) => (
              <li key={item.id} className="secondaryData__sizesItem">
                <p>{item.size}</p>
              </li>
            ))}
          </ul>
          <h3 className="itemDetail__h3">Colores:</h3>
          <div className="secondaryData__models">
            {models?.map((item) => (
              <img
                key={item.id}
                src={item.pictureUrl}
                alt={`${brand} shoe ${item.id}`}
                className="secondaryData__model"
              />
            ))}
          </div>
        </div>
        <div className="itemCheckout">
          <h3 className="itemDetail__h3">Stock Disponible</h3>
          <div className="itemCheckout__stockCounter">
            <p className="itemCheckout__p">
              Cantidad: <span className="itemCheckout__span">1 unidad</span>
            </p>
            <p className="itemCheckout__stock">(14 Disponible)</p>
          </div>
          <div className="itemCheckout__buttons">
            <button className="itemCheckout__blueButton">Comprar ahora</button>
            <button className="itemCheckout__grayButton">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}
