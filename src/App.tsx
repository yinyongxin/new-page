import { AppContext, appContextDefaultValue } from "./app-conetent";
import { createStore } from "solid-js/store";
import FullScreen from "./components/full-screen";
import NavBar from "./components/nav-bar";
import Setting from "./components/nav-bar/comps/setting";
import LayoutGrid from "lucide-solid/icons/layout-grid";
import Item from "./components/nav-bar/item";
import { createSignal } from "solid-js";
import AppBox from "./components/app-box";
import Background from "./components/background";
import Layout from "./layout";
import FullPages from "./full-pages";

function App() {
	const [navBar, setNavBar] = createStore(appContextDefaultValue.navBar);
	const [blur, setBlur] = createStore(appContextDefaultValue.blur);
	const [background, setBackground] = createStore(
		appContextDefaultValue.background
	);
	const [open, setOpen] = createSignal(0);
	return (
		<AppContext.Provider
			value={{ blur, setBlur, navBar, setNavBar, background, setBackground }}
		>
			<Background />
			<FullPages />
			<NavBar>
			
			</NavBar>
		</AppContext.Provider>
	);
}

export default App;
