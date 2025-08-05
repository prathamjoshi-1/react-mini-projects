import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/Button-container";
import Display from "./components/Display";
function App() {
  let [displayVal, setVal] = useState("");

  const onBtnClick = (buttonText) => {
    if (buttonText === "C") {
      setVal("");
    } else if (buttonText === "=") {
      const result = eval(displayVal);
      setVal(result);
    } else {
      const newDisplayVal = displayVal + buttonText;
      setVal(newDisplayVal);
    }
  };

  return (
    <center>
      <div className={styles.calculator}>
        <Display displayVal={displayVal}></Display>
        <ButtonContainer onBtnClick={onBtnClick}></ButtonContainer>
      </div>
    </center>
  );
}
export default App;
