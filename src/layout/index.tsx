import { onMount } from "solid-js";
import NavBar from "../components/nev-bar";
import { GridStack } from "gridstack";
import FullScreen from "../components/full-screen";

const Layout = () => {
  let gridStack!: HTMLDivElement;
  onMount(() => {
    var grid = GridStack.init(
      {
        float: true,
      },
      gridStack
    );
    const serializedData = [
      { x: 0, y: 0, w: 1, h: 1, content: "item 1" },
      { x: 1, y: 0, w: 1, content: "item 2" },
      { x: 2, y: 0, content: "item 3" },
    ];

    grid.load(serializedData);
  });

  return (
    <>
      <main class="h-full w-full p-28">
        <div class="h-full w-full overflow-auto">
          <div ref={gridStack}></div>
        </div>
      </main>
    </>
  );
};

export default Layout;
