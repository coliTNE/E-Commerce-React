import React, { useEffect, useState } from "react";
import ItemList from "./Helpers/Items/ItemList";
import ItemCount from "./ItemCount";
import NikeLogo from "../Images/nike.png";
import AdidasLogo from "../Images/adidas.png";
import AsicsLogo from "../Images/asics.png";

export default function ItemListContainer() {
  const Shoes = [
    {
      id: 1,
      brand: "asics",
      title: AsicsLogo,
      type: "Running",
      description: "ASICS PATRIOT 12 NOOSA GRIS",
      price: "$11.990",
      pictureUrl:
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-running-asics-patriot-12-noosa-gris-13001011b264021-1.jpg",
      secondPictureurl: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-running-asics-patriot-12-noosa-gris-13001011b264021-2.jpg",
    },
    {
      id: 2,
      brand: "asics",
      title: AsicsLogo,
      type: "Running",
      description: "ASICS GEL-NIMBUS 24 AZUL",
      price: "$33.490",
      pictureUrl:
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-gel-nimbus-24-azul-39551509-13001011b359003-1.jpg",
      secondPictureurl: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-gel-nimbus-24-azul-39551509-13001011b359003-2.jpg",
    },
    {
      id: 3,
      brand: "adidas",
      title: AdidasLogo,
      type: "Running",
      description: "ADIDAS GALAXY 5 GRIS",
      price: "$12.499",
      pictureUrl:
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-galaxy-5-gris-69496796-100010h04594001-1.jpg",
      secondPictureurl: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-running-adidas-galaxy-5-gris-69496796-100010h04594001-2.jpg",
    },
    {
      id: 4,
      brand: "nike",
      title: NikeLogo,
      type: "Moda",
      description: "NIKE SB CHARGE SUEDE AZUL",
      price: "$13.909",
      pictureUrl:
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-nike-sb-charge-suede-azul-510010ct3463401-1.jpg",
      secondPictureurl: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-nike-sb-charge-suede-azul-510010ct3463401-2.jpg",
    },
    {
      id: 5,
      brand: "adidas",
      title: AdidasLogo,
      type: "Moda",
      description: "ADIDAS GRAND COURT BASE BLANCA",
      price: "$12.999",
      pictureUrl:
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatilla-adidas-grand-court-base-blanca-97487218-100010ee7904001-1.jpg",
      secondPictureurl: "https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatilla-adidas-grand-court-base-blanca-97487218-100010ee7904001-2.jpg",
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const shoesList = new Promise((res, rej) => {
      setTimeout(() => {
        res(Shoes);
      }, 2000);
    });
    shoesList.then((res) => {
      setProducts(res);
    });
  });

  console.log(products);

  return (
    <>
      <div className="main__container">
        <ItemCount stock={10} initial={1} />
      </div>
      <div className="main__container">
        <ItemList products={products} />
      </div>
    </>
  );
}
