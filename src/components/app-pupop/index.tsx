import {
  createEffect,
  createSignal,
  JSX,
  onCleanup,
  onMount,
  ParentProps,
  Show,
  splitProps,
} from "solid-js";
import { Portal } from "solid-js/web";
import { cn } from "../../utils/style";
export type AppPupopProps = ParentProps<{
  open?: boolean;
  position?: Position.types | "center";
  trigger?: Element;
  distance?: string;
  active?: "click" | "mouseenter";
}>;
const AppPupop = (props: AppPupopProps) => {
  const [local, ohterProps] = splitProps(props, ["open"]);

  const {
    trigger,
    position = "center",
    distance = "0.8rem",
    children,
    active,
  } = ohterProps;

  const [open, setOpen] = createSignal(local.open || false);

  const [triggerBorderPosition, setTriggerBorderPosition] = createSignal({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  });

  let ref!: HTMLDivElement;
  const [corruntBoundingClientRect, setCorruntBoundingClientRect] =
    createSignal<DOMRect>(new DOMRect(0, 0, 0, 0));

  onMount(() => {
    if (trigger) {
      const updateTriggerPosition = () => {
        const triggerBoundingClientRect = trigger.getBoundingClientRect();
        setTriggerBorderPosition({
          right:
            triggerBoundingClientRect.left + triggerBoundingClientRect.width,
          bottom:
            triggerBoundingClientRect.top + triggerBoundingClientRect.height,
          ...triggerBoundingClientRect.toJSON(),
        });
        setCorruntBoundingClientRect(ref.getBoundingClientRect());
      };

      updateTriggerPosition();

      window.addEventListener("resize", updateTriggerPosition);
      onCleanup(() => {
        window.removeEventListener("resize", updateTriggerPosition);
      });
    }
  });

  createEffect(() => {
    if (active && trigger) {
      const handleClick = () => {
        setOpen(!open());
      };

      trigger.addEventListener(active, handleClick);

      onCleanup(() => {
        trigger.removeEventListener(active, handleClick);
      });
    }
  });

  const positionClass = () => {
    const obj = {
      top: "top-0 left-1/2 -translate-x-1/2",
      right: "right-0 top-1/2 -translate-y-1/2",
      bottom: "bottom-0 left-1/2 -translate-x-1/2",
      left: "left-0 left-1/2 -translate-y-1/2",
      center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    };
    return obj[position];
  };

  const getStyle = () => {
    if (open()) {
      return {};
    }
    const initPosition: JSX.CSSProperties = {
      top: `${
        triggerBorderPosition().top + triggerBorderPosition().width * 0.5
      }px`,
      left: `${
        triggerBorderPosition().left + triggerBorderPosition().height * 0.5
      }px`,
      transform: `
        translateX(
          calc(-50%)
        )
      	translateY(
      		calc(-50%)
      	)
				scale(0.05)
      `,
      // opacity: "0",
    };
    return initPosition;
  };

  return (
    <Show when={true}>
      <Portal mount={document.getElementById("pupop") as Node}>
        <div
          ref={ref}
          class={cn(
            " z-50 w-[600px] h-[400px] rounded-xl absolute transition-all ease-in-out duration-300",
            {
              [positionClass()]: open(),
            }
          )}
          style={{
            ...getStyle(),
            // visibility: open() ? "visible" : "hidden",
          }}
          onClick={
            active === "click"
              ? () => {
                  setOpen(!open());
                }
              : undefined
          }
        >
          <div class="bg-black/50 absolute inset-0"></div>
          <div class="absolute inset-0">
            <div class="grid grid-cols-2 grid-rows-2 h-full">
              <div class="bg-red-500/50 flex justify-center items-center">
                {children}
              </div>
              <div class="bg-green-500/50 flex justify-center items-center">
                {children}
              </div>
              <div class="bg-yellow-500/50 flex justify-center items-center">
                {children}
              </div>
              <div class="bg-purple-500/50 flex justify-center items-center">
                {children}
              </div>
            </div>
          </div>
        </div>
      </Portal>
    </Show>
  );
};
export default AppPupop;
