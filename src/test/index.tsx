import AppPupop from "../components/app-pupop";

const AppPupopTest = () => {
  let topLeftRef!: HTMLDivElement;
  let topRef!: HTMLDivElement;
  let topRightRef!: HTMLDivElement;

  let rightTopRef!: HTMLDivElement;
  let rightRef!: HTMLDivElement;
  let rightBottomRef!: HTMLDivElement;

  let centerRef!: HTMLDivElement;
  let bottomRef!: HTMLDivElement;
  let leftTopRef!: HTMLDivElement;
  let leftRef!: HTMLDivElement;
  let leftBottomRef!: HTMLDivElement;
  return (
    <div class="flex justify-center items-center h-full overflow-hidden">
      <div class="h-3/4 w-3/4 grid grid-cols-3 gap-4 place-items-center">
        <div>
          <div
            ref={topRightRef}
            class="rounded-md bg-cyan-100 w-14 h-14 flex justify-center items-center"
          >
            topRight
          </div>
        </div>
        <div>
          <div
            ref={topRef}
            class="rounded-md bg-cyan-100 w-14 h-14 flex justify-center items-center"
          >
            topCenter
          </div>
        </div>
        <div>
          <div
            ref={topLeftRef}
            class="rounded-md bg-cyan-100 w-14 h-14 flex justify-center items-center"
          >
            topLeft
          </div>
        </div>

        <div>
          <div
            ref={rightTopRef}
            class=" w-14 h-14 rounded-md bg-cyan-100 flex justify-center items-center"
          >
            rightTop
          </div>
        </div>

        <div>
          <div
            ref={rightRef}
            class=" w-14 h-14 rounded-md bg-cyan-100 flex justify-center items-center"
          >
            right
          </div>
        </div>

        <div>
          <div
            ref={rightBottomRef}
            class=" w-14 h-14 rounded-md bg-cyan-100 flex justify-center items-center"
          >
            rightBottom
          </div>
        </div>

        <div>
          <div
            ref={leftTopRef}
            class=" w-14 h-14 rounded-md bg-cyan-100 flex justify-center items-center"
          >
            leftTop
          </div>
        </div>
        <div>
          <div
            ref={leftRef}
            class=" w-14 h-14 rounded-md bg-cyan-100 flex justify-center items-center"
          >
            left
          </div>
        </div>
        <div>
          <div
            ref={leftBottomRef}
            class=" w-14 h-14 rounded-md bg-cyan-100 flex justify-center items-center"
          >
            leftBottom
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
      </div>
      <AppPupop
        active="click"
        trigger={topLeftRef}
        position="top"
        alignment="left"
        center={false}
      >
        topLeft
      </AppPupop>
      <AppPupop active="click" trigger={topRef} position="top" center={false}>
        top
      </AppPupop>
      <AppPupop
        active="click"
        trigger={topRightRef}
        position="top"
        alignment="right"
        center={false}
      >
        topRight
      </AppPupop>

      <AppPupop
        active="click"
        trigger={rightTopRef}
        position="right"
        alignment="top"
        center={false}
      >
        rightTop
      </AppPupop>

      <AppPupop
        active="click"
        trigger={rightRef}
        position="right"
        center={false}
      >
        right
      </AppPupop>
      <AppPupop
        active="click"
        trigger={rightBottomRef}
        position="right"
        alignment="bottom"
        center={false}
      >
        rightBottom
      </AppPupop>

      <AppPupop
        active="click"
        trigger={leftTopRef}
        position="left"
        center={false}
        alignment="top"
      >
        leftTop
      </AppPupop>
      <AppPupop active="click" trigger={leftRef} position="left" center={false}>
        left
      </AppPupop>

      <AppPupop
        active="click"
        trigger={leftBottomRef}
        position="left"
        center={false}
        alignment="bottom"
      >
        leftBottom
      </AppPupop>

      <AppPupop active="click" trigger={centerRef}>
        center
      </AppPupop>
      <AppPupop
        active="click"
        trigger={bottomRef}
        position="top"
        center={false}
      >
        bottom
      </AppPupop>
    </div>
  );
};

export default AppPupopTest;
