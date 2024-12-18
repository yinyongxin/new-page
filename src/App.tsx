import { cn } from "./utils/style";
import { AppContext, appContextDefaultValue } from "./app-conetent";
import { createStore } from "solid-js/store";
import FullScreen from "./components/full-screen";
import NavBar from "./components/nav-bar";
import Background from "./components/background";
import AddWebsite from "./components/nav-bar/comps/add-website";
import Setting from "./components/nav-bar/comps/setting";
import LayoutGrid from "lucide-solid/icons/layout-grid";
import Item from "./components/nav-bar/item";
import { createSignal } from "solid-js";

function App() {
  const [appContext, setAppContext] = createStore(
    appContextDefaultValue.appContext
  );
  const [navBar, setNavBar] = createStore(appContextDefaultValue.navBar);
  const [background] = createStore(appContextDefaultValue.background);
  const [open, setOpen] = createSignal(false);
  return (
    <AppContext.Provider
      value={{ appContext, setAppContext, navBar, setNavBar, background }}
    >
      {/* <Background /> */}
      <NavBar>
        <Setting />
        <AddWebsite />
        <Item
          onClick={() => {
            setOpen(!open());
          }}
        >
          <LayoutGrid />
        </Item>
      </NavBar>
      <div></div>
      <FullScreen open={open()}>
        <div class="grid grid-cols-8 grid-rows-8 px-20 py-32 gap-8">
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">1</div>
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">2</div>
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">3</div>
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">4</div>
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">5</div>
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">6</div>
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">7</div>
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">8</div>
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">9</div>
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">10</div>
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">11</div>
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">12</div>
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">13</div>
          <div class="aspect-square neumorphism-xs rounded-xl flex justify-center items-center">14</div>
        </div>
      </FullScreen>
    </AppContext.Provider>
  );
}

export default App;
