import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import AsicsLogo from "../Images/asics.png";

export default function ItemDetailContainer() {
  const ItemData = {
    id: 1,
    brand: "asics",
    title: AsicsLogo,
    type: "Running",
    description: "ASICS TAIKAI",
    price: "$11.990",
    colors: "Rojo/Negro/Blanco",
    pictureUrl:
      "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-taikai-roja--13001011b095601-1.jpg",
    images: [
      {
        id: 1,
        pictureUrl:
          "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-taikai-roja--13001011b095601-1.jpg",
      },
      {
        id: 2,
        pictureUrl:
          "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-taikai-roja--13001011b095601-2.jpg",
      },
      {
        id: 3,
        pictureUrl:
          "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-taikai-roja--13001011b095601-4.jpg",
      },
      {
        id: 4,
        pictureUrl:
          "https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-running-asics-taikai-roja--13001011b095601-5.jpg",
      },
      {
        id: 5,
        pictureUrl:
          "https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-running-asics-taikai-roja-13001011b095601-6.jpg",
      },
      {
        id: 6,
        pictureUrl:
          "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-taikai-roja-13001011b095601-7.jpg",
      },
      {
        id: 7,
        pictureUrl:
          "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-taikai-roja-13001011b095601-8.jpg",
      },
    ],
    sizes: [
      {
        id: 1,
        size: 40,
      },
      {
        id: 2,
        size: 41,
      },
      {
        id: 3,
        size: 42,
      },
      {
        id: 4,
        size: 43,
      },
      {
        id: 5,
        size: 44,
      },
    ],
    models: [
      {
        id: 1,
        pictureUrl:
          "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-taikai-negra-44019627-13001011b095004-1.jpg",
      },
      {
        id: 2,
        pictureUrl:
          "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-taikai-roja-13001011b095600-1.jpg",
      },
      {
        id: 3,
        pictureUrl:
          "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-taikai-petroleo-13001011b095401-1.jpg",
      },
      {
        id: 4,
        pictureUrl:
          "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-taikai-negra-13001011b095007-1.jpg",
      },
      {
        id: 5,
        pictureUrl:
          "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-taikai-petroleo-25715686-13001011b095006-1.jpg",
      },
    ],
  };

  const [item, setItem] = useState([]);

  useEffect(() => {
    const itemPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(ItemData);
      }, 2000);
    });
    itemPromise.then((res) => {
      setItem(res);
    });
  });
  console.log(item);
  return (
    <div className="main__container">
      <ItemDetail itemDescrip={item} />
    </div>
  );
}
