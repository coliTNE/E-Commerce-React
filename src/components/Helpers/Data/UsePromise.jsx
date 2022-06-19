import { useEffect } from "react";
import { useState } from "react";

export const UsePromise = (array, brand) => {
  const [data, setData] = useState([]);


//  CREAR SWITCH CASE PARA FILTRAR DE CUALQUIER FORMA POSIBLE

  useEffect(() => {
    const shoesList = new Promise((res, rej) => {
      setTimeout(() => {
        if (brand) {
          res(array.filter((item) => item.brand == brand));
        } else {
          res(array);
        }
      }, 2);
    });
    shoesList.then((res) => {
      setData(res);
    });
  }, [array]);

  return { data };
};
