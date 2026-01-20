import ButtonIcon from "../components/ButtonIcon";
import Card from "../components/Card";
import { CheckBox } from "../components/CheckBox";
import Text from "../components/Text";

// @ts-expect-error: module declaration for SVG React import
import TrashIcon from "../assets/icons/trash.svg?react";

// @ts-expect-error: module declaration for SVG React import
import PencilIcon from "../assets/icons/pencil.svg?react";

// @ts-expect-error: module declaration for SVG React import
import CloseIcon from "../assets/icons/close.svg?react";

// @ts-expect-error: module declaration for SVG React import
import CheckIcon from "../assets/icons/square-duotone-checked.svg?react";
import React from "react";
import Input from "../components/Input";
import { TaskState, type TaskItem } from "../types/task";
import { cx } from "class-variance-authority";
import useTasks from "../hooks/useTasks";

export default function TasksContent({ task }: TaskItem) {
  const [title, setTitle] = React.useState(task.title || "");
  const { updateTask } = useTasks();
  const [isEditing, setIsEditing] = React.useState(
    task.state !== TaskState.Created,
  );

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEdit() {
    setIsEditing(false);
  }

  function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value || "");
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateTask(task.id, { title: title });
    setIsEditing(false);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-3">
          <CheckBox
            value={task?.isCompleted?.toString()}
            checked={task?.isCompleted}
          />
          <Text
            className={cx("flex-1", {
              "line-through": task?.isCompleted,
            })}
          >
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="terciary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="terciary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-3">
          <Input
            value={title}
            className="flex-1"
            onChange={handleChangeTitle}
            required
            autoFocus
          />

          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={CloseIcon}
              variant="secundary"
              onClick={handleExitEdit}
            />
            <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
          </div>
        </form>
      )}
    </Card>
  );
}
