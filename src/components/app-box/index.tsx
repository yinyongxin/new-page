import { JSX, ParentProps, useContext } from "solid-js";
import { cn } from "../../utils/style";
import { AppContext } from "../../app-conetent";

export type BoxProps = ParentProps<
	{
		blur?: {
			off?: boolean;
			type?: "light" | "dark";
		};
		ref?: HTMLElement;
		rounded?: "default" | "none" | "sm" | "2xl";
	} & Pick<JSX.HTMLAttributes<HTMLDivElement>, "class" | "style">
>;
const AppBox = (props: BoxProps) => {
	const { appContext } = useContext(AppContext);
	const { children, blur, style, rounded = "default" } = props;
	const { off = appContext.blur, type = "light" } = { ...blur };
	return (
		<div
			style={style}
			class={cn([
				props.class,
				{
					"backdrop-blur": off,
					"bg-white/30": type === "light",
					"bg-black/30": type === "dark",
					"rounded-none": rounded === "none",
					"rounded-sm": rounded === "sm",
					"rounded-xl": rounded === "default",
					"rounded-2xl": rounded === "2xl",
				},
			])}
		>
			{children}
		</div>
	);
};

export default AppBox;
