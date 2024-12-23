import { JSX, ParentProps, useContext, mergeProps } from "solid-js";
import { cn } from "../utils/style";
import { AppContext, AppContextType } from "../app-conetent";
import { VariantProps, cva } from "class-variance-authority";

const appBoxVariants = cva("", {
	variants: {
		rounded: {
			none: "rounded-none",
			sm: "rounded-sm",
			default: "rounded",
			md: "rounded-md",
			lg: "rounded-lg",
			xl: "rounded-xl",
			"2xl": "rounded-2xl",
			"3xl": "rounded-3xl",
			full: "rounded-full",
		},
		shadow: {
			true: "shadow",
			default: "shadow",
			false: "",
			none: "",
			sm: "shadow-sm",
			md: "shadow-md",
			lg: "shadow-lg",
			xl: "shadow-xl",
			"2xl": "shadow-2xl",
			inner: "shadow-inner",
		},
	},
	defaultVariants: {
		rounded: "2xl",
		shadow: false,
	},
});

export type AppBoxProps = ParentProps<
	{
		blur?: Partial<AppContextType["blur"]>;
		type?: "light" | "dark";
		ref?: HTMLDivElement;
		rounded?: "none" | "default" | "sm" | "2xl";
	} & VariantProps<typeof appBoxVariants> &
		Pick<JSX.HTMLAttributes<HTMLDivElement>, "class" | "style"> &
		Pick<JSX.CustomEventHandlersCamelCase<HTMLDivElement>, "onClick">
>;
const AppBox = (props: AppBoxProps) => {
	const { blur } = useContext(AppContext);
	const merge = mergeProps(
		{
			type: "light",
		},
		props
	);
	const { flag = blur.flag } = { ...props.blur };
	return (
		<div
			ref={props.ref}
			style={props.style}
			onClick={props.onClick}
			class={cn([
				props.class,
				appBoxVariants({
					rounded: props.rounded,
					shadow: props.shadow,
				}),
				{
					"backdrop-blur-sm": flag && blur.size === "sm",
					"backdrop-blur": flag && blur.size === "default",
					"backdrop-blur-md": flag && blur.size === "md",
					"bg-white/20": merge.type === "light",
					"bg-black/20": merge.type === "dark",
					// neumorphism: true,
				},
			])}
		>
			{props.children}
		</div>
	);
};

export default AppBox;
