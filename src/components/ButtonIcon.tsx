import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./Icon";

export const buttonIconVariants = cva(
  `inline-flex items-center justify-center cursor-pointer transition group `,
  {
    variants: {
      variant: {
        primary: "bg-green-light hover:bg-green-base",
        secundary: "bg-pink-light hover:bg-pink-base",
        terciary: "bg-transparent hover:bg-pink-light",
      },
      size: {
        sm: "2-6 h-6 p-1 rounded",
      },
      disabled: {
        true: "opacity-50 pointer-event-none",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  },
);

export const iconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-white hover:fill-gray-200",
      secundary: "fill-pink-base group-hover:fill-white",
      terciary: "fill-gray-300 group-hover:fill-gray-400",
    },
    size: {
      sm: "h-4 w-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export type ButtonIconProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonIconVariants> & {
    icon: React.ComponentProps<typeof Icon>["svg"];
  };

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return <button
    className={buttonIconVariants({ variant, size, className, disabled })}
    {...props}
  >
    <Icon svg={icon} className={iconVariants({ variant, size })} />
  </button>;
  
}
