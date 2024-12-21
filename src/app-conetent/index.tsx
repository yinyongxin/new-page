import { createContext } from "solid-js";
import { SetStoreFunction } from "solid-js/store";
import { BackgroundClassName } from "../enums";

export type AppContextType = {
	navBar: {
		position: Position.types;
	};
	setNavBar?: SetStoreFunction<AppContextType["navBar"]>;
	blur: {
		flag: boolean;
		size: "default" | AppSize.BaseSize;
	};
	setBlur?: SetStoreFunction<AppContextType["blur"]>;
	background: {
		type: "css" | "image";
		className: BackgroundClassName;
		backdropBlur: {
			flag: boolean;
			size: "default" | AppSize.BaseSize;
		};
		image: {
			src: string;
		};
	};
	setBackground?: SetStoreFunction<AppContextType["background"]>;
	fullWindows: {
		current: string;
	};
	setFullWindows?: SetStoreFunction<AppContextType["fullWindows"]>;

	pages: {
		current: string;
		list: string[];
	};

	setPages?: SetStoreFunction<AppContextType["pages"]>;
};

export const appContextDefaultValue: AppContextType = {
	navBar: {
		position: "left",
	},
	blur: {
		flag: true,
		size: "default",
	},
	background: {
		type: "image",
		className: BackgroundClassName.BlueLine,
		backdropBlur: {
			flag: false,
			size: "default",
		},
		image: {
			src: "https://img.win3000.com/m00/88/f4/4bfb021fbd4c86f1b563f9d837297897.jpg",
		},
	},
	fullWindows: {
		current: "",
	},
	pages: {
		current: "default",
		list: ["default"],
	},
};

export const AppContext = createContext<AppContextType>(
	appContextDefaultValue,
	{}
);
