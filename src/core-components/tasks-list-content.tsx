import Button from "../components/Button";

// @ts-expect-error: module declaration for SVG React import
import PlusIcon from "../assets/icons/plus.svg?react";
import TasksContent from "./tasks-content";

export default function TasksListContent() {
  return (
    <>
      <Button icon={PlusIcon} className="w-full">Nova tarefa</Button>
      <section className="space-y-2">
        <TasksContent />
        <TasksContent />
        <TasksContent />
        <TasksContent />
      </section>
    </>
  );
}
