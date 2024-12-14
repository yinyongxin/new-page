import classes from "./app.module.css";
import { cn } from "./utils/style";
import { AppContext, appContextDefaultValue } from "./app-conetent";
import Layout from "./layout";
import { createStore } from "solid-js/store";
enum BackgroundClassName {
	Circle = "background-circle",
	BlueLine = "background-blue-line",
}
function App() {
	const [appContext, setAppContext] = createStore(
		appContextDefaultValue.appContext
	);
	const [navBar, setNavBar] = createStore(appContextDefaultValue.navBar);
	const [background, setBackground] = createStore({
		type: "css", //'image'
		className: BackgroundClassName.BlueLine,
		backdropBlur: {
			off: true,
			size: "default",
		},
	});

	return (
		<AppContext.Provider
			value={{ appContext, setAppContext, navBar, setNavBar }}
		>
			<div
				class={cn("absolute inset-0", {
					[background.className]: background.type === "css",
				})}
			>
				<div
					class={cn("h-full w-full", {
						"backdrop-blur bg-white/30":
							background.backdropBlur.off &&
							background.backdropBlur.size === "default",
					})}
				/>
			</div>
			<div class={cn(classes.app)}>
				<Layout />
			</div>
		</AppContext.Provider>
	);
}

export default App;
