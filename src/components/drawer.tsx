import {
	createEffect,
	createSignal,
	JSX,
	ParentComponent,
	Show,
} from "solid-js";
import { Portal } from "solid-js/web";
import { Transition } from "solid-transition-group";
import { cn } from "../utils/style";
import AppBox from "./app-box";

export type DrawerProps = {
	open?: boolean;
	position?: "pageTop" | "pageRight" | "pageBottom" | "pageLeft";
	duration?: number;
	alignment?: string;
} & Pick<JSX.HTMLAttributes<HTMLDivElement>, "class" | "style">;
const Drawer: ParentComponent<DrawerProps> = (props) => {
	const [open, setOpen] = createSignal(false);

	createEffect(() => {
		setOpen(props.open || false);
	});

	const positionObj = {
		pageTop: `top-4 left-4 right-4 min-h-[10rem]`,
		pageRight: `right-4 top-4 bottom-4 min-w-[20rem]`,
		pageBottom: `bottom-4 left-4 right-4 min-h-[10rem]`,
		pageLeft: `left-4 top-4 bottom-4 min-w-[20rem]`,
	};

	const transformObj = {
		pageTop: `translateY(-100%)`,
		pageRight: "translateX(100%)",
		pageBottom: `translateY(100%)`,
		pageLeft: "translateX(-100%)",
	};

	return (
		<Portal mount={document.getElementById("drawer") as Node}>
			<Transition
				onEnter={(el, done) => {
					const a = el.animate(
						[
							{
								opacity: 0,
								transform: transformObj[props.position || "pageRight"],
							},
							{ opacity: 1 },
						],
						{
							duration: props.duration || 300,
						}
					);
					a.finished.then(done);
				}}
				onExit={(el, done) => {
					const a = el.animate(
						[
							{ opacity: 1 },
							{
								opacity: 0,
								transform: transformObj[props.position || "pageRight"],
							},
						],
						{
							duration: props.duration || 300,
						}
					);
					a.finished.then(done);
				}}
			>
				<Show when={open()}>
					<AppBox
						class={cn([
							props.class,
							"absolute shadow-lg",
							positionObj[props.position || "pageRight"],
						])}
						style={props.style}
					>
						{props.children}
					</AppBox>
				</Show>
			</Transition>
		</Portal>
	);
};

export default Drawer;
