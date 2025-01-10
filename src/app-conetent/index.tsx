import { createContext } from "solid-js";
import { SetStoreFunction } from "solid-js/store";
import {
  BackgroundClassName,
  BackgroundClassNameList,
  BgImageList,
} from "../common";

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
    list: { key: string; title: string; icon: string }[];
  };

  setPages?: SetStoreFunction<AppContextType["pages"]>;

  style: { value: "neumorphism" | "groundGlass" };
  setStyle?: SetStoreFunction<AppContextType["style"]>;
};

export const appContextDefaultValue: AppContextType = {
  navBar: {
    position: "bottom",
  },
  blur: {
    flag: true,
    size: "default",
  },
  background: {
    type: "image",
    className: BackgroundClassNameList[0],
    backdropBlur: {
      flag: true,
      size: "default",
    },
    image: {
      src: BgImageList[0],
    },
  },
  fullWindows: {
    current: "",
  },
  pages: {
    current: "default",
    list: [
      { key: "default", title: "默认", icon: "House" },
      { key: "front-end", title: "前端", icon: "Code" },
    ],
  },
  style: { value: "groundGlass" },
};

export const AppContext = createContext<AppContextType>(
  appContextDefaultValue,
  {}
);
