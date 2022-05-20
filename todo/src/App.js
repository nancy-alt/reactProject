import React, { useState,useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);
  //effect
  useEffect(()=>{
 filterHandler();
    
  },[todos,status]);
  //function
  function filterHandler() {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Nancy's Todo List</h1>
      </header>
      <Form
        setStatus={setStatus}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        sit={setInputText}
      ></Form>
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
