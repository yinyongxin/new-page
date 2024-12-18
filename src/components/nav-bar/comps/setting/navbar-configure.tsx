import { useContext } from "solid-js";
import { AppContext } from "../../../../app-conetent";
import AppText from "../../../app-text";
import AppBox from "../../../app-box";
import { cn } from "../../../../utils/style";

const NavBarConfigure = () => {
  const { navBar, setNavBar } = useContext(AppContext);
  return (
    <div class="p-4">
      <AppText title={6}>导航栏设置</AppText>
      <div
        class={cn("grid grid-cols-4 gap-4 mt-3", {
          "md:grid-cols-8 xl:grid-cols-12":
            navBar.position === "top" || navBar.position === "bottom",
        })}
      >
        <AppBox
          onClick={() => {
            setNavBar?.({ position: "top" });
          }}
          class="aspect-square flex flex-col items-center gap-2 p-2"
          blur={{ off: false, type: "dark" }}
        >
          <AppBox
            class="h-1/4 w-2/3"
            blur={{ off: false, type: "dark" }}
          ></AppBox>
          <AppBox
            class="flex-1 w-full"
            blur={{ off: false, type: "dark" }}
          ></AppBox>
        </AppBox>
        <AppBox
          onClick={() => {
            setNavBar?.({ position: "left" });
          }}
          class="aspect-square flex items-center gap-2 p-2"
          blur={{ off: false, type: "dark" }}
        >
          <AppBox
            class="w-1/4 h-2/3"
            blur={{ off: false, type: "dark" }}
          ></AppBox>
          <AppBox
            class="flex-1 h-full"
            blur={{ off: false, type: "dark" }}
          ></AppBox>
        </AppBox>
        <AppBox
          onClick={() => {
            setNavBar?.({ position: "right" });
          }}
          class="aspect-square flex flex-row-reverse items-center gap-2 p-2"
          blur={{ off: false, type: "dark" }}
        >
          <AppBox
            class="w-1/4 h-2/3"
            blur={{ off: false, type: "dark" }}
          ></AppBox>
          <AppBox
            class="flex-1 h-full"
            blur={{ off: false, type: "dark" }}
          ></AppBox>
        </AppBox>
        <AppBox
          onClick={() => {
            setNavBar?.({ position: "bottom" });
          }}
          class="aspect-square flex flex-col-reverse items-center gap-2 p-2"
          blur={{ off: false, type: "dark" }}
        >
          <AppBox
            class="h-1/4 w-2/3"
            blur={{ off: false, type: "dark" }}
          ></AppBox>
          <AppBox
            class="flex-1 w-full"
            blur={{ off: false, type: "dark" }}
          ></AppBox>
        </AppBox>
      </div>
    </div>
  );
};

export default NavBarConfigure;
