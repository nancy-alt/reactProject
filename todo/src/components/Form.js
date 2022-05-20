function Form(props) {
  function inputTextHandler(e) {
    console.log(e.target.value);
    props.sit(e.target.value);
  }
  function todosHandler(e) {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { text: props.inputText, completed: false, id: Math.random() * 1000 },
    ]);
    props.sit("");
  }
  const statusHandler= (e)=>{
    props.setStatus(e.target.value);
  }
  return (
    <form>
      <input
        value={props.inputText}
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
      />
      <button onClick={todosHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">ALL</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  );
}
export default Form;
