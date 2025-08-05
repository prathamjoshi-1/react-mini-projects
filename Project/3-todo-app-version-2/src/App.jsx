import AppName from "./componentes/AppName";
import AddTodo from "./componentes/AddTodo";
import "./App.css";
import Items from "./componentes/Items";
function App() {
  const list = [
    {
      name: "Buy Milk",
      date: "4/10/2023",
    },
    {
      name: "Go to Gym",
      date: "04/10/2023",
    },
    {
      name: "Go to College",
      date: "04/10/2023",
    },
    {
      name: "Chalo Mumbai",
      date: "17/01/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Items list={list}></Items>
    </center>
  );
}
export default App;
