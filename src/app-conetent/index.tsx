import { createContext } from "solid-js";
import { SetStoreFunction } from "solid-js/store";

type AppContextTypes = {
  navBar: {
    position: Position.types;
  };
  blur: boolean;
  updateAppContext?: SetStoreFunction<AppContextTypes>;
};

export const appContextDefaultValue: AppContextTypes = {
  navBar: {
    position: "left",
  },
  blur: true,
};

export const AppContext = createContext<AppContextTypes>(
  appContextDefaultValue,
  {}
);
