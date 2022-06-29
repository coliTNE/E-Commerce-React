import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import CartContext from "./components/CartContext";
import Category from "./components/Category";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { initializeApp } from "firebase/app";

function App() {
  initializeApp({
    apiKey: "AIzaSyDVuNQhSf9jue6fiEvrjFUuffM59WWH2iQ",
    authDomain: "e-colimmerce.firebaseapp.com",
    projectId: "e-colimmerce",
    storageBucket: "e-colimmerce.appspot.com",
    messagingSenderId: "92972840106",
    appId: "1:92972840106:web:02ee009dfb76ea67640cd3",
  });
  return (
    <BrowserRouter>
      <CartContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/category/:brand" element={<Category />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <footer />
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
