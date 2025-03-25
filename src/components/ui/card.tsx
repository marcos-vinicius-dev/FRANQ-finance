// Tremor Card [v0.0.2]

import React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cx } from "@/utils/libs/tremor";

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
  outline?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild, outline, ...props }, forwardedRef) => {
    const Component = asChild ? Slot : "div";
    return (
      <Component
        ref={forwardedRef}
        className={cx(
          // base
          "relative w-full rounded-lg p-6 text-left shadow-sm",
          // background color
          "bg-white dark:bg-[#090E1A]",
          // outlined
          outline
            ? "outline-2 dark:bg-transparent dark:outline-gray-800 outline-dashed"
            : "border border-gray-200 dark:border-gray-900",
          className,
        )}
        tremor-id="tremor-raw"
        {...props}
      />
    );
  },
);

Card.displayName = "Card";

export { Card };
