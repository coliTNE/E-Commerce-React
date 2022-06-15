import ItemList from "./ItemList";
import Shoes from "./Helpers/Data/Data";
import { UsePromise } from "./Helpers/Data/UsePromise";
import { useParams } from "react-router-dom";
import CategoryContainer from "./Helpers/Category/CategoryContainer";

export default function ItemListContainer() {
  const { brand } = useParams();
  const { data } = UsePromise(Shoes, brand);

  return (
      <main>
        <div className="main__container">
          <CategoryContainer />
          <ItemList products={data} />
        </div>
      </main>
  );
}
