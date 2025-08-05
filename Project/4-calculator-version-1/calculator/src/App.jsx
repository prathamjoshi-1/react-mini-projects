import styles from "./App.module.css";
import ButtonContainer from "./components/Button-container";
import Display from "./components/Display";
function App() {
  return (
    <center>
      <div className={styles.calculator}>
        <Display />
        <ButtonContainer />
      </div>
    </center>
  );
}
export default App;
