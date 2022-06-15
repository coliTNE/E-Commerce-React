import { useEffect } from "react";
import { useState } from "react";

export const UsePromiseFind = (array, id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const shoesList = new Promise((res, rej) => {
      setTimeout(() => {
        const filtredArray = array.find(item => item.id == id)
        res(filtredArray);
      }, 2);
    });
    shoesList.then((res) => {

      setData(res);
    });
  }, [array]);

  return { data };
};
