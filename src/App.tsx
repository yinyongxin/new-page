import { cn } from "./utils/style";
import { AppContext, appContextDefaultValue } from "./app-conetent";
import { createStore } from "solid-js/store";
import FullScreen from "./components/full-screen";
import NavBar from "./components/nav-bar";
import Background from "./components/background";
import AddWebsite from "./components/nav-bar/comps/add-website";
import Setting from "./components/nav-bar/comps/setting";
import LayoutGrid from "lucide-solid/icons/layout-grid";
import Item from "./components/nav-bar/item";
import { createSignal } from "solid-js";
import AppText from "./components/app-text";
import AppBox from "./components/app-box";

function App() {
	const [navBar, setNavBar] = createStore(appContextDefaultValue.navBar);
	const [blur, setBlur] = createStore(appContextDefaultValue.blur);
	const [background, setBackground] = createStore(appContextDefaultValue.background);
	const [open, setOpen] = createSignal(0);
	return (
		<AppContext.Provider
			value={{ blur, setBlur, navBar, setNavBar, background, setBackground }}
		>
			<Background />
			<NavBar>
				<Setting />
				<Item
					onClick={() => {
						setOpen(open() ? 0 : 1);
					}}
				>
					<LayoutGrid />
				</Item>
				<Item
					onClick={() => {
						setOpen(open() ? 0 : 2);
					}}
				>
					asdasd
				</Item>
			</NavBar>
			<div>
				<AppText color="link">link</AppText>
			</div>
			<FullScreen open={open() === 1}>
				<div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 p-4 sm:p-20 gap-6 sm:gap-8">
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						1
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						2
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						3
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						4
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						5
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						6
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						7
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						8
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						9
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						10
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						11
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						12
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						13
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						14
					</AppBox>
				</div>
			</FullScreen>
			<FullScreen open={open() === 2}>
				<div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 p-4 sm:p-20 gap-6 sm:gap-8">
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						1
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						2
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						3
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						4
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						5
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						6
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						7
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						8
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						9
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						10
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						11
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						12
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						13
					</AppBox>
					<AppBox class="aspect-square rounded-xl flex justify-center items-center">
						14
					</AppBox>
				</div>
			</FullScreen>
		</AppContext.Provider>
	);
}

export default App;
