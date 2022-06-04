import Item from "./Item";

export default function ItemList({ products }) {
    console.log(products)
  return (
    <div className="itemsList">
      <Item product={products}/>
    </div>
  );
}
