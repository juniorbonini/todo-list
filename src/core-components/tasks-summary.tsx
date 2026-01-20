import Badge from "../components/Badge";
import Text from "../components/Text";

export default function TasksSummary() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold">Tarefas criadas</Text>
        <Badge variant="secundary">5</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold">Tarefas concluidas</Text>
        <Badge variant="primary">2 de 5</Badge>
      </div>
    </>
  );
}
