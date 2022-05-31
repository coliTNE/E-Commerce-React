import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Test from './components/Test';

function App() {
  return (
    <>
      <header><NavBar /></header>
      <main><ItemListContainer /></main>
      <footer><Test stock={10}/></footer>
    </>
  );
}

export default App;
