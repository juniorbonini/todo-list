import { iconVariants, type IconProps } from "../types/icon";

export default function Icon({ svg: SvgComponent, className, animate, ...props }: IconProps) {
  return <SvgComponent {...props} className={iconVariants({ animate, className })} />;
}
