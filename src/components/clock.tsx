// FILEPATH: /cloudide/workspace/new-page/src/components/clock.tsx
import { createSignal } from "solid-js";
import { cn } from "../utils/style";

const Clock = () => {
  const [time, setTime] = createSignal(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  const hours = String(time().getHours()).padStart(2, '0');
  const minutes = String(time().getMinutes()).padStart(2, '0');
  const seconds = String(time().getSeconds()).padStart(2, '0');

  return (
    <div class={cn("absolute inset-0", "flex", "items-center", "justify-center")}>
      <div class="text-9xl font-bold">
        {hours}
      </div>
      <div class="text-9xl font-bold">
        {minutes}
      </div>
      <div class="text-9xl font-bold">
        {seconds}
      </div>
    </div>
  );
};

export default Clock;
