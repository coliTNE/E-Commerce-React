import ItemList from "./Helpers/Items/ItemList";
import ItemCount from "./ItemCount";
import React, { useState } from "react";

const Shoes = [
  {
    id: 1,
    title: "x",
    description: "y",
    pictureUrl: "z",
  },
  {
    id: 2,
    title: "x",
    description: "y",
    pictureUrl: "z",
  },
  {
    id: 3,
    title: "x",
    description: "y",
    pictureUrl: "z",
  },
];
export default function ItemListContainer() {
  const [products, setProducts] = useState();
  const productsList = new Promise((res, rej) => {
    setTimeout(() => {
      res(Shoes);
    }, 2000);
  });
  productsList.then((result) => {
    setProducts(result);
  });
  return (
    <div>
      <ItemCount stock={10} initial={1} />
      <ItemList products={products} />
    </div>
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
