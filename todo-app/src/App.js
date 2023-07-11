import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length !== 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    const prev = JSON.parse(localStorage.getItem("tasks"));
    setTasks(prev);
  }, []);

  function handleAddTask(taskName) {
    setTasks((prev) => {
      return [
        ...prev,
        {
          name: taskName,
          done: false,
        },
      ];
    });
  }

  function handleClick(index, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].done = newDone;
      return newTasks;
    });
  }

  function handleDelete(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((task, index) => index !== indexToRemove);
    });
  }

  function handleChange(index, newTaskName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newTaskName;
      return newTasks;
    });
  }

  const numberComplete = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = (numberComplete / numberTotal) * 100;
    if (percentage === 0) {
      return "Try to do at least one! 🙏";
    }
    if (percentage === 100) {
      return "Nice job for today! ⛱️";
    }
    return "Keep it going 💪";
  }

  return (
    <main>
      <h1>
        {numberComplete}/{numberTotal} completes
      </h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAddTask={handleAddTask} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onToggle={(done) => handleClick(index, done)}
          onDelete={() => handleDelete(index)}
          onRename={(newTaskName) => handleChange(index, newTaskName)}
        />
      ))}
    </main>
  );
}

export default App;
