import styles from "../styles/rightpanel.module.css";
import { RightPanelBoxes } from "./RightPanelBoxes";

export const RightPanel = () => {
  return (
    <div className={styles.rightside}>
      <div className={styles.topcontainer}>
        <div className={styles.top}></div>
      </div>
      <div className={styles.middlecontainer}>
        <RightPanelBoxes />
      </div>
      <div className={styles.bottomcontainer}></div>
    </div>
  );
};
