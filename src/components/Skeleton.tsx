import { cva, type VariantProps } from "class-variance-authority";

export const skeletonVariants = cva(
  `
    animate-pulse bg-gray-200 pointer-event-none
    `,
  {
    variants: {
      rounded: {
        sm: "rounded-sm",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      rounded: "lg",
    },
  },
);

type SkeletonProps = React.ComponentProps<"div"> &
  VariantProps<typeof skeletonVariants> & {};

export default function Skeleton({
  rounded,
  className,
  ...props
}: SkeletonProps) {
  return (
    <div className={skeletonVariants({ rounded, className })} {...props}></div>
  );
}
