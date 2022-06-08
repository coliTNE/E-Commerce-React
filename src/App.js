import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
