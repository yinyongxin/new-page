import FullScreen from "../../components/full-screen";
import { useContext } from "solid-js";
import { AppContext } from "../../app-conetent";
import { cn } from "../../utils/style";
import BgSetting from "./bg-setting";
import NavBarSetting from "./navBar-setting";

const SystemSettings = () => {
	const { fullWindows } = useContext(AppContext);

	return (
		<FullScreen open={fullWindows.current === "system-settings"}>
			<div class="h-full overflow-auto">
				<div
					class={cn(
						"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max grid-flow-dense"
					)}
				>
					<NavBarSetting />
					<BgSetting />
				</div>
			</div>
		</FullScreen>
	);
};
export default SystemSettings;
