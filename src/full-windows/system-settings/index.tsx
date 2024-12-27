import AppBox from "../../components/app-box";
import FullScreen from "../../components/full-screen";
import AppText from "../../components/app-text";
import { useContext } from "solid-js";
import { AppContext } from "../../app-conetent";
import { cn } from "../../utils/style";
import BgSetting from "./bg-setting";

const SystemSettings = () => {
	const { navBar, setNavBar, fullWindows } = useContext(AppContext);

	return (
		<FullScreen open={fullWindows.current === "system-settings"}>
			<div class="h-full overflow-auto">
				<div
					class={cn(
						"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-dense"
					)}
					// style={{ "grid-auto-rows": " minmax(100px, auto)" }}
				>
					<div>
						<AppText title={6}>导航栏设置</AppText>
						<div class={cn("grid grid-cols-4 gap-4 mt-2")}>
							<AppBox
								onClick={() => {
									setNavBar?.({ position: "top" });
								}}
								class="aspect-square flex flex-col items-center gap-2 p-2"
								blur={{ flag: false }}
								bgFreground={navBar.position === "top"}
							>
								<AppBox class="h-1/4 w-2/3" blur={{ flag: false }}></AppBox>
								<AppBox class="flex-1 w-full" blur={{ flag: false }}></AppBox>
							</AppBox>

							<AppBox
								onClick={() => {
									setNavBar?.({ position: "right" });
								}}
								bgFreground={navBar.position === "right"}
								class="aspect-square flex flex-row-reverse items-center gap-2 p-2"
								blur={{ flag: false }}
							>
								<AppBox class="w-1/4 h-2/3" blur={{ flag: false }}></AppBox>
								<AppBox class="flex-1 h-full" blur={{ flag: false }}></AppBox>
							</AppBox>
							<AppBox
								onClick={() => {
									setNavBar?.({ position: "bottom" });
								}}
								bgFreground={navBar.position === "bottom"}
								class="aspect-square flex flex-col-reverse items-center gap-2 p-2"
								blur={{ flag: false }}
							>
								<AppBox class="h-1/4 w-2/3" blur={{ flag: false }}></AppBox>
								<AppBox class="flex-1 w-full" blur={{ flag: false }}></AppBox>
							</AppBox>
							<AppBox
								onClick={() => {
									setNavBar?.({ position: "left" });
								}}
								bgFreground={navBar.position === "left"}
								class="aspect-square flex items-center gap-2 p-2"
								blur={{ flag: false }}
							>
								<AppBox class="w-1/4 h-2/3" blur={{ flag: false }}></AppBox>
								<AppBox class="flex-1 h-full" blur={{ flag: false }}></AppBox>
							</AppBox>
						</div>
					</div>
					<BgSetting />
				</div>
			</div>
		</FullScreen>
	);
};
export default SystemSettings;
