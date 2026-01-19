import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-green-light",
        secundary: "bg-pink-light",
      },
      size: {
        small: "py-0.5 px-2",
      },
    },

    defaultVariants: {
      size: "small",
      variant: "secundary",
    },
  },
);

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secundary: "text-pink-dark",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type BadgeProps = React.ComponentProps<"div"> &
  VariantProps<typeof badgeVariants> & {
    variant: "primary" | "secundary";
    size: "small";
    className?: string;
    children?: React.ReactNode;
  };
