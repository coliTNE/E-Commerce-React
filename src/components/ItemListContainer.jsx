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
    },
    {
      id: 1,
      brand: "asics",
      title: AsicsLogo,
      type: "Running",
      description: "ASICS GEL-NIMBUS 24 AZUL",
      price: "$33.490",
      pictureUrl:
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-asics-gel-nimbus-24-azul-39551509-13001011b359003-1.jpg",
    },
    {
      id: 1,
      brand: "adidas",
      title: AdidasLogo,
      type: "Running",
      description: "ADIDAS GALAXY 5 GRIS",
      price: "$12.499",
      pictureUrl:
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-adidas-galaxy-5-gris-69496796-100010h04594001-1.jpg",
    },
    {
      id: 1,
      brand: "nike",
      title: NikeLogo,
      type: "Moda",
      description: "NIKE COURT ROYALE AC MARRON",
      price: "$12.099",
      pictureUrl:
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/5/1/510010bq4222200-1.jpg",
    },
    {
      id: 1,
      brand: "adidas",
      title: AdidasLogo,
      type: "Moda",
      description: "ADIDAS GRAND COURT BASE BLANCA",
      price: "$12.999",
      pictureUrl:
        "https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatilla-adidas-grand-court-base-blanca-97487218-100010ee7904001-1.jpg",
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

// const Prod = [
//   {
//     id: 1,
//     name: "Escuadra",
//     description: "Articulo escolar",
//     stock: 10,
//   },
//   {
//     id: 2,
//     name: "Regla",
//     description: "Articulo escolar",
//     stock: 20,
//   },
//   {
//     id: 3,
//     name: "Goma",
//     description: "Articulo escolar",
//     stock: 30,
//   },
// ];

// export default function Desafip() {
//   const [productos, setProductos] = useState();

//   const carrito = new Promise((res, rej) => {
//     setTimeout(() => {
//       res(Prod);
//     }, 3000);
//   });

//   carrito.then((result) => {
//     setProductos(result);
//   });

//   return (
//     <div>
//       {productos &&
//         productos.map((item) => (
//           <div>
//             <p>{item.name}</p>
//             <p>{item.stock}</p>
//           </div>
//         ))}
//     </div>
//   );
// }
