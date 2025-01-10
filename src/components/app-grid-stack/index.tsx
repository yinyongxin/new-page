import { GridStack, GridStackOptions } from "gridstack";
import { For, JSX, onMount } from "solid-js";
import "./styles.css";
import AppGridStackItem, { AppGridStackItemProps } from "./item";
type AppGridStackProps = GridStackOptions & {
  items?: {
    itemProps?:AppGridStackItemProps,
    content?:JSX.Element
  }[]
}
const AppGridStack = (props: AppGridStackProps) => {
  const {items, ...options} = props;
  let gridStack!: HTMLDivElement;
  onMount(() => {
    var grid = GridStack.init(
      options,
      gridStack
    );
    // const serializedData = [
    //   { x: 0, y: 0, w: 1, h: 1, content: "item 1" },
    //   { x: 1, y: 0, w: 1, content: "item 2" },
    //   { x: 2, y: 0, content: "3" },
    // ];

    // grid.load(serializedData);
  });
  return (
    <div ref={gridStack}>
      <For each={items}>
        {(item) => (
          <AppGridStackItem {...item.itemProps}>{item.content}</AppGridStackItem>
        )}
      </For>
    </div>
  );
};
export default AppGridStack;
