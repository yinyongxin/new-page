import Settings from "lucide-solid/icons/settings";
import AppPupop from "../../../../components/app-pupop";
const Setting = () => {
  console.log("setting");
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
        position="right"
        center={false}
        trigger={settingRef}
        active="click"
        distance="1.6rem"
      />
    </>
  );
};

export default Setting;