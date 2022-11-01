import style from "../styles/leftpanel.module.css";
import pokeballimg from "../pokeball.png";
import { Dpad } from "./Dpad";
import { useState } from "react";
import { Pokeball } from "./Pokeball";

export const LeftPanel = ({ pokemon, loading, setLoading }) => {


  let id = ("00" + pokemon.id).slice(-3);
  const img = pokemon.sprites
    ? `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
    : pokeballimg;

  const pokeName = pokemon.sprites ? pokemon.name.toUpperCase() : "";

  return (
    <div className={style.leftside}>
      <div className={style.topcontainer}>
        <div className={style.whitecircle}>
          <div className={style.bluecircle}></div>
        </div>

        <div className={style.redcircle}></div>
        <div className={style.yellowcircle}></div>
        <div className={style.greencircle}></div>
      </div>

      <div className={style.screencontainer}>
        <div className={style.screenborder}>
          <div className={style.screen}>
     
              <img src={img} alt="pokemon sprite"></img>
     
          </div>
          <div className={style.bordercircle}></div>
        </div>
      </div>

      <div className={style.bottomcontainer}>
        <div className={style.greenbox}>{pokemon ? pokeName : ""}</div>
        <div>
          <Dpad />
        </div>
      </div>
    </div>
  );
};
