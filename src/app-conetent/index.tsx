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
    className: BackgroundClassName;
    backdropBlur: {
      flag: boolean;
      size: "default" | AppSize.BaseSize;
    };
  };
};

export const appContextDefaultValue: AppContextTypes = {
  navBar: {
    position: "left",
  },
  appContext: {
    blur: true,
  },
  background: {
    type: "css",
    className: BackgroundClassName.BlueLine,
    backdropBlur: {
      flag: true,
      size: "default",
    },
  },
};

export const AppContext = createContext<AppContextTypes>(
  appContextDefaultValue,
  {}
);
