import styles from "../styles/leftpanel.module.css";

export const LeftPanel = ({ pokemon }) => {

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
            <img src={pokemon.sprites.front_default}></img>
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
