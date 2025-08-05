import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fooditems from "./Components/Fooditems";
import Errormsg from "./Components/Errormsg";
import Container from "./Components/Container";
import Foodinput from "./Components/Foodinput";
import { useState } from "react";

function App() {
  //State Management
  // let textStateArr = useState("Food item Entered by user.");
  // let textToShow = textStateArr[0];
  // let chngTextState = textStateArr[1];
  // console.log(`Current Value of textState : ${textToShow}`);

  let [textToShow, chngTextState] = useState();

  let [foodItems, setfoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setfoodItems(newItems);
      console.log(newFoodItem);
    }
  };

  return (
    <>
      <center>
        <Container>
          <h1>Healthy Foods</h1>
          <Errormsg item={foodItems}> </Errormsg>
          <Foodinput handleKeyDown={onKeyDown}></Foodinput>
          <p>{textToShow}</p>
          <Fooditems item={foodItems}></Fooditems>
        </Container>
      </center>
      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
  </Container> */}
    </>
  );
}
export default App;
