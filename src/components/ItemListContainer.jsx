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
      <div className="banner__container">
        <img
          src="https://www.paris.cl/on/demandware.static/-/Sites/es_CL/dw0c086768/marketing/imagenes/zapatillas/banner_zapatillas_larga-vida_mar22.jpg"
          alt="zapatillas banner"
        />
      </div>
      <div className="main__container">
        <CategoryContainer />
        <ItemList products={data} />
      </div>
    </main>
  );
}
