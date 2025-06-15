import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import  About  from "./MyComponents/About";
import { Footer } from "./MyComponents/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function Home({ todos, onDelete, addTodo }) {
  return (
    <>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

function App() {
  // Initialize todos from localStorage
  let initTodo = [];
  try {
    const saved = localStorage.getItem("todos");
    if (saved) initTodo = JSON.parse(saved);
  } catch {}

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  const addTodo = (title, desc) => {
    const sno = todos.length ? todos[todos.length - 1].sno + 1 : 1;
    setTodos([...todos, { sno, title, desc }]);
  };

  return (
    <Router>
      <Header title="Taskify" searchBar={false} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              todos={todos}
              onDelete={onDelete}
              addTodo={addTodo}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
