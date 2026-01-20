import Text from "../components/Text";
import Icon from "../components/Icon";
import Card from "../components/Card";
import Badge from "../components/Badge";
import Input from "../components/Input";
import Button from "../components/Button";
import Skeleton from "../components/Skeleton";
import Container from "../components/Container";
import ButtonIcon from "../components/ButtonIcon";
import { CheckBox } from "../components/CheckBox";

// @ts-expect-error: module declaration for SVG React import
import PlusIcon from '../assets/icons/plus.svg?react';
// @ts-expect-error: module declaration for SVG React import
import TrashIcon from "../assets/icons/trash.svg?react";
// @ts-expect-error: module declaration for SVG React import
import SpinnerIcon from "../assets/icons/spinner.svg?react";
// @ts-expect-error: module declaration for SVG React import
import CheckIcon from "../assets/icons/circle-duotone.svg?react";

export default function PageComponents() {
    return (
        
    <Container>
    <div className="grid gap-3">
      <div className="flex flex-col gap-3">
        <Text variant="body-md-bold">Olá Mundo!</Text>
        <Text variant="body-sm-bold">Olá Mundo!</Text>
        <Text variant="body-md-regular">Olá Mundo!</Text>
        <Icon svg={TrashIcon} className='fill-green-base' />
        <Icon svg={CheckIcon} className='fill-green-base' />
        <Icon svg={SpinnerIcon} className='animate-spin' />
      </div>
      <div className='flex gap-2'>
        <Badge variant="secundary" size="sm">
          10
        </Badge>
        <Badge variant="primary" size="sm">
          2 de 5
        </Badge>
        <Badge variant="primary" size="sm" loading>
          5
        </Badge>
      </div>
      <div>
        <Button icon={PlusIcon}>Nova Tarefa</Button>
      </div>
      <div className='flex gap-1'>
        <ButtonIcon icon={TrashIcon} variant='secundary' />
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant='terciary' />
        <ButtonIcon icon={TrashIcon} variant='primary' loading />
      </div>
      <div>
        <Input />
      </div>
      <div>
        <CheckBox />
        <CheckBox loading />
      </div>
      <div>
        <Card size='md'>Olá mundo!</Card>
      </div>
      <div className='space-y-2'>
        <Skeleton className='h-6' />
        <Skeleton className='h-6' />
        <Skeleton className='w-96 h-6' />
      </div>
    </div>
    </Container>
  );
}