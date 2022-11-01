import styles from "../styles/rightpanel.module.css";
import { RightPanelBoxes } from "./RightPanelBoxes";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useState } from "react";
import { randomPokemonID } from "../utils/api";

export const RightPanel = ({ pokemon, setPokemon, loading, setLoading }) => {
  const [typedID, setTypedID] = useState("");
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);


  let whiteBox1 = hover ? styles.whiteboxhover : styles.whitebox;
  let whiteBox2 = hover2 ? styles.whiteboxhover : styles.whitebox;

  const nextPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id + 1}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setPokemon(data);
      });
  };

  const prevPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id - 1}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setPokemon(data);
      });
  };

  const randomPokemon = () => {
    let randomID = randomPokemonID();
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setPokemon(data);
      });
  };

  return (
    <div className={styles.rightside}>
      <div className={styles.topcontainer}>
        <div className={styles.top}>
          <div className={styles.dextext}>
            {pokemon.sprites ? (
              <>
                <div> Height: {pokemon.height}cm</div>
                <div> Weight: {pokemon.weight}kg</div>
                <div>Type: {pokemon.types[0].type.name}</div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className={styles.middlecontainer}>
      <RightPanelBoxes
          typedID={typedID}
          setTypedID={setTypedID}
        />
      </div>

      <div className={styles.bottomcontainer}>
        <div className={styles.upper}>
          <div className={styles.whiteboxes}>
            <button
              onClick={prevPokemon}
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className={whiteBox1}
            >
              <BiLeftArrow />
            </button>
            <button
              onClick={nextPokemon}
              onMouseEnter={() => {
                setHover2(true);
              }}
              onMouseLeave={() => {
                setHover2(false);
              }}
              className={whiteBox2}
            >
              <BiRightArrow />
            </button>
          </div>

          <button className={styles.circle}></button>
        </div>
        <div className={styles.lower}>
          <div onClick={randomPokemon} className={styles.leftbox}></div>
          <div className={styles.rightbox}></div>
        </div>
      </div>
    </div>
  );
};
