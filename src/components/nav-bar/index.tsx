import { cn } from "../../utils/style";
import classes from "./index.module.css";
import { useContext } from "solid-js";
import { AppContext } from "../../app-conetent";
import AppBox from "../app-box";
import { LayoutGrid, Layout } from "lucide-solid";
import Setting from "./comps/setting";
import Item from "./item";

const positionOptions: Record<Position.types, string> = {
  top: "top-4 left-1/2 -translate-x-1/2",
  right: "right-4 top-1/2 -translate-y-1/2",
  bottom: "bottom-4 left-1/2 -translate-x-1/2",
  left: "left-4 top-1/2 -translate-y-1/2",
};

const NavBar = () => {
  const { navBar, fullWindows, setFullWindows } = useContext(AppContext);

  return (
    <AppBox
      class={cn(
        "absolute p-3",
        positionOptions[navBar.position],
        classes.navBar
      )}
      shadow="default"
    >
      <div
        class={cn("relative flex gap-3", {
          "flex-col": navBar.position === "left" || navBar.position === "right",
        })}
      >
        <Setting />
        <Item
          open={fullWindows.current === "page-manage"}
          onClick={() => {
            if (fullWindows.current === "page-manage") {
              setFullWindows?.({
                current: "",
              });
            } else {
              setFullWindows?.({
                current: "page-manage",
              });
            }
          }}
        >
          <LayoutGrid />
        </Item>
      </div>
    </AppBox>
  );
};

export default NavBar;
