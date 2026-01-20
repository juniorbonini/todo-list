import Button from "../components/Button";

// @ts-expect-error: module declaration for SVG React import
import PlusIcon from "../assets/icons/plus.svg?react";
import TasksContent from "./tasks-content";
import useTasks from "../hooks/useTasks";
import { TaskState } from "../types/task";

export default function TasksListContent() {
  const { tasks, prepareTasks, } = useTasks();

  function handleNewTask() {
    prepareTasks();
  }

  return (
    <>
      <Button
        icon={PlusIcon}
        className="w-full"
        onClick={handleNewTask}
        disabled={tasks.some((task) => task.state === TaskState.Creating)}
      >
        Nova tarefa
      </Button>
      <section className="space-y-2">
        {tasks.map((task) => (
          <TasksContent key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}
