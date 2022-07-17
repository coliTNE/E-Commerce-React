import { createContext, useState, useEffect } from "react";

export const MyContext = createContext({});

const { Provider } = MyContext;

const localCart = () => {
  let storage = localStorage.getItem("cart");

  if (storage) {
    return JSON.parse(storage);
  } else {
    return [];
  }
};

export default function CartContext({ children }) {
  const [cart, setCart] = useState(localCart());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  const addItem = (item, qty, size) => {
    const newItem = {
      ...item,
      qty,
      sizes: size,
    };
    if (isInCart(newItem.id)) {
      const findProduct = cart.find((item) => item.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].qty += qty;
      setCart(auxArray);
    } else {
      setCart([...cart, newItem]);
    }
  };
  const emptyCart = () => {
    setCart([]);
  };
  const deleteItem = (id) => {
    return setCart(cart.filter((item) => item.id !== id));
  };
  const getItemQty = () => {
    return cart.reduce((acc, item) => (acc += item.qty), 0);
  };
  const getItemPrice = () => {
    return cart.reduce((acc, item) => (acc += item.qty * item.price), 0);
  };

  return (
    <Provider
      value={{
        cart,
        isInCart,
        addItem,
        deleteItem,
        emptyCart,
        getItemQty,
        getItemPrice,
      }}
    >
      {children}
    </Provider>
  );
}
