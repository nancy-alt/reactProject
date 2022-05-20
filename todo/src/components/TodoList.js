import React from "react";
import Todo from "./Todo";
function TodoList(props) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map((todo) => (
          <Todo
            setTodos={props.setTodos}
            todos={props.todos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
