import {
	batch,
	createEffect,
	createMemo,
	createSignal,
	JSX,
	onCleanup,
	onMount,
	ParentProps,
	Show,
	splitProps,
} from "solid-js";
import { Portal } from "solid-js/web";
import { cn } from "../../utils/style";
import AppBox from "../app-box";
type IsCenter = {
	center?: true;
	position?: Position.types;
	alignment?: Position.types | "default";
	distance?: string;
};
type NotCenter = {
	center?: false;
	position: Position.types;
	alignment?: Position.types | "default";
	distance?: string;
};
export type AppPupopProps = ParentProps<
	{
		width?: string;
		height?: string;
		open?: boolean;
		defaultOpen?: boolean;
		triggerElement?: HTMLElement;
		active?: "click" | "mouseenter";
		scrollElement?: HTMLElement;
		style?: JSX.CSSProperties;
	} & (IsCenter | NotCenter)
>;
const AppPupop = (props: AppPupopProps) => {
	const [local, ohterProps] = splitProps(props, ["open", "position"]);
	const {
		triggerElement,
		scrollElement,
		center = true,
		alignment = "default",
		distance = "0.8rem",
		width = "20rem",
		height = "10rem",
		children,
		active = "click",
		style,
		defaultOpen = false,
	} = ohterProps;
	let ref!: HTMLDivElement;
	const [open, setOpen] = createSignal(defaultOpen);
	const [animateStart, setAnimateStart] = createSignal(false);
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

	const [_corruntBoundingClientRect, setCorruntBoundingClientRect] =
		createSignal<DOMRect>(new DOMRect(0, 0, 0, 0));

	const updateTriggerPosition = () => {
		if (!triggerElement) return;
		const triggerBoundingClientRect = triggerElement.getBoundingClientRect();
		batch(() => {
			setTriggerBorderPosition({
				right: triggerBoundingClientRect.left + triggerBoundingClientRect.width,
				bottom:
					triggerBoundingClientRect.top + triggerBoundingClientRect.height,
				...triggerBoundingClientRect.toJSON(),
			});
			setCorruntBoundingClientRect(ref?.getBoundingClientRect());
		});
	};

	createEffect(() => {
		setOpen(local.open || defaultOpen);
	});

	const styleMemo = createMemo(() => {
		updateTriggerPosition();
		let resStyle!: JSX.CSSProperties;
		const triggerPosition = triggerBorderPosition();
		if (open()) {
			if (center) {
				resStyle = {
					top: "50%",
					left: "50%",
					transform: "translate(-50%,-50%)",
				};
			} else {
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
							transform: `translateY(0)`,
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
							transform: `translateX(0)`,
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
							transform: `translateX(-100%)`,
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
					"z-index": "1",
					...(local.position &&
						(styleObj[local.position][alignment] ||
							styleObj[local.position].default)),
				};
			}
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
	});

	onMount(() => {
		updateTriggerPosition();
		if (active && triggerElement) {
			const handleClick = () => {
				setOpen(!open());
			};

			triggerElement.addEventListener(active, handleClick);

			onCleanup(() => {
				triggerElement.removeEventListener(active, handleClick);
			});
		}
		window.addEventListener("resize", updateTriggerPosition);
		scrollElement?.addEventListener("scroll", updateTriggerPosition);

		onCleanup(() => {
			window.removeEventListener("resize", updateTriggerPosition);
			scrollElement?.removeEventListener("scroll", updateTriggerPosition);
		});
	});

	return (
		<Show when={true}>
			<Portal mount={document.getElementById("pupop") as Node}>
				<AppBox
					ref={ref}
					class={cn(
						"will-change-transform",
						"absolute transition-all ease-in-out duration-300"
					)}
					style={{
						width,
						height,
						...styleMemo(),
						...style,
						"max-width": "calc(100vw - 2rem)",
					}}
				>
					<div class="size-full">{children}</div>
				</AppBox>
			</Portal>
		</Show>
	);
};
export default AppPupop;
