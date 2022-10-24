import { useState } from "react";
import style from "../styles/search.module.css";

export const Search = ({ setPokemon }) => {
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
    <div className={style.searchcontainer}>
      <div className={style.searchbox}>
        <form onSubmit={handleSubmit}>
          <label>Enter a Pokemon's name or ID </label>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
