import { JSX, ParentComponent, ParentProps } from "solid-js";
import AppBox from "../app-box";

type ItemProps = {
  ref?: HTMLDivElement;
  open?: boolean;
} & ParentProps<
  Pick<JSX.CustomEventHandlersCamelCase<HTMLDivElement>, "onClick">
>;
const Item: ParentComponent<ItemProps> = (props) => {
  return (
    <AppBox
      ref={props.ref}
      type={props.open ? "light" : "dark"}
      class="h-12 w-12 cursor-pointer flex justify-center items-center relative"
      onClick={props.onClick}
      shadow
    >
      {props.children}
      {/* <Show when={props.open}>
				<div class="absolute -bottom-2 w-1 h-1 bg-gray-500 rounded-full"></div>
			</Show> */}
    </AppBox>
  );
};

export default Item;
