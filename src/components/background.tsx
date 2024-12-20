import { useContext } from "solid-js";
import { AppContext } from "../app-conetent";
import { cn } from "../utils/style";

const Background = () => {
	const { background } = useContext(AppContext);
	const getStyle = () => {
		if (background.type === "image") {
			return {
				"background-image": `url(${background.image.src})`,
			};
		}
	};
	return (
		<div
			class={cn("absolute inset-0", {
				[background.className]: background.type === "css",
			})}
			style={getStyle()}
		>
			<div
				class={cn("h-full w-full", {
					"backdrop-blur bg-white/20":
						background.backdropBlur.flag &&
						background.backdropBlur.size === "default",
				})}
			/>
		</div>
	);
};

export default Background;
