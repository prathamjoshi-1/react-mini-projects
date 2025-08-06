import { useState } from "react";

function AddTodo({ onNew }) {
  const [todoName, setTodoName] = useState("");

  const [todoDate, setTodoDate] = useState("");

  const handleNameChng = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChng = (event) => {
    setTodoDate(event.target.value);
  };
  const handleOnBtnClick = () => {
    onNew(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChng}
          ></input>
        </div>
        <div className="col-3">
          <input type="date" value={todoDate} onChange={handleDateChng}></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleOnBtnClick}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
