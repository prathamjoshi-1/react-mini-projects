import styles from "./Foodinput.module.css";
const Foodinput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        className={styles.Foodinput}
        type="text"
        placeholder="Enter Food item here"
        onKeyDown={handleKeyDown}
      ></input>
    </>
  );
};
export default Foodinput;
