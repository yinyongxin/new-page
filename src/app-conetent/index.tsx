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
    image: {
      src: string;
    }
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
    type: "image",
    className: BackgroundClassName.BlueLine,
    backdropBlur: {
      flag: false,
      size: "default",
    },
    image: {
      src: "https://img.win3000.com/m00/88/f4/4bfb021fbd4c86f1b563f9d837297897.jpg"
    }
  },
};

export const AppContext = createContext<AppContextType>(
  appContextDefaultValue,
  {}
);
