import Plus from "lucide-solid/icons/plus";
import AppBox from "../components/app-box";
import FullScreen from "../components/full-screen";
import AppText from "../components/app-text";
import { Index, createContext, onMount, useContext } from "solid-js";
import { GridStack } from "gridstack";
import { AppContext } from "../app-conetent";
import Icon from "../components/icon";

type PageMangeProps = {
  open: boolean;
};
const PageMange = (props: PageMangeProps) => {
  const { pages } = useContext(AppContext);
  // let gridStack!: HTMLDivElement;
  // const init = () => {
  // 	if (!props.open) {
  // 		return;
  // 	}
  // 	var grid = GridStack.init(
  // 		{
  // 			float: true,
  // 		},
  // 		gridStack
  // 	);
  // 	const serializedData = [
  // 		{ x: 0, y: 0, w: 1, h: 1, content: "item 1" },
  // 		{ x: 1, y: 0, w: 1, content: "item 2" },
  // 		{ x: 2, y: 0, content: "item 3" },
  // 	];

  // 	grid.load(serializedData);
  // };
  // onMount(() => {
  // 	console.log("props.open", props.open);
  // 	console.log("gridStack", gridStack);
  // 	setTimeout(() => {
  // 		init();
  // 	}, 0);
  // });
  console.log("pages", pages);

  return (
    <FullScreen open={props.open}>
      <header class="flex justify-center">
        <AppText title={6}>页面管理</AppText>
      </header>
      <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 sm:p-20 gap-6 sm:gap-8">
        <Index each={pages.list}>
          {(page) => {
            return (
              <AppBox class="aspect-square rounded-xl flex justify-center items-center relative">
                <Icon name="House" size="50%" />
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
