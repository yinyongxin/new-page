import {
	batch,
	createEffect,
	createSignal,
	JSX,
	onCleanup,
	onMount,
	ParentProps,
	Show,
	splitProps,
	mergeProps,
} from "solid-js";
import { Portal } from "solid-js/web";
import { cn } from "../../utils/style";
export type AppPupopProps = ParentProps<{
	width?: string;
	height?: string;
	open?: boolean;
	position?: Position.types;
	alignment?: Position.types | "default";
	trigger?: Element;
	distance?: string;
	active?: "click" | "mouseenter";
	center?: boolean;
	scrollElement?: Element;
	style?: JSX.CSSProperties;
}>;
const AppPupop = (props: AppPupopProps) => {
	const merged = mergeProps({ open: false }, props);
	const [local, ohterProps] = splitProps(merged, ["open", "position"]);
	const {
		trigger,
		alignment = "default",
		distance = "0.8rem",
		center = true,
		scrollElement,
		width = "20rem",
		height = "10rem",
		children,
		active = "click",
		style,
	} = ohterProps;
	const [position, setPosition] = createSignal<Position.types>("top");
	const [open, setOpen] = createSignal(false);
	const [triggerBorderPosition, setTriggerBorderPosition] = createSignal({
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		x: 0,
		y: 0,
		height: 0,
		width: 0,
	});

	const updateTriggerPosition = () => {
		if (!trigger) return;
		const triggerBoundingClientRect = trigger.getBoundingClientRect();
		batch(() => {
			setTriggerBorderPosition({
				right: triggerBoundingClientRect.left + triggerBoundingClientRect.width,
				bottom:
					triggerBoundingClientRect.top + triggerBoundingClientRect.height,
				...triggerBoundingClientRect.toJSON(),
			});
			setCorruntBoundingClientRect(ref.getBoundingClientRect());
		});
	};

	createEffect(() => {
		batch(() => {
			setOpen(local.open);
			setPosition(local.position || "top");
		});
		updateTriggerPosition();
	});

	let ref!: HTMLDivElement;
	const [corruntBoundingClientRect, setCorruntBoundingClientRect] =
		createSignal<DOMRect>(new DOMRect(0, 0, 0, 0));

	onMount(() => {
		if (trigger) {
			updateTriggerPosition();

			window.addEventListener("resize", updateTriggerPosition);
			scrollElement?.addEventListener("scroll", updateTriggerPosition);

			onCleanup(() => {
				window.removeEventListener("resize", updateTriggerPosition);
				scrollElement?.removeEventListener("scroll", updateTriggerPosition);
			});
		}
	});

	createEffect(() => {
		if (active && trigger) {
			const handleClick = () => {
				setOpen(!open());
			};

			trigger.addEventListener(active, handleClick);

			onCleanup(() => {
				trigger.removeEventListener(active, handleClick);
			});
		}
	});

	const getStyle = () => {
		let resStyle!: JSX.CSSProperties;
		const triggerPosition = triggerBorderPosition();
		if (open()) {
			if (center) {
				resStyle = {
					top: "50%",
					left: "50%",
					transform: "translate(-50%,-50%)",
				};
			}
			const styleObj: Record<
				Position.types,
				Partial<
					Record<
						Position.types | "default",
						Pick<JSX.CSSProperties, "top" | "left" | "transform">
					>
				>
			> = {
				top: {
					right: {
						top: `calc(${triggerPosition.top}px - ${distance})`,
						left: `${triggerPosition.left + triggerPosition.width}px`,
						transform: `translateX(-100%) translateY(-100%)`,
					},
					left: {
						top: `calc(${triggerPosition.top}px - ${distance})`,
						left: `${triggerPosition.left}px`,
						transform: `translateY(-100%)`,
					},
					default: {
						top: `calc(${triggerPosition.top}px - ${distance})`,
						left: `${triggerPosition.left + triggerPosition.width * 0.5}px`,
						transform: `translateX(-50%) translateY(-100%)`,
					},
				},
				right: {
					top: {
						top: `${triggerPosition.top}px`,
						left: `calc(${triggerPosition.right}px + ${distance})`,
						transform: `translateY(0%)`,
					},
					bottom: {
						top: `${triggerPosition.top + triggerPosition.height}px`,
						left: `calc(${triggerPosition.right}px + ${distance})`,
						transform: `translateY(-100%)`,
					},
					default: {
						top: `${triggerPosition.top + triggerPosition.height / 2}px`,
						left: `calc(${triggerPosition.right}px + ${distance})`,
						transform: `translateY(-50%)`,
					},
				},
				bottom: {
					right: {
						top: `calc(${
							triggerPosition.top + triggerPosition.height
						}px + ${distance})`,
						left: `${triggerPosition.left + triggerPosition.width}px`,
						transform: `translateX(-100%)`,
					},
					left: {
						top: `calc(${
							triggerPosition.top + triggerPosition.height
						}px + ${distance})`,
						left: `${triggerPosition.left}px`,
						transform: `translateX(0%)`,
					},
					default: {
						top: `calc(${
							triggerPosition.top + triggerPosition.height
						}px + ${distance})`,
						left: `${triggerPosition.left + triggerPosition.width * 0.5}px`,
						transform: `translateX(-50%)`,
					},
				},
				left: {
					top: {
						top: `${triggerPosition.top}px`,
						left: `calc(${triggerPosition.left}px - ${distance})`,
						transform: `translateX(-100%) translateY(0%)`,
					},
					bottom: {
						top: `${triggerPosition.top + triggerPosition.height}px`,
						left: `calc(${triggerPosition.left}px - ${distance})`,
						transform: `translateX(-100%) translateY(-100%)`,
					},
					default: {
						top: `${triggerPosition.top + triggerPosition.height / 2}px`,
						left: `calc(${triggerPosition.left}px - ${distance})`,
						transform: `translateX(-100%) translateY(-50%)`,
					},
				},
			};
			resStyle = {
				"pointer-events": "unset",
				...(styleObj[position()][alignment] || styleObj[position()].default),
			};
		} else {
			resStyle = {
				top: `${triggerPosition.top + triggerPosition.width * 0.5}px`,
				left: `${triggerPosition.left + triggerPosition.height * 0.5}px`,
				transform: `
					translateX(
						calc(-50%)
					)
					translateY(
						calc(-50%)
					)
					scale(0.05)
				`,
				opacity: "0",
				"pointer-events": "none",
			};
		}
		return resStyle;
	};

	return (
		<Show when={true}>
			<Portal mount={document.getElementById("pupop") as Node}>
				<div
					ref={ref}
					class={cn(
						"z-50 absolute transition-all ease-in-out duration-300",
						{}
					)}
					style={{
						...getStyle(),
						width,
						height,
						...style,
					}}
				>
					<div class="bg-black/50 absolute inset-0 rounded-xl z-[51]"></div>
					<div class="absolute inset-0 z-[52]">{children}</div>
				</div>
			</Portal>
		</Show>
	);
};
export default AppPupop;
