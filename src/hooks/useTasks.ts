import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY, TaskState, type Task } from "../types/task";

export default function useTasks() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTasks() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "",
        state: TaskState.Creating,
      },
    ]);
  }

  return {
    tasks,
    tasksCount: tasks.length,
    completedTasksCount: tasks.filter((task) => task.isCompleted).length,
    prepareTasks,
  };
}
