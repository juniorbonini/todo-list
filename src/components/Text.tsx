import React from "react";

import { textVariants, type TextProps } from "../types/text";

export default function Text({
  className,
  children,
  as = "span",
  variant,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children,
  );
}
