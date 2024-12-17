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

const paddingObj: Record<Position.types, string> = {
  top: "pt-[6.5rem] pb-4 px-4",
  right: "pr-[6.5rem] pl-4 py-4",
  bottom: "pb-[6.5rem] pt-4 px-4",
  left: "pl-[6.5rem] pr-4 py-4",
};

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
              },
              { opacity: 1 },
            ],
            {
              duration: props.duration || 200,
            }
          );
          a.finished.then(done);
        }}
        onExit={(el, done) => {
          const a = el.animate(
            [
              { opacity: 1 },
              {
                opacity: 0,
              },
            ],
            {
              duration: props.duration || 200,
            }
          );
          a.finished.then(done);
        }}
      >
        <Show when={open()}>
          <AppBox
            class={cn([props.class, "absolute inset-0 z-[99]"])}
            style={props.style}
          >
            <div
              class={cn("h-full overflow-hidden", paddingObj[navBar.position])}
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