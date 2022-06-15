import React from "react";
import CategoryLayout from "./CategoryLayout";

export default function CategoryContainer() {
  const categoryOptions = [
    {
      id: 1,
      title: "adidas",
    },
    {
      id: 2,
      title: "asics",
    },
    {
      id: 3,
      title: "nike",
    },
  ];
  return (
    <div className="filter">
      <h2> Filtros:</h2>
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
