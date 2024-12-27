import { JSX, ParentComponent, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { Transition } from "solid-transition-group";
import { cn } from "../utils/style";
import AppBox from "./app-box";
export type DrawerProps = {
	open?: boolean;
	position?: "pageTop" | "pageRight" | "pageBottom" | "pageLeft";
	duration?: number;
	alignment?: string;
	style?: JSX.CSSProperties;
} & Pick<JSX.HTMLAttributes<HTMLDivElement>, "class">;

const positionObj = {
	pageTop: `top-4 left-4 right-4 min-h-[10rem]`,
	pageRight: `right-4 top-4 bottom-4 left-4 sm:left-auto sm:min-w-[24rem] xl:min-w-[28rem] 2xl:min-w-[30rem]`,
	pageBottom: `bottom-4 left-4 right-4 min-h-[10rem]`,
	pageLeft: `left-4 top-4 bottom-4 right-4 sm:right-auto sm:min-w-[24rem] xl:min-w-[28rem] 2xl:min-w-[30rem]`,
};
const Drawer: ParentComponent<DrawerProps> = (props) => {
	const [local, ohterProps] = splitProps(props, ["open"]);

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
								transform: transformObj[ohterProps.position || "pageRight"],
							},
							{ opacity: 1 },
						],
						{
							duration: ohterProps.duration || 300,
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
								transform: transformObj[ohterProps.position || "pageRight"],
							},
						],
						{
							duration: ohterProps.duration || 300,
						}
					);
					a.finished.then(done);
				}}
			>
				<Show when={local.open}>
					<AppBox
						shadow="default"
						class={cn([
							"absolute",
							ohterProps.class,
							positionObj[ohterProps.position || "pageRight"],
						])}
						style={{ ...ohterProps.style }}
					>
						{ohterProps.children}
					</AppBox>
				</Show>
			</Transition>
		</Portal>
	);
};

export default Drawer;
