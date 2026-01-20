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

export default function TasksContent({ task }: TaskItem) {
  const [isEditing, setIsEditing] = React.useState(task.state !== TaskState.Created);

  function handleEditiTask() {
    setIsEditing(true);
  }

  function handleExitEdit() {
    setIsEditing(false)
  }

  return (
    <Card size="md" className="flex items-center gap-3">
      {!isEditing ? (
        <>
          <CheckBox  value={task?.isCompleted?.toString()} checked={task?.isCompleted} />
          <Text className={cx("flex-1", {
            'line-through': task?.isCompleted
          })}>{task?.title}</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="terciary" />
            <ButtonIcon icon={PencilIcon} variant="terciary" onClick={handleEditiTask} />
          </div>
        </>
      ) : (
        <>
        <Input className="flex-1"/>

         <div className="flex gap-1">
            <ButtonIcon icon={CloseIcon} variant="secundary" onClick={handleExitEdit} />
            <ButtonIcon icon={CheckIcon} variant="primary" />
          </div>

        </>
      )}
    </Card>
  );
}
