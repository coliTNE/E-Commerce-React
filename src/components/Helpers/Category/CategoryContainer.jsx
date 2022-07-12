import FeaturedBrands from "./FeaturedBrands";

export default function CategoryContainer() {
  const featuredBrands = [
    {
      id: 1,
      title: "nike",
      pictureUrl:
        "https://www.paris.cl/on/demandware.static/-/Sites/es_CL/dw20bb25a2/marketing/imagenes/zapatillas/marca_destacada_nike_zapatilla_horizontal_03mar22.jpg",
    },
    {
      id: 2,
      title: "adidas",
      pictureUrl:
        "https://www.paris.cl/on/demandware.static/-/Sites/es_CL/dw2667bddb/marketing/imagenes/zapatillas/marca_destacada_adidas_zapatilla_cuadrada_03mar22.jpg",
    },
    {
      id: 3,
      title: "vans",
      pictureUrl:
        "https://www.paris.cl/on/demandware.static/-/Sites/es_CL/dw62b1fffd/marketing/imagenes/zapatillas/marca_destacada_vans_zapatilla_cuadrada_03mar22.jpg",
      area: "vans",
    },
    {
      id: 4,
      title: "converse",
      pictureUrl:
        "https://www.paris.cl/on/demandware.static/-/Sites/es_CL/dwab496c5b/marketing/imagenes/zapatillas/marca_destacada_converse_zapatilla_horizontal_03mar22.jpg",
    },
  ];

  return (
    <div className="filter">
      <div className="filter__images">
        <img
          src="https://www.paris.cl/on/demandware.static/-/Sites/es_CL/dwc2a3140d/marketing/imagenes/zapatillas/titulo_marcas_zapatillas_03mar22_mob.png"
          alt="shoes banner"
          className="filter__img img-mobile"
        />
        <img
          src="https://www.paris.cl/on/demandware.static/-/Sites/es_CL/dw5e9573bc/marketing/imagenes/zapatillas/titulo_marcas_zapatillas_03mar22.png"
          alt="shoes banner"
          className="filter__img img-desktop"
        />
      </div>
      <div className="filter__featuredBrands">
        {featuredBrands?.map((item) => (
          <FeaturedBrands key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
