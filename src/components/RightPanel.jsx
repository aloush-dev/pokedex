import styles from "../styles/rightpanel.module.css";
import { RightPanelBoxes } from "./RightPanelBoxes";

export const RightPanel = () => {
  const panels = [];

  {
    for (let i = 0; i < 10; i++) {
      panels.push(<RightPanelBoxes />);
    }

    return (
      <div className={styles.rightside}>
        <div className={styles.topcontainer}>
          <div className={styles.top}></div>
        </div>
        <div className={styles.middlecontainer}>
          {panels}
        </div>
        <div className={styles.bottomcontainer}></div>
      </div>
    );
  }
};
