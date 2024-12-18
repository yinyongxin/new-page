import { cva } from "class-variance-authority";
import { cn } from "../../utils/style";
import classes from "./index.module.css";
import { ParentComponent, useContext } from "solid-js";
import { AppContext } from "../../app-conetent";
import AppBox from "../app-box";

const positionOptions: Record<Position.types, string> = {
  top: "top-4 left-1/2 -translate-x-1/2",
  right: "right-4 top-1/2 -translate-y-1/2",
  bottom: "bottom-4 left-1/2 -translate-x-1/2",
  left: "left-4 top-1/2 -translate-y-1/2",
};

const navBarVariants = cva("absolute p-3 rounded-xl z-100s shadow", {
  variants: {
    position: positionOptions,
  },
  defaultVariants: {
    position: "left",
  },
});

const NavBar: ParentComponent = (props) => {
  const { navBar } = useContext(AppContext);

  return (
    <AppBox
      class={cn(navBarVariants({ position: navBar.position }), classes.navBar)}
    >
      <div
        class={cn("relative flex gap-2 text-white", {
          "flex-col": navBar.position === "left" || navBar.position === "right",
        })}
      >
        {props.children}
      </div>
    </AppBox>
  );
};

export default NavBar;
