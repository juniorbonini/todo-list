import {
  badgeTextVariants,
  badgeVariants,
  type BadgeProps,
} from "../types/badge";
import Text from "./Text";

export default function Badge({
  variant,
  size,
  className,
  children,
}: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, size, className })}>
      <Text className={badgeTextVariants({ variant })}>
        {children}
      </Text>
    </div>
  );
}
