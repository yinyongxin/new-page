import {
  createEffect,
  createSignal,
  JSX,
  ParentComponent,
  Show,
} from "solid-js";
import { Portal } from "solid-js/web";
import { Transition } from "solid-transition-group";
import { cn } from "../utils/style";
import AppBox from "./app-box";

export type FullScreenProps = {
  open?: boolean;
  duration?: number;
} & Pick<JSX.HTMLAttributes<HTMLDivElement>, "class" | "style">;
const FullScreen: ParentComponent<FullScreenProps> = (props) => {
  const [open, setOpen] = createSignal(false);

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
            class={cn([props.class, "absolute inset-0 z-[50]"])}
            style={props.style}
          >
            {props.children}
          </AppBox>
        </Show>
      </Transition>
    </Portal>
  );
};

export default FullScreen;
