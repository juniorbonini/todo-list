import { useState } from "react";
import { useTaskContext } from "../../context/tasks-context";

export function TaskInput() {
  const [title, setTitle] = useState("");
  const { addTask } = useTaskContext();

  function handleSubmit() {
    if (title.trim().length === 0) return;

    addTask(title);
    setTitle("");
  }

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit" onClick={handleSubmit}>Criar</button>
    </div>
  );
}
