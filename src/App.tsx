import classes from "./app.module.css";
import { cn } from "./utils/style";
import { AppContext, appContextDefaultValue } from "./app-conetent";
import { createStore } from "solid-js/store";
import FullScreen from "./components/full-screen";
import NavBar from "./components/nav-bar";
import Background from "./components/background";

function App() {
	const [appContext, setAppContext] = createStore(
		appContextDefaultValue.appContext
	);
	const [navBar, setNavBar] = createStore(appContextDefaultValue.navBar);
	const [background] = createStore(appContextDefaultValue.background);

	return (
		<AppContext.Provider
			value={{ appContext, setAppContext, navBar, setNavBar, background }}
		>
			<Background />
			<NavBar />
			<div class={cn(classes.app)}></div>
			<FullScreen>FullScreen</FullScreen>
		</AppContext.Provider>
	);
}

export default App;
