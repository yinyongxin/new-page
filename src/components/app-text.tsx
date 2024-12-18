import { VariantProps, cva } from "class-variance-authority";
import { ParentComponent, splitProps } from "solid-js";
import { cn } from "../utils/style";

const appTextVariants = cva("text-black", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    color: {
      error: "text-red-500",
      success: "text-green-500",
      warning: "text-orange-500",
      primary: "text-violet-500",
      secondary: "text-gray-500",
      link: "text-blue-500",
    },
    inline: {
      true: "inline-block",
      false: "",
    },
    title: {
      1: "text-7xl font-medium",
      2: "text-6xl font-medium",
      3: "text-5xl font-medium",
      4: "text-4xl font-medium",
      5: "text-3xl font-medium",
      6: "text-2xl font-medium",
    },
  },
  defaultVariants: {
    size: "base",
    inline: true,
  },
});

const AppText: ParentComponent<VariantProps<typeof appTextVariants>> = (
  props
) => {
  const [local, otherProps] = splitProps(props, ["children"]);
  return <div class={cn(appTextVariants(otherProps))}>{local.children}</div>;
};

export default AppText;
