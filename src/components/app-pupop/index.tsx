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
  position?: Position.types;
  trigger?: Element;
  distance?: string;
  active?: "click" | "mouseenter";
  center?: boolean;
}>;
const AppPupop = (props: AppPupopProps) => {
  const [local, ohterProps] = splitProps(props, ["open"]);

  const {
    trigger,
    position = "top",
    distance = "0.8rem",
    center = true,
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
    let style!: JSX.CSSProperties;
    if (open()) {
      const topObj: Record<Position.types, string> = {
        top: `calc(${triggerBorderPosition().top}px - ${distance})`,
        right: `${
          triggerBorderPosition().top + triggerBorderPosition().height / 2
        }px`,
        bottom: `calc(${
          triggerBorderPosition().top + triggerBorderPosition().height
        }px + ${distance})`,
        left: `${
          triggerBorderPosition().top + triggerBorderPosition().height / 2
        }px`,
      };
      const leftObj: Record<Position.types, string> = {
        top: `${
          triggerBorderPosition().left + triggerBorderPosition().width * 0.5
        }px`,
        right: `calc(${triggerBorderPosition().right}px + ${distance})`,
        bottom: `${
          triggerBorderPosition().left + triggerBorderPosition().width * 0.5
        }px`,
        left: `calc(${triggerBorderPosition().left}px - ${distance})`,
      };
      const transformObj: Record<Position.types, string> = {
        top: `translateX(-50%) translateY(-100%)`,
        right: `translateY(-50%)`,
        bottom: `translateX(-50%)`,
        left: `translateX(-100%) translateY(-50%)`,
      };
      style = {
        "pointer-events": "unset",
        top: !center ? topObj[position] : "",
        left: !center ? leftObj[position] : "",
        transform: !center ? transformObj[position] : "",
      };
    } else {
      style = {
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
        opacity: "0",
        "pointer-events": "none",
      };
    }
    return style;
  };

  return (
    <Show when={true}>
      <Portal mount={document.getElementById("pupop") as Node}>
        <div
          ref={ref}
          class={cn(
            "z-50 w-[200px] h-[100px] absolute transition-all ease-in-out duration-300",
            {
              "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2":
                open() && center,
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
