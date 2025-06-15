import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Task List</h3>
      {todos.length === 0 ? (
        <p className="text-center">No todos to display!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};
