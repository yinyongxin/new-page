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

  const [open, setOpen] = createSignal(false);

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

  createEffect(() => {
    setOpen(local.open || false);
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

  const getStyle = () => {
    let initPosition!: JSX.CSSProperties;
    if (open()) {
      const getTop = () => {
        const obj = {
          top: `${triggerBorderPosition().top}px`,
          right: `${
            triggerBorderPosition().top + triggerBorderPosition().height / 2
          }px`,
          bottom: `${
            triggerBorderPosition().top + triggerBorderPosition().height
          }px`,
          left: `${
            triggerBorderPosition().top + triggerBorderPosition().height / 2
          }px`,
        };
        return obj[position as keyof typeof obj];
      };
      const getLeft = () => {
        const obj = {
          top: `${
            triggerBorderPosition().left + triggerBorderPosition().width * 0.5
          }px`,
          right: `${triggerBorderPosition().right}px`,
          bottom: `${
            triggerBorderPosition().left + triggerBorderPosition().width * 0.5
          }px`,
          left: `${triggerBorderPosition().left}px`,
        };
        console.log("position", position);
        return obj[position as keyof typeof obj];
      };
      const transformObj = {
        top: `translateX(-50%) translateY(-100%)`,
        right: `translateY(-50%)`,
        bottom: `translateX(-50%)`,
        left: `translateX(-100%) translateY(-50%)`,
      };
      initPosition = {
        "pointer-events": "none",
        top: getTop(),
        left: getLeft(),
        transform: transformObj[position as keyof typeof transformObj],
      };
      console.log("initPosition", initPosition);
    } else {
      initPosition = {
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
        "pointer-events": "unset",
      };
    }
    return initPosition;
  };

  return (
    <Show when={true}>
      <Portal mount={document.getElementById("pupop") as Node}>
        <div
          ref={ref}
          class={cn(
            "z-50 w-[600px] h-[400px] absolute transition-all ease-in-out duration-300",
            {
              "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2":
                open() && position === "center",
            }
          )}
          style={{
            ...getStyle(),
          }}
          onClick={() => {
            setOpen(false);
          }}
        >
          <div class="bg-black/50 absolute inset-0 rounded-xl z-[51]"></div>
          <div class="absolute inset-0 z-[52]">
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
