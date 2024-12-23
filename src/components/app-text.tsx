import { VariantProps, cva } from "class-variance-authority";
import { JSX, ParentComponent, splitProps } from "solid-js";
import { cn } from "../utils/style";

const appTextVariants = cva("", {
	variants: {
		size: {
			xs: "text-xs",
			sm: "text-sm",
			base: "text-base",
			lg: "text-lg",
		},
		color: {
			error: "text-red-500",
			success: "text-green-500",
			warning: "text-orange-500",
			primary: "text-violet-500",
			secondary: "text-gray-500",
			link: "text-blue-500",
		},
		block: {
			true: "block",
			false: "inline-block",
		},
		title: {
			1: "text-6xl font-medium",
			2: "text-5xl font-medium",
			3: "text-4xl font-medium",
			4: "text-3xl font-medium",
			5: "text-2xl font-medium",
			6: "text-xl font-medium",
		},
	},
	defaultVariants: {
		size: "base",
		block: false,
	},
});

type AppTextProps = Pick<JSX.HTMLAttributes<HTMLDivElement>, "class"> &
	VariantProps<typeof appTextVariants>;

const AppText: ParentComponent<AppTextProps> = (props) => {
	const [local, otherProps] = splitProps(props, ["children"]);
	return (
		<div
			class={cn(
				appTextVariants({
					size: otherProps?.size,
					block: otherProps?.block,
					color: otherProps?.color,
					title: otherProps?.title,
				}),
				otherProps.class
			)}
		>
			{local.children}
		</div>
	);
};

export default AppText;
