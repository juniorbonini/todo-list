export enum TaskState {
  Creating = 'creating',
  Created = 'created',
}

export const TASKS_KEY = "tasks"

export type Task = {
  id: string;
  title: string;
  isCompleted?: boolean;
  state?: TaskState;
};

export type TaskItem = {
  task: Task;
  // onRemove: (id: string) => void;
  // onToggleComplete: (id: string) => void;
  // onEdit: (id: string, newTitle: string) => void;
};
