import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { UsePromiseFind } from "./Helpers/Data/UsePromiseFind";

export default function ItemDetailContainer() {
  const { id } = useParams();

  const { data } = UsePromiseFind(id);

  return (
    <div className="main__container">
      <ItemDetail itemDescrip={data} />
    </div>
  );
}
