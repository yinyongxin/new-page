import { useContext } from "solid-js";
import AppBox from "../../components/app-box";
import AppText from "../../components/app-text";
import { cn } from "../../utils/style";
import { AppContext } from "../../app-conetent";

const StyleSetting = () => {
  const { style, setStyle } = useContext(AppContext);
  return (
    <div>
      <AppText title={6}>风格设置</AppText>
      <div class="grid grid-cols-2 mt-2 gap-3">
        <AppBox
          class={cn("flex justify-center items-center py-4 cursor-pointer")}
          active={style.value === "neumorphism"}
          onClick={() => {
            setStyle?.({ value: "neumorphism" });
          }}
        >
          拟物风
        </AppBox>
        <AppBox
          class="flex justify-center items-center py-4 cursor-pointer"
          active={style.value === "groundGlass"}
          onClick={() => {
            setStyle?.({ value: "groundGlass" });
          }}
        >
          毛玻璃
        </AppBox>
      </div>
    </div>
  );
};
export default StyleSetting;
