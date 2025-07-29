import AppName from "./componentes/AppName";
import AddTodo from "./componentes/AddTodo";
import TodoItem1 from "./componentes/TodoItem1";
import TodoItem2 from "./componentes/TodoItem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />

      <div className="items-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}
export default App;
