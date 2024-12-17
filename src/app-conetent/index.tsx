import { createContext } from "solid-js";
import { SetStoreFunction } from "solid-js/store";

type AppContextTypes = {
  navBar: {
    position: Position.types;
  };
  setNavBar?: SetStoreFunction<AppContextTypes["navBar"]>;
  appContext: {
    blur: boolean;
  };
  setAppContext?: SetStoreFunction<AppContextTypes["appContext"]>;
};

export const appContextDefaultValue: AppContextTypes = {
  navBar: {
    position: "top",
  },
  appContext: {
    blur: true,
  },
};

export const AppContext = createContext<AppContextTypes>(
  appContextDefaultValue,
  {}
);
