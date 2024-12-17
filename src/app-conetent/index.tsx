import { createContext } from "solid-js";
import { SetStoreFunction } from "solid-js/store";
import { BackgroundClassName } from "../enums";

type AppContextTypes = {
	navBar: {
		position: Position.types;
	};
	setNavBar?: SetStoreFunction<AppContextTypes["navBar"]>;
	appContext: {
		blur: boolean;
	};
	setAppContext?: SetStoreFunction<AppContextTypes["appContext"]>;
	background: {
		type: "css" | "image";
		className: BackgroundClassName.BlueLine;
		backdropBlur: {
			off: boolean;
			size: "default" | "sm" | "md";
		};
	};
};

export const appContextDefaultValue: AppContextTypes = {
	navBar: {
		position: "top",
	},
	appContext: {
		blur: true,
	},
	background: {
		type: "css",
		className: BackgroundClassName.BlueLine,
		backdropBlur: {
			off: true,
			size: "default",
		},
	},
};

export const AppContext = createContext<AppContextTypes>(
	appContextDefaultValue,
	{}
);
