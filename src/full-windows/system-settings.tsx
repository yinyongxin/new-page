import AppBox from "../components/app-box";
import FullScreen from "../components/full-screen";
import AppText from "../components/app-text";
import { Show, useContext } from "solid-js";
import { AppContext } from "../app-conetent";
import { cn } from "../utils/style";
import Icon from "../components/icon";
import { BackgroundClassNameList } from "../common";

const SystemSettings = () => {
  const { background, setBackground, navBar, setNavBar, fullWindows } =
    useContext(AppContext);
  const prev = () => {
    const index = BackgroundClassNameList.indexOf(background.className);
    setBackground?.({
      className: BackgroundClassNameList[index - 1],
    });
  };
  const next = () => {
    const index = BackgroundClassNameList.indexOf(background.className);
    setBackground?.({
      className: BackgroundClassNameList[index + 1],
    });
  };

  return (
    <FullScreen open={fullWindows.current === "system-settings"}>
      <div class="h-full overflow-auto">
        <div
          class={cn(
            "grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-6 gap-4 grid-flow-dense"
          )}
          style={{ "grid-auto-rows": " minmax(100px, auto)" }}
        >
          <div>
            <AppText title={6}>导航栏设置</AppText>
            <div class={cn("grid grid-cols-4 gap-4 mt-2")}>
              <AppBox
                onClick={() => {
                  setNavBar?.({ position: "top" });
                }}
                class="aspect-square flex flex-col items-center gap-2 p-2"
                blur={{ flag: false }}
                bgFreground={navBar.position === "top"}
              >
                <AppBox class="h-1/4 w-2/3" blur={{ flag: false }}></AppBox>
                <AppBox class="flex-1 w-full" blur={{ flag: false }}></AppBox>
              </AppBox>

              <AppBox
                onClick={() => {
                  setNavBar?.({ position: "right" });
                }}
                bgFreground={navBar.position === "right"}
                class="aspect-square flex flex-row-reverse items-center gap-2 p-2"
                blur={{ flag: false }}
              >
                <AppBox class="w-1/4 h-2/3" blur={{ flag: false }}></AppBox>
                <AppBox class="flex-1 h-full" blur={{ flag: false }}></AppBox>
              </AppBox>
              <AppBox
                onClick={() => {
                  setNavBar?.({ position: "bottom" });
                }}
                bgFreground={navBar.position === "bottom"}
                class="aspect-square flex flex-col-reverse items-center gap-2 p-2"
                blur={{ flag: false }}
              >
                <AppBox class="h-1/4 w-2/3" blur={{ flag: false }}></AppBox>
                <AppBox class="flex-1 w-full" blur={{ flag: false }}></AppBox>
              </AppBox>
              <AppBox
                onClick={() => {
                  setNavBar?.({ position: "left" });
                }}
                bgFreground={navBar.position === "left"}
                class="aspect-square flex items-center gap-2 p-2"
                blur={{ flag: false }}
              >
                <AppBox class="w-1/4 h-2/3" blur={{ flag: false }}></AppBox>
                <AppBox class="flex-1 h-full" blur={{ flag: false }}></AppBox>
              </AppBox>
            </div>
          </div>
          <div>
            <AppText title={6}>背景设置</AppText>
            <div class="grid grid-cols-2 mt-2 gap-3">
              <AppBox
                class={cn(
                  "flex justify-center items-center p-3 cursor-pointer"
                )}
                bgFreground={background.type === "css"}
                onClick={() => {
                  setBackground?.({
                    type: "css",
                  });
                }}
              >
                CSS样式
              </AppBox>
              <AppBox
                class="flex justify-center items-center p-3 cursor-pointer"
                bgFreground={background.type === "image"}
                onClick={() => {
                  setBackground?.({
                    type: "image",
                  });
                }}
              >
                图片
              </AppBox>
            </div>
            <AppBox class="h-36 mt-4 grid grid-cols-[1fr_auto] p-4 gap-4">
              <div>
                <div
                  class={cn("size-full rounded-xl", {
                    [background.className]: background.type === "css",
                  })}
                >
                  <Show when={background.type === "image"}>
                    <img
                      src={background.image.src}
                      class="size-full object-cover rounded-xl"
                      alt="backgroundImage"
                    />
                  </Show>
                </div>
              </div>
              <div class="flex flex-col justify-center gap-4">
                <Icon name="ArrowUp" class="cursor-pointer" onClick={prev} />
                <Icon name="ArrowDown" class="cursor-pointer" onClick={next} />
              </div>
            </AppBox>
          </div>
        </div>
      </div>
    </FullScreen>
  );
};
export default SystemSettings;
