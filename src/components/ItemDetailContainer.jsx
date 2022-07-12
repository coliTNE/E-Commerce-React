import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const db = getFirestore();
  const productRef = doc(db, "products", id);

  useEffect(() => {
    getDoc(productRef).then((res) => {
      setData({ ...res.data(), id: res.id });
      setLoading(true);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <main className="main__itemDetail">
          <ItemDetail itemDescrip={data} />
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
