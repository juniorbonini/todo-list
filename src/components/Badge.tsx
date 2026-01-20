import Text from "./Text";

import { cva, cx, type VariantProps } from "class-variance-authority";
import type React from "react";
import Skeleton from "./Skeleton";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full",
  {
    variants: {
      variant: {
        none: '',
        primary: "bg-green-light",
        secundary: "bg-pink-light",
      },
      size: {
        sm: "py-0.05 px-2",
      },
    },

    defaultVariants: {
      size: "sm",
      variant: 'primary',
    },
  },
);

export const badgeSkeletonVariants = cva("", {
  variants: {
    size: {
      sm: "w-6 h-6",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      none: '',
      primary: "text-green-base",
      secundary: "text-pink-base",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type BadgeProps = React.ComponentProps<"div"> &
  VariantProps<typeof badgeVariants> & {
    loading?: boolean;
  };

export default function Badge({
  variant,
  size,
  className,
  children,
  loading,
}: BadgeProps) {
  if (loading) {
    return <Skeleton rounded="full" className={cx(
      badgeVariants({ variant: 'none' }),
      badgeSkeletonVariants({ size }),
      className
    )} />;
  }
  return (
    <div className={badgeVariants({ variant, size, className })}>
      <Text className={badgeTextVariants({ variant })}>{children}</Text>
    </div>
  );
}
