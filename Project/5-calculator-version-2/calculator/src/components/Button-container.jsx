import styles from "./Button-container.module.css";
const ButtonContainer = ({ onBtnClick }) => {
  let buttonNames = [
    "C",
    "00",
    "%",
    "/",
    "1",
    "2",
    "3",
    "x",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "+",
    "0",
    ".",
    "⌫",
    "=",
  ];
  return (
    <>
      <div className={styles.btnContainer}>
        {buttonNames.map((name) => (
          <button className={styles.button} onClick={() => onBtnClick(name)}>
            {name}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
