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

export default function TasksContent() {
  const [isEditing, setIsEditing] = React.useState(false);

  function handleEditiTask() {
    setIsEditing(true)
  }

  function handleExitEdit() {
    setIsEditing(false)
  }

  return (
    <Card size="md" className="flex items-center gap-3">
      {!isEditing ? (
        <>
          <CheckBox />
          <Text className="flex-1">Ir para a academia as 18:30!</Text>
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
