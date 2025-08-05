import Todoitem from "./Todoitem";
const Items = ({ list }) => {
  return (
    <>
      <div className="items-container">
        {list.map((obj1) => (
          <Todoitem todoName={obj1.name} todoDate={obj1.date}></Todoitem>
        ))}
      </div>
    </>
  );
};
export default Items;
