import type React from "react";
import Icon from "../components/Icon";
import { cva, type VariantProps } from "class-variance-authority";
import Text from "./Text";

export const buttonVariants = cva(
  `
      flex items-center justify-center cursor-pointer
      transition rounded-lg group gap-2
    `,
  {
    variants: {
      variant: {
        primary: "bg-gray-200 hover:bg-pink-light",
      },
      size: {
        md: "h-14 py-4 px-5",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

export const buttonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-pink-base",
    },
    size: {
      md: "w-5 h-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    icon?: React.ComponentProps<typeof Icon>["svg"];
  };

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: iconComponent,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size, className, disabled })} {...props} >
      {iconComponent && <Icon svg={iconComponent!} className={buttonIconVariants({variant})} />}
      <Text variant='body-md-bold'>
      {children}
      </Text>
    </button>
  );
}
