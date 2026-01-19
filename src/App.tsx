import Text from "./components/Text";
// @ts-expect-error: module declaration for SVG React import
import TrashIcon from "./assets/icons/trash.svg?react";
// @ts-expect-error: module declaration for SVG React import
import CheckIcon from "./assets/icons/circle-duotone.svg?react";
// @ts-expect-error: module declaration for SVG React import
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import Icon from "./components/Icon";

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
    </div>
  );
}
