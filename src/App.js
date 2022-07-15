import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import CartContext from "./components/CartContext";
import Category from "./components/Category";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { initializeApp } from "firebase/app";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PageNotFound from "./components/Helpers/AuxPages/PageNotFound";
import About from "./components/Helpers/AuxPages/About";
import Contact from "./components/Helpers/AuxPages/Contact";

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
        <Sidebar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:brand" element={<Category />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
