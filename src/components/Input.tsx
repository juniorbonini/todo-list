import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "../types/text";

export const inputTextVariants = cva(
  `
   border-b border-solid border-gray-200 focus:border-pink-base 
    `,
  {
    variants: {
      size: {
        md: "pb-2 px-2",
      },
      disabled: {
        true: "pointer-event-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
);

export type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputTextVariants> & {};

export default function Input({
  size,
  disabled,
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cx(
        inputTextVariants({ size, disabled }),
        textVariants(),
        className,
      )}
      {...props}
    />
  );
}
