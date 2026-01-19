// @ts-expect-error: module declaration for SVG React import
import TrashIcon from "./assets/icons/trash.svg?react";
// @ts-expect-error: module declaration for SVG React import
import CheckIcon from "./assets/icons/circle-duotone.svg?react";
// @ts-expect-error: module declaration for SVG React import
import SpinnerIcon from "./assets/icons/spinner.svg?react";
// @ts-expect-error: module declaration for SVG React import
import PlusIcon from './assets/icons/plus.svg?react';

import Text from "./components/Text";
import Icon from "./components/Icon";
import Input from "./components/Input";
import Badge from "./components/Badge";
import Button from "./components/Button";
import ButtonIcon from "./components/ButtonIcon";
import { CheckBox } from "./components/CheckBox";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-3">
        <Text variant="body-md-bold">Olá Mundo!</Text>
        <Text variant="body-sm-bold">Olá Mundo!</Text>
        <Text variant="body-md-regular">Olá Mundo!</Text>
        <Icon svg={TrashIcon} className='fill-green-base' />
        <Icon svg={CheckIcon} className='fill-green-base' />
        <Icon svg={SpinnerIcon} className='animate-spin' />
      </div>
      <div>
        <Badge variant="secundary" size="sm">
          5
        </Badge>
        <Badge variant="primary" size="sm">
          2 de 5
        </Badge>
      </div>
      <div>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>
      <div className='flex gap-1'>
        <ButtonIcon icon={TrashIcon} variant='secundary' />
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant='terciary' />
      </div>
      <div>
        <Input />
      </div>
      <div>
        <CheckBox />
      </div>
    </div>
  );
}
