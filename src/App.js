import { useState } from "react";
import "./App.css";
import { LeftPanel } from "./components/LeftPanel";
import { RightPanel } from "./components/RightPanel";
import { Spine } from "./components/Spine";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((data) => {
        if (data.status === 404) {
          alert("Pokemon Not Found");
        }
        return data.json();
      })
      .then((data) => {
        setPokemon(data);
      });
    setInput("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter a Pokemon's name or ID
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
      <div className="Pokedex">
        <LeftPanel pokemon={pokemon} />
        <RightPanel pokemon={pokemon} />
      </div>
    </div>
  );
}

export default App;
