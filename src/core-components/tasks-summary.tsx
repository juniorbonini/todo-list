import Badge from "../components/Badge";
import Text from "../components/Text";
import useTasks from "../hooks/useTasks";

export default function TasksSummary() {
  const { tasksCount, completedTasksCount } = useTasks();
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold">Tarefas criadas</Text>
        <Badge variant="secundary">{tasksCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold">Tarefas concluidas</Text>
        <Badge variant="primary">{completedTasksCount} de {tasksCount}</Badge>
      </div>
    </>
  );
}
