import AppPupop from "../components/app-pupop";

const AppPupopTest = () => {
  let topLeftRef!: HTMLDivElement;
  let topRef!: HTMLDivElement;
  let topRightRef!: HTMLDivElement;

  let rightTopRef!: HTMLDivElement;
  let rightRef!: HTMLDivElement;
  let rightBottomRef!: HTMLDivElement;

  let leftTopRef!: HTMLDivElement;
  let leftRef!: HTMLDivElement;
  let leftBottomRef!: HTMLDivElement;

  let bottomRef!: HTMLDivElement;
  let bottomLeftRef!: HTMLDivElement;
  let bottomRightRef!: HTMLDivElement;

  let scrollElement!: HTMLDivElement;
  const topShow = (
    <>
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
    </>
  );

  const buttomShow = (
    <>
      <div>
        <div
          ref={bottomRightRef}
          class=" w-14 h-14 rounded-md bg-cyan-100 flex justify-center items-center"
        >
          bottomRight
        </div>
      </div>
      <div>
        <div
          ref={bottomRef}
          class=" w-14 h-14 rounded-md bg-cyan-100 flex justify-center items-center"
        >
          bottom
        </div>
      </div>
      <div>
        <div
          ref={bottomLeftRef}
          class=" w-14 h-14 rounded-md bg-cyan-100 flex justify-center items-center"
        >
          bottomLeft
        </div>
      </div>
    </>
  );
  const rightShow = (
    <>
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
    </>
  );

  const leftShow = (
    <>
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
    </>
  );
  return (
    <div
      class="flex justify-center items-center h-full overflow-auto"
      ref={scrollElement}
    >
      <div class="h-3/4 w-3/4 grid grid-cols-1 gap-40 place-items-center">
        {topShow}
        {buttomShow}
        {rightShow}
        {leftShow}
      </div>
      <AppPupop
        active="click"
        triggerElement={topLeftRef}
        position="top"
        alignment="left"
        center={false}
        scrollElement={scrollElement}
      >
        topLeft
      </AppPupop>
      <AppPupop
        active="click"
        triggerElement={topRef}
        position="top"
        center={false}
        scrollElement={scrollElement}
      >
        top
      </AppPupop>
      <AppPupop
        active="click"
        triggerElement={topRightRef}
        position="top"
        alignment="right"
        center={false}
        scrollElement={scrollElement}
      >
        topRight
      </AppPupop>

      <AppPupop
        active="click"
        triggerElement={rightTopRef}
        position="right"
        alignment="top"
        center={false}
        scrollElement={scrollElement}
      >
        rightTop
      </AppPupop>

      <AppPupop
        active="click"
        triggerElement={rightRef}
        position="right"
        center={false}
        scrollElement={scrollElement}
      >
        right
      </AppPupop>
      <AppPupop
        active="click"
        triggerElement={rightBottomRef}
        position="right"
        alignment="bottom"
        center={false}
        scrollElement={scrollElement}
      >
        rightBottom
      </AppPupop>

      <AppPupop
        active="click"
        triggerElement={leftTopRef}
        position="left"
        center={false}
        scrollElement={scrollElement}
        alignment="top"
      >
        leftTop
      </AppPupop>
      <AppPupop
        active="click"
        triggerElement={leftRef}
        position="left"
        center={false}
        scrollElement={scrollElement}
      >
        left
      </AppPupop>

      <AppPupop
        active="click"
        triggerElement={leftBottomRef}
        position="left"
        center={false}
        scrollElement={scrollElement}
        alignment="bottom"
      >
        leftBottom
      </AppPupop>
      <AppPupop
        active="click"
        triggerElement={bottomRightRef}
        position="bottom"
        alignment="right"
        center={false}
        scrollElement={scrollElement}
      >
        bottomRight
      </AppPupop>
      <AppPupop
        active="click"
        triggerElement={bottomRef}
        position="bottom"
        center={false}
        scrollElement={scrollElement}
      >
        bottom
      </AppPupop>
      <AppPupop
        active="click"
        triggerElement={bottomLeftRef}
        position="bottom"
        alignment="left"
        center={false}
        scrollElement={scrollElement}
      >
        bottomLeft
      </AppPupop>
    </div>
  );
};

export default AppPupopTest;
