import { JSX, ParentComponent, ParentProps, Show, useContext } from "solid-js";
import AppBox from "../app-box";
import { cn } from "../../utils/style";
import { AppContext } from "../../app-conetent";

type ItemProps = {
	ref?: HTMLDivElement;
	open?: boolean;
} & ParentProps<
	Pick<JSX.CustomEventHandlersCamelCase<HTMLDivElement>, "onClick">
>;
const Item: ParentComponent<ItemProps> = (props) => {
	const { navBar } = useContext(AppContext);
	return (
		<AppBox
			ref={props.ref}
			class="h-12 w-12 cursor-pointer flex justify-center items-center relative"
			onClick={props.onClick}
			shadow
		>
			{props.children}
			<Show when={props.open}>
				<div
					class={cn("absolute w-1 h-1 bg-gray-500 rounded-full", {
						"-top-2": navBar.position === "top",
						"-right-2": navBar.position === "right",
						"-bottom-2": navBar.position === "bottom",
						"-left-2": navBar.position === "left",
					})}
				></div>
			</Show>
		</AppBox>
	);
};

export default Item;
