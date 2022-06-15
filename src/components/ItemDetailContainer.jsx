import ItemDetail from "./ItemDetail";
import Shoes from "./Helpers/Data/Data";
import { useParams } from "react-router-dom";
import { UsePromiseFind } from "./Helpers/Data/UsePromiseFind";

export default function ItemDetailContainer() {
  const { id } = useParams();

  console.log( "params" + id)

  const { data } = UsePromiseFind(Shoes,id);

  console.log("data" + data);

  return (
    <div className="main__container">
      <ItemDetail itemDescrip={data} />
    </div>
  );
}
