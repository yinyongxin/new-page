import Settings from "lucide-solid/icons/settings";
import AppPupop from "../../../../components/app-pupop";
import { useContext } from "solid-js";
import { AppContext } from "../../../../app-conetent";
const Setting = () => {
  const { appContext } = useContext(AppContext);
  let settingRef!: HTMLDivElement;

  return (
    <>
      <div
        ref={settingRef}
        class="h-12 w-12 bg-black/20 rounded-xl cursor-pointer flex justify-center items-center"
      >
        <Settings class="animate-[spin_3s_linear_infinite]" />
      </div>
      <AppPupop
        position={appContext.navBar.position === "right" ? "left" : "right"}
        center={false}
        trigger={settingRef}
        distance="1.6rem"
      />
    </>
  );
};

export default Setting;
