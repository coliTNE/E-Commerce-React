import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export const UsePromise = (brand) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const shoesCollection = collection(db, "products");

    if (brand) {
      const q = query(shoesCollection, where("brand", "==", brand));
      getDocs(q).then((res) => {
        setData(
          res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
    } else {
      getDocs(shoesCollection).then((res) => {
        setData(
          res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      });
    }
  }, [brand]);
  return { data };
};
