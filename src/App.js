import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <header><NavBar /></header>
      <main><ItemListContainer greeting={'Bienvenido a E-colimmerce'} name={'Christian'} /></main>
      <footer></footer>
    </>
  );
}

export default App;
