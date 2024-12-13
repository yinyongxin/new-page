import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/style";
import classes from "./index.module.css";
import { createSignal, useContext } from "solid-js";
import Home from "lucide-solid/icons/home";
import Settings from "lucide-solid/icons/settings";
import { AppContext } from "../../app-conetent";
import AppPupop from "../../components/app-pupop";
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
  const appContext = useContext(AppContext);

  let homeCef!: HTMLDivElement;
  return (
    <nav
      class={cn(
        navBarVariants({ position: appContext.navBar.position }),
        classes.appContext.navBar
      )}
    >
      <div
        class={cn("absolute inset-0 rounded-2xl overflow-hidden", {
          "backdrop-blur": blur,
          "bg-white/20": blur,
          "bg-white/80": !blur,
        })}
      ></div>
      <div
        class={cn("relative flex gap-2 text-white", {
          "flex-col":
            appContext.navBar.position === "left" ||
            appContext.navBar.position === "right",
        })}
      >
        <div
          ref={homeCef}
          class="h-12 w-12 bg-black/20 rounded-xl cursor-pointer flex justify-center items-center"
          onClick={() => {
            console.log("111", appContext.navBar.position);
            appContext.updateAppContext?.({
              navBar: {
                position:
                  appContext.navBar.position === "left" ? "right" : "left",
              },
            });
            console.log("222", appContext.navBar.position);
          }}
        >
          {appContext.navBar.position}
          <Home />
        </div>
        <Setting />
      </div>
    </nav>
  );
};

export default NavBar;
