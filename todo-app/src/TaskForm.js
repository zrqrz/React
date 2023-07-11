import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Your next task..."
      />
    </form>
  );
}
