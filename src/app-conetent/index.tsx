import { createContext } from "solid-js";

type AppContextTypes = {
	navBar: {
		position: Position.types;
	};
  blur: boolean
};

export const appContextDefaultValue: AppContextTypes = {
	navBar: {
		position: "top",
	},
  blur: true
};

export const AppContext = createContext<AppContextTypes>(appContextDefaultValue, {});
