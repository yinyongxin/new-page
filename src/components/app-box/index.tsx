import { JSX, ParentProps, useContext } from "solid-js";
import { cn } from "../../utils/style";
import { AppContext, AppContextType } from "../../app-conetent";
import { VariantProps, cva } from "class-variance-authority";

const appBoxVariants = cva("", {
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      default: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      default: "shadow",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
      inner: "shadow-inner",
    },
  },
  defaultVariants: {
    rounded: "xl",
    shadow: "none",
  },
});

export type AppBoxProps = ParentProps<
  {
    blur?: Partial<AppContextType["appContext"]["blur"]>;
    type?: "light" | "dark";
    ref?: HTMLDivElement;
    rounded?: "none" | "default" | "sm" | "2xl";
  } & VariantProps<typeof appBoxVariants> &
    Pick<JSX.HTMLAttributes<HTMLDivElement>, "class" | "style"> &
    Pick<JSX.CustomEventHandlersCamelCase<HTMLDivElement>, "onClick">
>;
const AppBox = (props: AppBoxProps) => {
  const { appContext } = useContext(AppContext);
  const { children, blur, style, rounded, type = "light", shadow } = props;
  const { flag = appContext.blur.flag } = { ...blur };
  return (
    <div
      ref={props.ref}
      style={style}
      onClick={props.onClick}
      class={cn([
        props.class,
        appBoxVariants({ rounded, shadow }),
        {
          "backdrop-blur-sm": flag && appContext.blur.size === "sm",
          "backdrop-blur": flag && appContext.blur.size === "default",
          "backdrop-blur-md": flag && appContext.blur.size === "md",
          "bg-white/20": type === "light",
          "bg-black/20": type === "dark",
        },
      ])}
    >
      {children}
    </div>
  );
};

export default AppBox;
