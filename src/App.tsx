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

function App() {
	const [appContext, setAppContext] = createStore(
		appContextDefaultValue.appContext
	);
	const [navBar, setNavBar] = createStore(appContextDefaultValue.navBar);
	const [background] = createStore(appContextDefaultValue.background);
	const [open, setOpen] = createSignal(false);
	return (
		<AppContext.Provider
			value={{ appContext, setAppContext, navBar, setNavBar, background }}
		>
			{/* <Background /> */}
			<NavBar>
				<Setting />
				<AddWebsite />
				<Item
					onClick={() => {
						setOpen(!open());
					}}
				>
					<LayoutGrid />
				</Item>
			</NavBar>
			<div>
        <AppText color="link"> 
          link
        </AppText>
      </div>
			<FullScreen open={open()}>
				<div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 p-4 sm:p-20 gap-6 sm:gap-8">
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						1
					</div>
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						2
					</div>
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						3
					</div>
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						4
					</div>
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						5
					</div>
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						6
					</div>
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						7
					</div>
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						8
					</div>
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						9
					</div>
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						10
					</div>
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						11
					</div>
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						12
					</div>
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						13
					</div>
					<div class="aspect-square neumorphism rounded-xl flex justify-center items-center">
						14
					</div>
				</div>
			</FullScreen>
		</AppContext.Provider>
	);
}

export default App;
