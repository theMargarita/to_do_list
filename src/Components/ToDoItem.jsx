// for every todo
import React from "react";

function ToDoItem({ tasks, deleteTask, completeTask }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={tasks.completed}
        onChange={() => completeTask(tasks.id)}
      />
      <ul>
        <span className={tasks.completed ? "completed" : ""}>{tasks.text}</span>
        <button className="complete-btn" onClick={() => completeTask(tasks.id)}>✔</button>
        <button className="delete-btn" onClick={() => deleteTask(tasks.id)}>
          X
        </button>
      </ul>
    </div>
  );
}

export default ToDoItem;
