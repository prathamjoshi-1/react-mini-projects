import Todoitem from "./Todoitem";
const Items = ({ list, onDeleteClick }) => {
  return (
    <>
      <div className="items-container">
        {list.map((obj1, index) => (
          <Todoitem
            key={index}
            todoName={obj1.name}
            todoDate={obj1.date}
            onDeleteClick={onDeleteClick}
          ></Todoitem>
        ))}
      </div>
    </>
  );
};
export default Items;
