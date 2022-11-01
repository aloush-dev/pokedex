import style from "../styles/pokeball.module.css";

export const Pokeball = () => {
  return (
    <div className={style.centeronpage}>
      <div className={style.pokeball}>
        <div className={style.pokeball__button}></div>
      </div>
    </div>
  );
};
