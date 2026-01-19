export type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type TaskItem = {
  task: Task;
  onRemove: (id: string) => void;
  onToggleComplete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

export type TaskContextData = {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  toggleCompleteTask: (id: string) => void;
  editTask: (id: string, newTitle: string) => void;
};

export type TaskProviderProps = {
  children: React.ReactNode;
};