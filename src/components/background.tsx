import { useContext } from "solid-js";
import { AppContext } from "../app-conetent";
import { cn } from "../utils/style";

const Background = () => {
  const { background } = useContext(AppContext);
	return (
		<div
			class={cn("absolute inset-0", {
				[background.className]: background.type === "css",
			})}
		>
			<div
				class={cn("h-full w-full", {
					"backdrop-blur bg-white/30":
						background.backdropBlur.off &&
						background.backdropBlur.size === "default",
				})}
			/>
		</div>
	);
};

export default Background;
