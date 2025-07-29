function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here"></input>
        </div>
        <div class="col-3">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button type="button" className="btn btn-success kg-button">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
