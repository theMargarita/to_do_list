// Head component aka Hero?
import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";

function ToDoList() {
  // state to store input text
  const [inputText, setInputText] = useState("");
  //   state to store all tasks
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem("tasks");
    return savedTask ? JSON.parse(savedTask) : []; //save task or save empty array
  });

  //   saved tasks to local storage whenever they change
  useEffect(() => {
    console.log(useEffect);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // handle input change event
  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  // ---------add task------------

  function addTask() {
    if (inputText.trim() === "") {
      return; //prevent adding new tasks
    }

    const newTasks = { id: Date.now(), text: inputText, completed: false };

    setTasks((prevTasks) => [...prevTasks, newTasks]);
    setInputText(""); //clear input field
  }

  //   ----------delete task-----------
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id)); //removes task by id
  }

  // ---------complete task-----------
  function completeTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="todo-list">
      <h1>TO DO LIST</h1>

      <ToDoInput
        onSubmit={addTask}
        inputText={inputText}
        handleInputChange={handleInputChange}
        addTask={addTask}
      />

      <div>

          {tasks.map((task) => (
            <ToDoItem
              key={task.id}
              tasks={task}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          ))}

      </div>
    </div>
  );
}

export default ToDoList;
