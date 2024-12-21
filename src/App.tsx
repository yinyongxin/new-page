import { AppContext, appContextDefaultValue } from "./app-conetent";
import { createStore } from "solid-js/store";
import NavBar from "./components/nav-bar";
import Background from "./components/background";
import FullWindows from "./full-windows";

function App() {
	const [navBar, setNavBar] = createStore(appContextDefaultValue.navBar);
	const [blur, setBlur] = createStore(appContextDefaultValue.blur);
	const [background, setBackground] = createStore(
		appContextDefaultValue.background
	);
	const [fullWindows, setFullWindows] = createStore(
		appContextDefaultValue.fullWindows
	);
	const [pages, setPages] = createStore(appContextDefaultValue.pages);
	return (
		<AppContext.Provider
			value={{
				blur,
				setBlur,
				navBar,
				setNavBar,
				background,
				setBackground,
				fullWindows,
				setFullWindows,
				pages,
				setPages,
			}}
		>
			<Background />
			<FullWindows />
			<NavBar />
			<div class="absolute inset-0"></div>
		</AppContext.Provider>
	);
}

export default App;
