import FullScreen from "../../components/full-screen";
import { Show, useContext } from "solid-js";
import { AppContext } from "../../app-conetent";
import { cn } from "../../utils/style";
import BgSetting from "./bg-setting";
import NavBarSetting from "./navBar-setting";
import StyleSetting from "./style-setting";

const SystemSettings = () => {
	const { style, fullWindows } = useContext(AppContext);

	return (
		<FullScreen open={fullWindows.current === "system-settings"}>
			<div class="h-full">
				<div
					class={cn(
						"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max grid-flow-dense"
					)}
				>
					<NavBarSetting />
					<StyleSetting />
					<Show when={style.value === "groundGlass"}>
						<BgSetting />
					</Show>
				</div>
			</div>
		</FullScreen>
	);
};
export default SystemSettings;
