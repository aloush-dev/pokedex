import { useState } from "react";
import "./App.css";
import { LeftPanel } from "./components/LeftPanel";
import { RightPanel } from "./components/RightPanel";
import { Search } from "./components/Search";
import { Spine } from "./components/Spine";

function App() {
  const [pokemon, setPokemon] = useState({});

  return (
    <div className="App">
      <div className="Pokedex">
        <LeftPanel pokemon={pokemon} />
        <Spine />
        <RightPanel pokemon={pokemon} setPokemon={setPokemon} />
      </div>

      <Search setPokemon={setPokemon} />
    </div>
  );
}

export default App;
