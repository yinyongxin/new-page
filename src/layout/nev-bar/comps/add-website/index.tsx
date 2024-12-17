import AppPupop from "../../../../components/app-pupop";
import CirclePlus from "lucide-solid/icons/circle-plus";

const AddWebsite = () => {
  let ref!: HTMLDivElement;

  return (
    <>
      <div
        ref={ref}
        class="h-12 w-12 bg-black/20 rounded-xl cursor-pointer flex justify-center items-center"
      >
        <CirclePlus />
      </div>
      <AppPupop
        width="30rem"
        height="20rem"
        center
        triggerElement={ref}
        active="click"
        defaultOpen
      >
        <div class="p-4">
          <div class="relative rounded-lg w-full overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:-z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg">
            <input
              placeholder="网站地址"
              class="relative bg-transparent ring-0 outline-none border border-neutral-200 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
              type="text"
            />
          </div>
        </div>
      </AppPupop>
    </>
  );
};

export default AddWebsite;
