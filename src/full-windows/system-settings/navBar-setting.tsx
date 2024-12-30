import { useContext } from "solid-js";
import AppBox from "../../components/app-box";
import AppText from "../../components/app-text";
import { cn } from "../../utils/style";
import { AppContext } from "../../app-conetent";

const NavBarSetting = () => {
	const { navBar, setNavBar } = useContext(AppContext);
	return (
		<div>
			<AppText title={6}>导航栏设置</AppText>
			<div class={cn("grid grid-cols-4 gap-4 mt-2")}>
				<AppBox
					onClick={() => {
						setNavBar?.({ position: "top" });
					}}
					class="aspect-square flex flex-col items-center gap-2 p-2"
					blur={{ flag: false }}
					active={navBar.position === "top"}
				>
					<AppBox class="h-1/4 w-2/3" blur={{ flag: false }}></AppBox>
					<AppBox class="flex-1 w-full" blur={{ flag: false }}></AppBox>
				</AppBox>

				<AppBox
					onClick={() => {
						setNavBar?.({ position: "right" });
					}}
					active={navBar.position === "right"}
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
					active={navBar.position === "bottom"}
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
					active={navBar.position === "left"}
					class="aspect-square flex items-center gap-2 p-2"
					blur={{ flag: false }}
				>
					<AppBox class="w-1/4 h-2/3" blur={{ flag: false }}></AppBox>
					<AppBox class="flex-1 h-full" blur={{ flag: false }}></AppBox>
				</AppBox>
			</div>
		</div>
	);
};
export default NavBarSetting;
