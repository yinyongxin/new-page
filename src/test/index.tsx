import AppPupop from "../components/app-pupop";

const AppPupopTest = () => {
  let topRef!: HTMLDivElement;
  let rightRef!: HTMLDivElement;
  let centerRef!: HTMLDivElement;
  let bottomRef!: HTMLDivElement;
  let leftRef!: HTMLDivElement;
  return (
    <div class="flex justify-center items-center h-full overflow-hidden">
      <div class="h-full w-full grid grid-cols-1/3 grid-rows-1/3 gap-4 place-items-center">
        <div class="col-start-2 col-spin-1 ">
          <div
            ref={topRef}
            class="rounded-md bg-cyan-100 w-14 h-14 flex justify-center items-center"
          >
            top
          </div>
        </div>
        <div class=" col-start-3 col-spin-1 row-start-2 row-spin-1">
          <div
            ref={rightRef}
            class=" w-14 h-14 rounded-md bg-cyan-100 flex justify-center items-center"
          >
            right
          </div>
        </div>
        <div class="col-start-2 col-spin-1">
          <div
            ref={centerRef}
            class=" w-14 h-14 rounded-md bg-cyan-100 flex justify-center items-center"
          >
            center
          </div>
        </div>
        <div class=" col-start-2 col-spin-1">
          <div
            ref={bottomRef}
            class=" w-14 h-14 rounded-md bg-cyan-100 flex justify-center items-center"
          >
            bottom
          </div>
        </div>
        <div class="col-start-1 col-spin-1 row-start-2 row-spin-1">
          <div
            ref={leftRef}
            class=" w-14 h-14 rounded-md bg-cyan-100 flex justify-center items-center"
          >
            left
          </div>
        </div>
      </div>

      <AppPupop active="click" trigger={topRef} position="bottom">
        top
      </AppPupop>
      <AppPupop active="click" trigger={rightRef} position="left">
        right
      </AppPupop>
      <AppPupop active="click" trigger={centerRef} position="center">
        center
      </AppPupop>
      <AppPupop active="click" trigger={bottomRef} position="top">
        bottom
      </AppPupop>
      <AppPupop active="click" trigger={leftRef} position="right">
        left
      </AppPupop>
    </div>
  );
};

export default AppPupopTest;
