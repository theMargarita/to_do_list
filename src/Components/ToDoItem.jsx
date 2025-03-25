// for every todo
import React from "react";

function ToDoItem({ tasks, deleteTask, completeTask }) {
  return (
    <div className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={tasks.completed}
          onChange={() => completeTask(tasks.id)}
        />
        <span className={tasks.completed ? "completed" : ""}>{tasks.text}</span>
      </div>
      <div className="btn-container">
        <button className="complete-btn" onClick={() => completeTask(tasks.id)}>
          ✔
        </button>
        <button className="delete-btn" onClick={() => deleteTask(tasks.id)}>
          X
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
