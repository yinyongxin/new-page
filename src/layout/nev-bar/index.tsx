import { cva } from "class-variance-authority";
import { cn } from "../../utils/style";
import classes from "./index.module.css";
import { useContext } from "solid-js";
import { AppContext } from "../../app-conetent";
import Setting from "./comps/setting";

const positionOptions: Record<Position.types, string> = {
  top: "top-4 left-1/2 -translate-x-1/2",
  right: "right-4 top-1/2 -translate-y-1/2",
  bottom: "bottom-4 left-1/2 -translate-x-1/2",
  left: "left-4 top-1/2 -translate-y-1/2",
};

const navBarVariants = cva("absolute p-3 rounded-xl z-100s", {
  variants: {
    position: positionOptions,
  },
  defaultVariants: {
    position: "left",
  },
});

const NavBar = () => {
  const { navBar, appContext } = useContext(AppContext);

  return (
    <nav
      class={cn(navBarVariants({ position: navBar.position }), classes.navBar)}
    >
      <div
        class={cn("absolute inset-0 rounded-2xl overflow-hidden", {
          "backdrop-blur": appContext.blur,
          "bg-white/30": appContext.blur,
        })}
      ></div>
      <div
        class={cn("relative flex gap-2 text-white", {
          "flex-col": navBar.position === "left" || navBar.position === "right",
        })}
      >
        <Setting />
      </div>
    </nav>
  );
};

export default NavBar;
