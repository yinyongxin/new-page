import AppBox from "../components/app-box";
import FullScreen from "../components/full-screen";
import AppText from "../components/app-text";
import { Index, useContext } from "solid-js";
import { AppContext } from "../app-conetent";
import Icon from "../components/icon";

const PageMange = () => {
  const { pages, setPages, fullWindows } = useContext(AppContext);

  return (
    <FullScreen open={fullWindows.current === "page-manage"}>
      <header class="flex justify-center">
        <AppText title={6}>页面管理</AppText>
      </header>
      <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 sm:p-20 gap-6 sm:gap-8">
        <Index each={pages.list}>
          {(page) => {
            return (
              <AppBox
                class="aspect-square rounded-xl flex justify-center items-center relative cursor-pointer"
                bgFreground={page().key === pages.current}
                onClick={() => {
                  setPages?.({
                    current: page().key,
                  });
                }}
              >
                <Icon name="Code" size="50%" />
                <div class="absolute -bottom-6 sm:-bottom-8 left-0 right-0 flex justify-center items-center">
                  <AppText>{page().title}</AppText>
                </div>
              </AppBox>
            );
          }}
        </Index>
      </div>
    </FullScreen>
  );
};
export default PageMange;
