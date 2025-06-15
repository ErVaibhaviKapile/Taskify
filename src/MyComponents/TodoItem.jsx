import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => onDelete(todo)} // Pass the specific `todo` to the `onDelete` function
      >
        Delete
      </button>
    </div>
  );
};
