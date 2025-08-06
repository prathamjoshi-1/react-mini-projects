import AppName from "./componentes/AppName";
import AddTodo from "./componentes/AddTodo";
import "./App.css";
import Items from "./componentes/Items";
import { useState } from "react";
import Welcome from "./componentes/Welcome";

function App() {
  const list = [];
  const [Todo, setTodo] = useState([]);

  const onNewItem = (itemName, itemDate) => {
    // console.log(`New Item Added : ${itemName} Date : ${itemDate}`);
    const newTodoItems = [...Todo, { name: itemName, date: itemDate }];
    setTodo(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = Todo.filter((item) => item.name != todoItemName);
    setTodo(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNew={onNewItem}></AddTodo>
      {Todo.length === 0 && <Welcome></Welcome>}
      <Items list={Todo} onDeleteClick={handleDeleteItem}></Items>
    </center>
  );
}
export default App;
