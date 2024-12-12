import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/style";
import classes from "./index.module.css";

const positionOptions: Record<Position.types, string> = {
  top: "top-4 left-4 right-4",
  right: "top-4 bottom-4 right-4",
  bottom: "bottom-4 left-4 right-4",
  left: "top-4 bottom-4 left-4",
};

const navBarVariants = cva("absolute p-3 rounded-xl z-100s", {
  variants: {
    position: positionOptions,
  },
  defaultVariants: {
    position: "top",
  },
});

type NavBarProps = {
  blur?: boolean;
} & VariantProps<typeof navBarVariants>;

const NavBar = (props: NavBarProps) => {
  const { position = "left", blur = true } = props;
  return (
    <nav class={cn(navBarVariants({ position }), classes.navBar)}>
      <div
        class={cn("absolute inset-0 rounded-2xl overflow-hidden", {
          "backdrop-blur": blur,
          "bg-white/20": blur,
          "bg-white/80": !blur,
        })}
      ></div>
      <div class="relative text-white">
        <div class="h-10 w-10 bg-black/20 rounded-xl"></div>
      </div>
    </nav>
  );
};

export default NavBar;
