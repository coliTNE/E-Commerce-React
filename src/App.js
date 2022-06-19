import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Category from "./components/Category";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/category/:brand" element={<Category />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <footer />
      </BrowserRouter>
    </>
  );
}

export default App;
