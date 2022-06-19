import CategoryLayout from "./CategoryLayout";
import NikeLogo from "../../../Images/nike.png";
import AdidasLogo from "../../../Images/adidas.png";
import AsicsLogo from "../../../Images/asics.png";

export default function CategoryContainer() {
  const categoryOptions = [
    {
      id: 1,
      title: "adidas",
      pictureUrl: AdidasLogo,
    },
    {
      id: 2,
      title: "asics",
      pictureUrl: AsicsLogo,
    },
    {
      id: 3,
      title: "nike",
      pictureUrl: NikeLogo,
    },
  ];
  return (
    <div className="filter">
      <img
        src="https://www.paris.cl/on/demandware.static/-/Sites/es_CL/dwc2a3140d/marketing/imagenes/zapatillas/titulo_marcas_zapatillas_03mar22_mob.png"
        alt="shoes banner"
      />
      <ul className="filter__list">
        {categoryOptions?.map((categoryOption) => (
          <CategoryLayout
            key={categoryOption.id}
            categoryOption={categoryOption}
          />
        ))}
      </ul>
    </div>
  );
}
