import { JSX, ParentProps, useContext } from "solid-js";
import { cn } from "../../utils/style";
import { AppContext } from "../../app-conetent";

export type BoxProps = ParentProps<
	{
		blur?: {
			off?: boolean;
			type?: "light" | "dark";
		};
		style?: JSX.CSSProperties;
		ref?: HTMLElement;
	} & Pick<JSX.HTMLAttributes<HTMLDivElement>, "class">
>;
const AppBox = (props: BoxProps) => {
	const { appContext } = useContext(AppContext);
	const { children, blur, style } = props;
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
					"rounded-xl": true,
				},
			])}
		>
			{children}
		</div>
	);
};

export default AppBox;
