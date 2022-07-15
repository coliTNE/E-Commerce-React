import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

export default function ItemDetail({ itemDescrip }) {
  const {
    brand,
    shoe,
    type,
    name,
    colors,
    price,
    fees,
    pictureUrl,
    images,
    sizes,
    details,
    materials,
    stock,
  } = itemDescrip;

  const [bigPicture, setBigPicture] = useState(pictureUrl);
  const [productSize, setProductSize] = useState();

  return (
    <div className="container itemDetail__container">
      {itemDescrip && (
        <div className="desktop__container">
          <div className="itemDetail">
            <div className="itemDetail__titleBox-mobile">
              <span className="mainData__type">{type}</span>
              <h2>
                {shoe} {name}
              </h2>
            </div>

            <div className="itemMainDetail">
              <div className="itemMainDetail__column itemMainDetail__column-images">
                <div className="columnImages__littleImages columnImages__littleImages-desktop">
                  {images?.map((item) => (
                    <div
                      key={item.id}
                      className={
                        bigPicture === item.pictureUrl
                          ? "littleImages littleImages-active"
                          : "littleImages"
                      }
                    >
                      <img
                        src={item.pictureUrl}
                        alt={`${brand} shoe ${item.id}`}
                        onClick={() => {
                          setBigPicture(item.pictureUrl);
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="columnImages__littleImages columnImages__littleImages-mobile">
                  {images?.map((item) => (
                    <div key={item.id}>
                      <FontAwesomeIcon
                        icon={faCircleDot}
                        onClick={() => setBigPicture(item.pictureUrl)}
                        className={
                          bigPicture === item.pictureUrl
                            ? "dot dot-active"
                            : "dot"
                        }
                      />
                    </div>
                  ))}
                </div>
                <div className="columnImages__bigImage">
                  <img
                    src={bigPicture ? bigPicture : pictureUrl}
                    alt={`${brand} logo`}
                    className="bigImage"
                  />
                </div>
              </div>
              <div className="itemMainDetail__column itemMainDetail__column-description">
                <div className="itemMainDetail__mainData">
                  <div className="itemDetail__titleBox-desktop">
                    <span className="mainData__type">{type}</span>
                    <h2>
                      {shoe} {name}
                    </h2>
                  </div>
                  <div className="mainData__purchase">
                    <p className="mainData__price">{`$ ${price?.toLocaleString(
                      "es"
                    )}`}</p>
                    {fees && (
                      <p className="mainData__fees">
                        {fees} cuotas sin interés de{" "}
                        {`$ ${(price / fees).toLocaleString("es")}`}
                      </p>
                    )}
                  </div>

                  <span className="mainData__colors">Colores: {colors}</span>
                </div>
                {stock > 0 ? (
                  <div className="itemMainDetail__sizesList">
                    <h3>Talle Arg:</h3>
                    <ul className="sizesList">
                      {sizes?.map((item) => (
                        <li
                          key={item.id}
                          onClick={() => setProductSize(item.size)}
                          className={`${
                            productSize === item.size
                              ? "sizesItem sizesItem--active"
                              : "sizesItem"
                          }`}
                        >
                          <p>{item.size}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
                {stock > 0 ? (
                  <ItemCount
                    itemDescrip={itemDescrip}
                    initial={1}
                    productSize={productSize}
                  />
                ) : (
                  <div className="itemCheckout">
                    <h3 className="itemMainDetail__h3--stockLess">Sin Stock</h3>
                  </div>
                )}
              </div>
            </div>
            <div className="itemAdditionalDetail">
              <div className="itemAdditionalDetail__column itemAdditionalDetail__column-details">
                <h3>Detalles</h3>
                {details?.map((item) => (
                  <p key={item.id}>{item.detail}</p>
                ))}
              </div>
              <div className="itemAdditionalDetail__column itemAdditionalDetail__column-materials">
                <h3>Especificaciones</h3>
                <ul>
                  {materials?.map((item) => (
                    <li key={item.id}>{item.material}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
