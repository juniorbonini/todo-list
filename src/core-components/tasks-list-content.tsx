import Button from "../components/Button";

// @ts-expect-error: module declaration for SVG React import
import PlusIcon from "../assets/icons/plus.svg?react";
import TasksContent from "./tasks-content";
import useTasks from "../hooks/useTasks";

export default function TasksListContent() {
  const { tasks, prepareTasks } = useTasks();

  function handleNewTask() {
    prepareTasks()
  }

  console.log(tasks);
  return (
    <>
      <Button icon={PlusIcon} className="w-full" onClick={handleNewTask}>
        Nova tarefa
      </Button>
      <section className="space-y-2">
        <TasksContent />
        <TasksContent />
        <TasksContent />
        <TasksContent />
      </section>
    </>
  );
}
