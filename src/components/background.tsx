import { Show, useContext } from "solid-js";
import { AppContext } from "../app-conetent";
import { cn } from "../utils/style";

const Background = () => {
  const { background, style } = useContext(AppContext);
  const getStyle = () => {
    if (background.type === "image") {
      return {
        "background-image": `url(${background.image.src})`,
      };
    }
  };
  return (
    <div
      class={cn("absolute inset-0 bg-cover bg-center", {
        [background.className]: background.type === "css",
      })}
      style={getStyle()}
    >
      <Show
        when={style.value === "groundGlass"}
        fallback={<div class="size-full neumorphism-bg"></div>}
      >
        <div
          class={cn("size-full", {
            "backdrop-blur-sm bg-white/30":
              background.backdropBlur.flag &&
              background.backdropBlur.size === "sm",
            "backdrop-blur bg-white/30":
              background.backdropBlur.flag &&
              background.backdropBlur.size === "default",
            "backdrop-blur-md bg-white/30":
              background.backdropBlur.flag &&
              background.backdropBlur.size === "md",
          })}
        />
      </Show>
    </div>
  );
};

export default Background;
