import ItemList from "./ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryContainer from "./Helpers/Category/CategoryContainer";
import Loading from "./Helpers/AuxPages/Loading";

export default function ItemListContainer() {
  const { brand } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const db = getFirestore();
  const shoesCollection = collection(db, "products");

  useEffect(() => {
    if (brand) {
      const q = query(shoesCollection, where("brand", "==", brand));
      getDocs(q).then((res) => {
        setData(
          res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
        setLoading(true);
      });
    } else {
      getDocs(shoesCollection).then((res) => {
        setData(
          res.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
        setLoading(true);
      });
    }
  }, [brand]);

  return (
    <>
      {loading ? (
        <div className="container">
          <CategoryContainer />
          <ItemList products={data} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
