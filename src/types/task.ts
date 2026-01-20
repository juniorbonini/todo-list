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
};
