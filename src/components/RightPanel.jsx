import styles from "../styles/rightpanel.module.css";
import { RightPanelBoxes } from "./RightPanelBoxes";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useEffect, useState } from "react";

export const RightPanel = ({ pokemon, setPokemon }) => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const panels = [];

  for (let i = 0; i < 10; i++) {
    panels.push(<RightPanelBoxes key={i} />);
  }

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

  return (
    <div className={styles.rightside}>
      <div className={styles.topcontainer}>
        <div className={styles.top}>
          <div className={styles.dextext}>
            <div> Height: {pokemon.height}cm</div>
            <div> Weight: {pokemon.weight}kg</div>
          </div>
        </div>
      </div>

      <div className={styles.middlecontainer}>{panels}</div>

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

          <div className={styles.circle}></div>
        </div>
        <div className={styles.lower}>
          <div className={styles.leftbox}></div>
          <div className={styles.rightbox}></div>
        </div>
      </div>
    </div>
  );
};
