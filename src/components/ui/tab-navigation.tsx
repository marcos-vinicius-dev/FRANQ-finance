// Tremor TabNavigation [v0.1.0]

import React from "react";
import * as NavigationMenuPrimitives from "@radix-ui/react-navigation-menu";

import { cx, focusRing } from "@/utils/libs/tremor";

function getSubtree(
  options: {
    asChild?: boolean;
    children: React.ReactNode;
  },
  content: React.ReactNode | ((children: React.ReactNode) => React.ReactNode),
): React.ReactNode {
  const { asChild = false, children } = options;

  if (!asChild) {
    return typeof content === "function" ? content(children) : content;
  }

  // Validate and type the child element
  const childArray = React.Children.toArray(children);
  if (childArray.length !== 1) {
    console.warn("asChild requires exactly one child element");
    return typeof content === "function" ? content(children) : content;
  }

  const firstChild = childArray[0];
  if (!React.isValidElement(firstChild)) {
    return typeof content === "function" ? content(children) : content;
  }

  // Type the props properly
  const existingProps = firstChild.props as Record<string, unknown>;
  const newProps = {
    ...existingProps,
    children:
      typeof content === "function"
        ? content(existingProps.children as React.ReactNode)
        : content,
  };

  return React.cloneElement(firstChild, newProps);
}

const TabNavigation = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Root>,
  Omit<
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Root>,
    "orientation" | "defaultValue" | "dir"
  >
>(({ className, children, ...props }, forwardedRef) => (
  <NavigationMenuPrimitives.Root
    ref={forwardedRef}
    {...props}
    tremor-id="tremor-raw"
    asChild={false}
  >
    <NavigationMenuPrimitives.List
      className={cx(
        // base
        "flex items-center justify-start whitespace-nowrap border-b [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        // border color
        "border-gray-200 dark:border-gray-800",
        className,
      )}
    >
      {children}
    </NavigationMenuPrimitives.List>
  </NavigationMenuPrimitives.Root>
));

TabNavigation.displayName = "TabNavigation";

const TabNavigationLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitives.Link>,
  Omit<
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitives.Link>,
    "onSelect"
  > & { disabled?: boolean }
>(({ asChild, disabled, className, children, ...props }, forwardedRef) => (
  <NavigationMenuPrimitives.Item className="flex" aria-disabled={disabled}>
    <NavigationMenuPrimitives.Link
      aria-disabled={disabled}
      className={cx(
        "group relative flex shrink-0 select-none items-center justify-center",
        disabled ? "pointer-events-none" : "",
      )}
      ref={forwardedRef}
      onSelect={() => {}}
      asChild={asChild}
      {...props}
    >
      {getSubtree({ asChild, children }, (children) => (
        <span
          className={cx(
            // base
            "-mb-px flex items-center justify-center whitespace-nowrap border-b-2 border-transparent px-3 pb-2 text-sm font-medium transition-all",
            // text color
            "text-gray-500 dark:text-gray-500",
            // hover
            "group-hover:text-gray-700 group-hover:dark:text-gray-400",
            // border hover
            "group-hover:border-gray-300 group-hover:dark:border-gray-400",
            // selected
            "group-data-[active]:border-blue-500 group-data-[active]:text-blue-500",
            "group-data-[active]:dark:border-blue-500 group-data-[active]:dark:text-blue-500",
            // disabled
            disabled
              ? "pointer-events-none text-gray-300 dark:text-gray-700"
              : "",
            focusRing,
            className,
          )}
        >
          {children}
        </span>
      ))}
    </NavigationMenuPrimitives.Link>
  </NavigationMenuPrimitives.Item>
));

TabNavigationLink.displayName = "TabNavigationLink";

export { TabNavigation, TabNavigationLink };
