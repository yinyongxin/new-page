import Settings from "lucide-solid/icons/settings";
import { createSignal, useContext } from "solid-js";
import { AppContext } from "../../../../app-conetent";
import Drawer from "../../../drawer";
import Item from "../../item";
import NavBarConfigure from "./navbar-configure";
import { cn } from "../../../../utils/style";

const Setting = () => {
	let settingRef!: HTMLDivElement;

	const { navBar } = useContext(AppContext);
	const [open, setOpen] = createSignal(false);

	const drawerPositionObj = {
		left: "pageRight",
		right: "pageLeft",
		top: "pageBottom",
		bottom: "pageTop",
	} as const;

	return (
		<>
			<Item
				ref={settingRef}
				onClick={() => {
					setOpen(!open());
				}}
			>
				<Settings class="animate-[spin_3s_linear_infinite]" />
			</Item>
			<Drawer
				open={open()}
				position={drawerPositionObj[navBar.position]}
				alignment="1rem"
			>
				<div
					class={cn("grid grid-cols-1 ", {
						"sm:grid-cols-2 xl:grid-cols-4":
							navBar.position === "top" || navBar.position === "bottom",
					})}
				>
					<NavBarConfigure />
					<NavBarConfigure />
				</div>
			</Drawer>
		</>
	);
};

export default Setting;
