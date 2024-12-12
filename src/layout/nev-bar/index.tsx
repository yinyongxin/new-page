import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils/style";
import classes from "./index.module.css";
import { createSignal, useContext } from "solid-js";
import { Home, Settings } from "lucide-solid/icons";
import { AppContext } from "../../app-conetent";
import AppPupop from "../../components/app-pupop";
import Test from "../../components/test";

const positionOptions: Record<Position.types, string> = {
	top: "top-4 left-1/2 -translate-x-1/2",
	right: "right-4 top-1/2 -translate-y-1/2",
	bottom: "bottom-4 left-1/2 -translate-x-1/2",
	left: "left-4 top-1/2 -translate-y-1/2",
};

const navBarVariants = cva("absolute p-3 rounded-xl z-100s", {
	variants: {
		position: positionOptions,
	},
	defaultVariants: {
		position: "left",
	},
});

type NavBarProps = {
	blur?: boolean;
} & VariantProps<typeof navBarVariants>;

const NavBar = (props: NavBarProps) => {
	const {
		navBar: { position: navBarPosition },
		blur: navBarBlur,
	} = useContext(AppContext);

	const { position = navBarPosition, blur = navBarBlur } = props;

	let homeCef!: HTMLDivElement;
	let settingRef!: HTMLDivElement;
	const [homeOpen, setHomeOpen] = createSignal(false);
	return (
		<nav class={cn(navBarVariants({ position }), classes.navBar)}>
			<div
				class={cn("absolute inset-0 rounded-2xl overflow-hidden", {
					"backdrop-blur": blur,
					"bg-white/20": blur,
					"bg-white/80": !blur,
				})}
			></div>
			<div
				class={cn("relative flex gap-2 text-white", {
					"flex-col": position === "left" || position === "right",
				})}
			>
				<div
					ref={homeCef}
					class="h-12 w-12 bg-black/20 rounded-xl cursor-pointer flex justify-center items-center"
					onClick={() => {
						setHomeOpen(!homeOpen());
					}}
				>
					<Home />
				</div>
				<div
					ref={settingRef}
					class="h-12 w-12 bg-black/20 rounded-xl cursor-pointer flex justify-center items-center"
				>
					<Settings class="animate-[spin_3s_linear_infinite]" />
				</div>
			</div>
			<AppPupop open={homeOpen()} trigger={homeCef}>
				<div>home</div>
			</AppPupop>
			<AppPupop active="click" trigger={settingRef}>
				<div>setting</div>
			</AppPupop>
		</nav>
	);
};

export default NavBar;
