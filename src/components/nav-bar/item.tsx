import { JSX, ParentComponent } from "solid-js";

const Item: ParentComponent<
	Pick<JSX.CustomEventHandlersCamelCase<HTMLDivElement>, "onClick">
> = (props) => {
	return (
		<div
			class="h-12 w-12 bg-black/20 rounded-xl cursor-pointer flex justify-center items-center"
			onClick={props.onClick}
		>
			{props.children}
		</div>
	);
};

export default Item;
