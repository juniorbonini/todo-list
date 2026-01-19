import { createContext, useContext, useState } from "react";
import type { Task, TaskContextData, TaskProviderProps } from "../types/task";

const TaskContext = createContext({} as TaskContextData);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      isCompleted: false,
    };

    setTasks((state) => [...state, newTask]);
  }

  function removeTask(taskId: string) {
    setTasks((state) => state.filter((task) => task.id !== taskId));
  }

  function toggleCompleteTask(taskId: string) {
    setTasks((state) =>
      state.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }

  function editTask(taskId: string, newTitle: string) {
    setTasks((state) =>
    state.map(task => 
        task.id === taskId
        ? { ...task, title: newTitle}
        : task
    ))
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        toggleCompleteTask,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  return context;
};
