import NavBar from './components/NavBar';

const position = {
  zero: 0,
}

function App() {
  return (
    <div style={{ backgroundColor: "#F7F7F7", height: "110vh" }}>
      <header style={{ width: "100%", position: "fixed", left: position.zero, top: position.zero, backgroundColor: "#fff", borderBottom: "solid 1px #EAEAEA" }}><NavBar /></header>
    </div>
  );
}

export default App;
