import AppBox from "../components/app-box";
import FullScreen from "../components/full-screen";
import AppText from "../components/app-text";
import { useContext } from "solid-js";
import { AppContext } from "../app-conetent";
import { cn } from "../utils/style";

const SystemSettings = () => {
  const { navBar, setNavBar, fullWindows } = useContext(AppContext);

  return (
    <FullScreen open={fullWindows.current === "syetem-settings"}>
      <header class="flex justify-center">
        <AppText title={6}>系统设置</AppText>
      </header>
      <div
        class={cn("grid grid-cols-1 ", {
          "sm:grid-cols-2 xl:grid-cols-4":
            navBar.position === "top" || navBar.position === "bottom",
        })}
      >
        <AppText title={6}>导航栏设置</AppText>
        <AppText block class="mt-3">
          位置
        </AppText>
        <div class={cn("grid grid-cols-4 gap-4 mt-2")}>
          <AppBox
            onClick={() => {
              setNavBar?.({ position: "top" });
            }}
            class="aspect-square flex flex-col items-center gap-2 p-2"
            blur={{ flag: false }}
            bgFreground
          >
            <AppBox class="h-1/4 w-2/3" blur={{ flag: false }}></AppBox>
            <AppBox class="flex-1 w-full" blur={{ flag: false }}></AppBox>
          </AppBox>

          <AppBox
            onClick={() => {
              setNavBar?.({ position: "right" });
            }}
            class="aspect-square flex flex-row-reverse items-center gap-2 p-2"
            blur={{ flag: false }}
            bgFreground
          >
            <AppBox class="w-1/4 h-2/3" blur={{ flag: false }}></AppBox>
            <AppBox class="flex-1 h-full" blur={{ flag: false }}></AppBox>
          </AppBox>
          <AppBox
            onClick={() => {
              setNavBar?.({ position: "bottom" });
            }}
            class="aspect-square flex flex-col-reverse items-center gap-2 p-2"
            blur={{ flag: false }}
            bgFreground
          >
            <AppBox class="h-1/4 w-2/3" blur={{ flag: false }}></AppBox>
            <AppBox class="flex-1 w-full" blur={{ flag: false }}></AppBox>
          </AppBox>
          <AppBox
            onClick={() => {
              setNavBar?.({ position: "left" });
            }}
            class="aspect-square flex items-center gap-2 p-2"
            blur={{ flag: false }}
            bgFreground
          >
            <AppBox class="w-1/4 h-2/3" blur={{ flag: false }}></AppBox>
            <AppBox class="flex-1 h-full" blur={{ flag: false }}></AppBox>
          </AppBox>
        </div>
      </div>
    </FullScreen>
  );
};
export default SystemSettings;
