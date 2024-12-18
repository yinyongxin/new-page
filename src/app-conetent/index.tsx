import { createContext } from "solid-js";
import { SetStoreFunction } from "solid-js/store";
import { BackgroundClassName } from "../enums";

export type AppContextType = {
  navBar: {
    position: Position.types;
  };
  setNavBar?: SetStoreFunction<AppContextType["navBar"]>;
  appContext: {
    blur: {
      flag: boolean;
      size: "default" | AppSize.BaseSize;
    };
  };
  setAppContext?: SetStoreFunction<AppContextType["appContext"]>;
  background: {
    type: "css" | "image";
    className: BackgroundClassName;
    backdropBlur: {
      flag: boolean;
      size: "default" | AppSize.BaseSize;
    };
  };
};

export const appContextDefaultValue: AppContextType = {
  navBar: {
    position: "left",
  },
  appContext: {
    blur: {
      flag: true,
      size: "default",
    },
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

export const AppContext = createContext<AppContextType>(
  appContextDefaultValue,
  {}
);
