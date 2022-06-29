import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export const UsePromiseFind = (id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "products", id);

    getDoc(productRef).then((res) => {
      setData({ ...res.data(), id: res.id });
    });
  }, [id]);

  return { data };
};
