import style from "../styles/rightpanelboxes.module.css";

export const RightPanelBoxes = ({ typedID, setTypedID }) => {


const clickBut = (num) => {
  console.log(num)
}

  return (
    <>
      <button
        onClick={(e) => {
          clickBut(e.target.value);
        }}
        value={"0"}
        className={style.box}
      >
        <div className={style.number}>0</div>
      </button>

      <button className={style.box}>
        <div className={style.number}>1</div>
      </button>

      <button className={style.box}>
        <div className={style.number}>2</div>
      </button>

      <button className={style.box}>
        <div className={style.number}>3</div>
      </button>

      <button className={style.box}>
        <div className={style.number}>4</div>
      </button>

      <button className={style.box}>
        <div className={style.number}>5</div>
      </button>

      <button className={style.box}>
        <div className={style.number}>6</div>
      </button>

      <button className={style.box}>
        <div className={style.number}>7</div>
      </button>

      <button className={style.box}>
        <div className={style.number}>8</div>
      </button>

      <button className={style.box}>
        <div className={style.number}>9</div>
      </button>
    </>
  );
};
