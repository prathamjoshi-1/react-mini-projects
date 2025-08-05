import { useState } from "react";
import Item from "./Item";

const Fooditems = ({ item }) => {
  let [activeItems, setactiveItems] = useState([]);

  let onBuyButton = (obj, event) => {
    let newItem = [...activeItems, obj];
    setactiveItems(newItem);
  };

  return (
    <ul className="list-group">
      {item.map((obj) => (
        <Item
          key={obj}
          food={obj}
          bought={activeItems.includes(obj)}
          handleBuyBtnClick={(event) => onBuyButton(obj, event)}
        ></Item>
      ))}
    </ul>
  );
};
export default Fooditems;
