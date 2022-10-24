import styles from "../styles/leftpanel.module.css";

export const LeftPanel = ({ pokemon }) => {

    const img = pokemon.sprites ? pokemon.sprites.front_default : ''

  return (
    <div className={styles.leftside}>
      <div className={styles.topcontainer}>
        <div className={styles.bluecircle}></div>
        <div className={styles.redcircle}></div>
        <div className={styles.yellowcircle}></div>
        <div className={styles.greencircle}></div>
      </div>

      <div className={styles.screencontainer}>
        <div className={styles.screenborder}>
          <div className={styles.screen}>
            <img src={img} alt="pokemon sprite"></img>
          </div>
        </div>
      </div>

      <div className={styles.bottomcontainer}>
        <div className={styles.greenbox}>
            {pokemon.name}
        </div>
      </div>
    </div>
  );
};
