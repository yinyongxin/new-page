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
        <div class="grid grid-cols-8 grid-rows-8 px-20">
          <div class="aspect-square">1</div>
          <div class="aspect-square">2</div>
          <div class="aspect-square">3</div>
          <div class="aspect-square">4</div>
          <div class="aspect-square">5</div>
          <div class="aspect-square">6</div>
          <div class="aspect-square">7</div>
          <div class="aspect-square">8</div>
          <div class="aspect-square">9</div>
          <div class="aspect-square">10</div>
          <div class="aspect-square">11</div>
          <div class="aspect-square">12</div>
          <div class="aspect-square">13</div>
          <div class="aspect-square">14</div>
        </div>
      </FullScreen>
    </AppContext.Provider>
  );
}

export default App;
