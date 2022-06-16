import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    details,
    materials,
  } = itemDescrip;

  const [bigPicture, setBigPicture] = useState(pictureUrl);

  return (
    <>
      {itemDescrip ? (
        <main>
          <div className="itemDetail">
            <div className="itemMainDetail">
              <div className="itemMainDetail__column itemMainDetail__column--images">
                <div className="columnImages__littleImages">
                  {images?.map((item) => (
                    <img
                      key={item.id}
                      src={item.pictureUrl}
                      alt={`${brand} shoe ${item.id}`}
                      onClick={() => {
                        setBigPicture(item.pictureUrl);
                      }}
                    />
                  ))}
                </div>
                <div className="columnImages__bigImage">
                  <img
                    src={title}
                    alt={`${brand} logo`}
                    className="brandImage"
                  />
                  <img
                    src={bigPicture ? bigPicture : pictureUrl}
                    alt={`${brand} logo`}
                    className="bigImage"
                  />
                </div>
              </div>
              <div className="itemMainDetail__column itemMainDetail__column--description">
                <div className="itemMainDetail__mainData">
                  <span className="mainData__type">{type}</span>
                  <h2 className="mainData__h2">ZAPATILLAS {description}</h2>
                  <p className="mainData__price">{price}</p>
                  <span className="mainData__colors">{colors}</span>
                </div>
                <div className="itemMainDetail__secondaryData">
                  <h3 className="itemMainDetail__h3">Talle Arg:</h3>
                  <ul className="secondaryData__sizesList">
                    {sizes?.map((item) => (
                      <li key={item.id} className="secondaryData__sizesItem">
                        <p>{item.size}</p>
                      </li>
                    ))}
                  </ul>
                  {models ? (
                    <>
                      <h3 className="itemMainDetail__h3">Modelos:</h3>
                      <div className="secondaryData__models">
                        {models?.map((item) => (
                          <Link
                            reloadDocument
                            to={`/item/${item.id}`}
                            key={item.id}
                          >
                            <img
                              key={item.id}
                              src={item.pictureUrl}
                              alt={`${brand} shoe ${item.id}`}
                              className="secondaryData__model"
                            />
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
                <div className="itemCheckout">
                  <h3 className="itemMainDetail__h3">Stock Disponible</h3>
                  <div className="itemCheckout__stockCounter">
                    <p className="itemCheckout__p">
                      Cantidad:{" "}
                      <span className="itemCheckout__span">1 unidad</span>
                    </p>
                    <p className="itemCheckout__stock">(14 Disponible)</p>
                  </div>
                  <div className="itemCheckout__buttons">
                    <button className="itemCheckout__blueButton">
                      Comprar ahora
                    </button>
                    <button className="itemCheckout__grayButton">
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemAdditionalDetail">
              <div className="itemAdditionalDetail__column itemAdditionalDetail__column--details">
                <h3>Detalles</h3>
                {details?.map((item) => (
                  <p key={item.id}>{item.detail}</p>
                ))}
              </div>
              <div className="itemAdditionalDetail__column itemAdditionalDetail__column--materials">
                <h3>Especificaciones</h3>
                <ul>
                  {materials?.map((item) => (
                    <li key={item.id}>{item.material}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      ) : null}
    </>
  );
}
