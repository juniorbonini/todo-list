import Container from "../components/Container";
import TasksContent from "../core-components/tasks-content";
import TasksSummary from "../core-components/tasks-summary";

export default function Home() {
  return (
    <Container as="article" className='space-y-3'>
      <header className="flex items-center justify-between">
        <TasksSummary />
      </header>
      <div>
        <TasksContent />
      </div>
    </Container>
  );
}
