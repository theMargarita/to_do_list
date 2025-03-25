// to create new inputs/todos
import React from "react";

function ToDoInput({ addTask, handleInputChange, inputText }) {
  return (
    // pressing enter submits the form
    <form className="todo-form" onSubmit={addTask}>
      <input
        type="text"
        placeholder="Write your task here"
        value={inputText}
        onChange={handleInputChange}
        className="todo-input"
      />

      <button type="submit" className="add-btn">
        Add
      </button>
    </form>
  );
}

export default ToDoInput;
