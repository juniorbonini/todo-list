import { createContext, useContext } from "react";
import type { TaskContextData, TaskProviderProps } from "../types/task";

const TaskContext = createContext({} as TaskContextData);

export function TaskProvider({ children }: TaskProviderProps) {
  return (
    <TaskContext.Provider
      value={{
        tasks: [],
        addTask: () => {},
        removeTask: () => {},
        toggleCompleteTask: () => {},
        editTask: () => {},
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTaskContext = () => {
    const context = useContext(TaskContext);

    return context;
}