import { JSX, ParentComponent, ParentProps } from "solid-js";
import AppBox from "../app-box";

type ItemProps = {
	ref?: HTMLDivElement;
} & ParentProps<
	Pick<JSX.CustomEventHandlersCamelCase<HTMLDivElement>, "onClick">
>;
const Item: ParentComponent<ItemProps> = (props) => {
	return (
		<AppBox
			ref={props.ref}
			type="dark"
			class="h-12 w-12 cursor-pointer flex justify-center items-center"
			onClick={props.onClick}
			shadow
		>
			{props.children}
		</AppBox>
	);
};

export default Item;
