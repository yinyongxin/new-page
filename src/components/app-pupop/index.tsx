import {
  Component,
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
  width?: string;
  height?: string;
  open?: boolean;
  position?: Position.types;
  alignment?: Position.types | "default";
  trigger?: Element;
  distance?: string;
  active?: "click" | "mouseenter";
  center?: boolean;
  scrollElement?: Element;
  style?: JSX.CSSProperties;
}>;
const AppPupop = (props: AppPupopProps) => {
  const [local, ohterProps] = splitProps(props, ["open"]);

  const {
    trigger,
    position = "top",
    alignment = "default",
    distance = "0.8rem",
    center = true,
    children,
    active,
    scrollElement,
    width = "20rem",
    height = "10rem",
    style,
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
      scrollElement?.addEventListener("scroll", updateTriggerPosition);

      onCleanup(() => {
        window.removeEventListener("resize", updateTriggerPosition);
        scrollElement?.removeEventListener("scroll", updateTriggerPosition);
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
    let resStyle!: JSX.CSSProperties;
    if (open()) {
      const styleObj: Record<
        Position.types,
        Partial<
          Record<
            Position.types | "default",
            Pick<JSX.CSSProperties, "top" | "left" | "transform">
          >
        >
      > = {
        top: {
          right: {
            top: `calc(${triggerBorderPosition().top}px - ${distance})`,
            left: `${
              triggerBorderPosition().left + triggerBorderPosition().width
            }px`,
            transform: `translateX(-100%) translateY(-100%)`,
          },
          left: {
            top: `calc(${triggerBorderPosition().top}px - ${distance})`,
            left: `${triggerBorderPosition().left}px`,
            transform: `translateY(-100%)`,
          },
          default: {
            top: `calc(${triggerBorderPosition().top}px - ${distance})`,
            left: `${
              triggerBorderPosition().left + triggerBorderPosition().width * 0.5
            }px`,
            transform: `translateX(-50%) translateY(-100%)`,
          },
        },
        right: {
          top: {
            top: `${triggerBorderPosition().top}px`,
            left: `calc(${triggerBorderPosition().right}px + ${distance})`,
            transform: `translateY(0%)`,
          },
          bottom: {
            top: `${
              triggerBorderPosition().top + triggerBorderPosition().height
            }px`,
            left: `calc(${triggerBorderPosition().right}px + ${distance})`,
            transform: `translateY(-100%)`,
          },
          default: {
            top: `${
              triggerBorderPosition().top + triggerBorderPosition().height / 2
            }px`,
            left: `calc(${triggerBorderPosition().right}px + ${distance})`,
            transform: `translateY(-50%)`,
          },
        },
        bottom: {
          right: {
            top: `calc(${
              triggerBorderPosition().top + triggerBorderPosition().height
            }px + ${distance})`,
            left: `${
              triggerBorderPosition().left + triggerBorderPosition().width
            }px`,
            transform: `translateX(-100%)`,
          },
          left: {
            top: `calc(${
              triggerBorderPosition().top + triggerBorderPosition().height
            }px + ${distance})`,
            left: `${triggerBorderPosition().left}px`,
            transform: `translateX(0%)`,
          },
          default: {
            top: `calc(${
              triggerBorderPosition().top + triggerBorderPosition().height
            }px + ${distance})`,
            left: `${
              triggerBorderPosition().left + triggerBorderPosition().width * 0.5
            }px`,
            transform: `translateX(-50%)`,
          },
        },
        left: {
          top: {
            top: `${triggerBorderPosition().top}px`,
            left: `calc(${triggerBorderPosition().left}px - ${distance})`,
            transform: `translateX(-100%) translateY(0%)`,
          },
          bottom: {
            top: `${
              triggerBorderPosition().top + triggerBorderPosition().height
            }px`,
            left: `calc(${triggerBorderPosition().left}px - ${distance})`,
            transform: `translateX(-100%) translateY(-100%)`,
          },
          default: {
            top: `${
              triggerBorderPosition().top + triggerBorderPosition().height / 2
            }px`,
            left: `calc(${triggerBorderPosition().left}px - ${distance})`,
            transform: `translateX(-100%) translateY(-50%)`,
          },
        },
      };
      resStyle = {
        "pointer-events": "unset",
        ...(center
          ? {}
          : styleObj[position][alignment] || styleObj[position].default),
      };
    } else {
      resStyle = {
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
    return resStyle;
  };

  return (
    <Show when={true}>
      <Portal mount={document.getElementById("pupop") as Node}>
        <div
          ref={ref}
          class={cn("z-50 absolute transition-all ease-in-out duration-300", {
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2":
              open() && center,
          })}
          style={{
            ...getStyle(),
            width,
            height,
            ...style,
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
