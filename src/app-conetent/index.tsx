import { createContext } from "solid-js";
import { SetStoreFunction } from "solid-js/store";

type AppContextTypes = {
  appContext: {
    navBar: {
      position: Position.types;
    };
    blur: boolean;
  };
  updateAppContext?: SetStoreFunction<AppContextTypes["appContext"]>;
};

export const appContextDefaultValue: AppContextTypes = {
  appContext: {
    navBar: {
      position: "left",
    },
    blur: true,
  },
};

export const AppContext = createContext<AppContextTypes>(
  appContextDefaultValue,
  {}
);
