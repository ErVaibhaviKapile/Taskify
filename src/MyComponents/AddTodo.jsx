import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => { // Destructure `addTodo` from props
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be blank");
      return;
    }
    // Pass the new todo to the parent component
    else{
    addTodo(title, desc);
    setTitle(""); // Reset title input field
    setDesc(""); // Reset description input field
    }
  };

  return (
    <div className="container my-3">
      <h3>Add a Task</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Task Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add Task</button>
      </form>
    </div>
  );
};

export default AddTodo;
