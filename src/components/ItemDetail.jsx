import React, { useState } from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({ itemDescrip }) {
  const {
    brand,
    type,
    name,
    colors,
    price,
    pictureUrl,
    images,
    sizes,
    details,
    materials,
  } = itemDescrip;

  const [bigPicture, setBigPicture] = useState(pictureUrl);
  const [productSize, setProductSize] = useState();

  return (
    <>
      {itemDescrip && (
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
                    src={bigPicture ? bigPicture : pictureUrl}
                    alt={`${brand} logo`}
                    className="bigImage"
                  />
                </div>
              </div>
              <div className="itemMainDetail__column itemMainDetail__column--description">
                <div className="itemMainDetail__mainData">
                  <span className="mainData__type">{type}</span>
                  <h2 className="mainData__h2">ZAPATILLAS {name}</h2>
                  <p className="mainData__price">{`$ ${price?.toLocaleString(
                    "es"
                  )}`}</p>
                  <span className="mainData__colors">{colors}</span>
                </div>
                <div className="itemMainDetail__secondaryData">
                  <h3 className="itemMainDetail__h3">Talle Arg:</h3>
                  <ul className="secondaryData__sizesList">
                    {sizes?.map((item) => (
                      <li
                        key={item.id}
                        onClick={() => setProductSize(item.size)}
                        className={`${
                          productSize === item.size
                            ? "secondaryData__sizesItem--active"
                            : "secondaryData__sizesItem"
                        }`}
                      >
                        <p>{item.size}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <ItemCount
                  itemDescrip={itemDescrip}
                  initial={1}
                  productSize={productSize}
                />
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
      )}
    </>
  );
}
