
import { useLocalStorage } from "usehooks-ts";
import { TASKS_KEY, type Task } from "../types/task";

export default function useTasks() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    tasksCount: tasks.length,
    completedTasksCount: tasks.filter((task) => task.isCompleted).length,
  };
}
