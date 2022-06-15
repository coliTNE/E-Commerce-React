import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        </Routes>
        <footer />
      </BrowserRouter>
    </>
  );
}

export default App;
