import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { LeftPanel } from "./components/LeftPanel";
import { RightPanel } from "./components/RightPanel";
import { Search } from "./components/Search";
import { Spine } from "./components/Spine";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className="Pokedex">
        <LeftPanel
          setLoading={setLoading}
          loading={loading}
          pokemon={pokemon}
        />
        <Spine />
        <RightPanel
          setLoading={setLoading}
          loading={loading}
          pokemon={pokemon}
          setPokemon={setPokemon}
        />
      </div>

      <Search setPokemon={setPokemon} />
    </div>
  );
}

export default App;
