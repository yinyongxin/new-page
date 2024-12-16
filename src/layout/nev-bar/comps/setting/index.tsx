import Settings from "lucide-solid/icons/settings";
import AppPupop from "../../../../components/app-pupop";
import { createSignal, useContext } from "solid-js";
import { AppContext } from "../../../../app-conetent";
import Drawer from "../../../../components/drawer";

const Setting = () => {
  let settingRef!: HTMLDivElement;

  const { navBar, setNavBar } = useContext(AppContext);
  const [open, setOpen] = createSignal(false);

  const drawerPositionObj = {
    left: "pageRight",
    right: "pageLeft",
    top: "pageBottom",
    bottom: "pageTop",
  } as const;

  return (
    <>
      <div
        ref={settingRef}
        class="h-12 w-12 bg-black/20 rounded-xl cursor-pointer flex justify-center items-center"
        onclick={() => {
          setOpen(!open());
        }}
      >
        <Settings class="animate-[spin_3s_linear_infinite]" />
      </div>
      <Drawer
        open={open()}
        position={drawerPositionObj[navBar.position]}
        alignment="1rem"
      >
        <div class="p-4">
          <div
            onClick={() => {
              setNavBar?.({
                position: "top",
              });
            }}
          >
            上
          </div>
          <div
            onClick={() => {
              setNavBar?.({
                position: "right",
              });
            }}
          >
            右
          </div>
          <div
            onClick={() => {
              setNavBar?.({
                position: "bottom",
              });
            }}
          >
            下
          </div>
          <div
            onClick={() => {
              setNavBar?.({
                position: "left",
              });
            }}
          >
            左
          </div>
        </div>
      </Drawer>
      <AppPupop
        position={navBar.position === "right" ? "left" : "right"}
        center={false}
        // triggerElement={settingRef}
        distance="1.6rem"
        width="30rem"
        height="50rem"
      >
        <div class="grid grid-cols-4 gap-4 p-4">
          <div class="aspect-square">1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </AppPupop>
    </>
  );
};

export default Setting;
