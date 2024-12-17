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

export default AddWebsite;
