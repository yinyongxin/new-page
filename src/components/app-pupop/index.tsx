import {
	createEffect,
	createSignal,
	mergeProps,
	ParentProps,
	Show,
	splitProps,
} from "solid-js";
import { Portal } from "solid-js/web";
import { cn } from "../../utils/style";
export type AppPupopProps = ParentProps<{
	open: boolean;
	position?: Position.types | "center";
	trigger?: Element;
	distance?: string;
}>;
const AppPupop = (props: AppPupopProps) => {
	const [local, ohterProps] = splitProps(props, ["open"]);

	const { trigger, position = "center", distance = "0.8rem" } = ohterProps;

	// const { position, distance } = mergeProps(
	// 	{ position = "center", distance = "0.8rem" },
	// 	props
	// );

	const [boundingClientRect, setBoundingClientRect] = createSignal<DOMRect>(
		new DOMRect(0, 0, 0, 0)
	);

	let ref!: HTMLDivElement;
	const [corruntBoundingClientRect, setCorruntBoundingClientRect] =
		createSignal<DOMRect>(new DOMRect(0, 0, 0, 0));

	createEffect(() => {
		if (trigger) {
			setBoundingClientRect(trigger.getBoundingClientRect());
			setCorruntBoundingClientRect(ref.getBoundingClientRect());
		}
	});

	const positionClass = () => {
		const obj = {
			top: "top-0 left-1/2 -translate-x-1/2",
			right: "right-0 top-1/2 -translate-y-1/2",
			bottom: "bottom-0 left-1/2 -translate-x-1/2",
			left: "left-0 left-1/2 -translate-x-1/2",
			center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
		};
		return obj[position];
	};

	const getStyle = () => {
		if (local.open) {
			return {};
		}
		return {
			top: `calc( ${
				boundingClientRect()?.top + boundingClientRect()?.height
			}px + ${distance})`,
			left: boundingClientRect()?.left + "px",
			transform: `translateX(calc(-50% + ${
				boundingClientRect()?.width / 2
			}px)) scale(0.05)`,
			"transform-origin": "top",
      opacity: "0"
		};
	};

	return (
		<Show when={true}>
			<Portal mount={document.getElementById("pupop") as Node}>
				<div
					ref={ref}
					class={cn(
						"bg-black/40 z-50 w-[600px] h-[400px] rounded-xl absolute flex transition-all duration-[1000ms]",
						{
							[positionClass()]: local.open,
						}
					)}
					style={getStyle()}
				>
					<div class="flex-1 h-full bg-red-500/10 "></div>
					<div class="flex-1 h-full bg-green-500/10"></div>
				</div>
			</Portal>
		</Show>
	);
};
export default AppPupop;
