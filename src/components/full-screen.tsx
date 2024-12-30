import {
  createEffect,
  createSignal,
  JSX,
  ParentComponent,
  Show,
  useContext,
} from "solid-js";
import { Portal } from "solid-js/web";
import { Transition } from "solid-transition-group";
import { cn } from "../utils/style";
import AppBox from "./app-box";
import { AppContext } from "../app-conetent";
import { paddingObj } from "../common";

export type FullScreenProps = {
  open?: boolean;
  duration?: number;
} & Pick<JSX.HTMLAttributes<HTMLDivElement>, "class" | "style">;
const FullScreen: ParentComponent<FullScreenProps> = (props) => {
  const [open, setOpen] = createSignal(false);
  const { navBar } = useContext(AppContext);

  createEffect(() => {
    setOpen(props.open || false);
  });

  return (
    <Portal mount={document.getElementById("full-screen") as Node}>
      <Transition
        onEnter={(el, done) => {
          const a = el.animate(
            [
              {
                opacity: 0,
                transform: "scale(1)",
              },
              {
                opacity: 0,
                transform: "scale(1.1)",
              },
              {
                opacity: 1,
                transform: "scale(1)",
              },
            ],
            {
              duration: props.duration || 300,
            }
          );
          a.finished.then(done);
        }}
        onExit={(el, done) => {
          const a = el.animate(
            [
              { opacity: 1, transform: "scale(1)" },
              {
                opacity: 0,
                transform: "scale(1.1)",
              },
              {
                opacity: 0,
                transform: "scale(1)",
              },
            ],
            {
              duration: props.duration || 300,
            }
          );
          a.finished.then(done);
        }}
      >
        <Show when={open()}>
          <AppBox
            rounded="none"
            class={cn([
              props.class,
              "absolute inset-0 overflow-hidden z-[100]",
            ])}
            style={props.style}
          >
            <div
              class={cn(
                "h-full w-full overflow-hidden",
                paddingObj[navBar.position]
              )}
            >
              {props.children}
            </div>
          </AppBox>
        </Show>
      </Transition>
    </Portal>
  );
};

export default FullScreen;
