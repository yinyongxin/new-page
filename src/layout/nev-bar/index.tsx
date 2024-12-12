import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/style";
import classes from "./index.module.css";
import { Portal } from "solid-js/web";
import { Show, createSignal } from "solid-js";

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
  let ref!: HTMLDivElement;
  const [open, setOpen] = createSignal(false);
  console.log("render", ref);
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
        <div
          ref={ref}
          class="h-10 w-10 bg-black/20 rounded-xl cursor-pointer"
          onClick={() => {
            console.log("click");
            setOpen(!open());
          }}
        ></div>
      </div>
      <Show when={open()}>
        <Portal mount={document.getElementById("modal") as Node}>
          <div
            class={cn(
              "bg-black/40 z-50 w-[600px] h-[400px] ",
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            )}
          >
            My Content
          </div>
        </Portal>
      </Show>
    </nav>
  );
};

export default NavBar;
