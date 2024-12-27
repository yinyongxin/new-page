import { createSignal, Index } from "solid-js";
import AppBox from "../components/app-box";
import { TransitionGroup } from "solid-transition-group";

function Drop() {
  const [items, setItems] = createSignal([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);

  let dragSourceElement!: number;

  const dragStart = (e, index) => {
    dragSourceElement = index;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", items()[index]);
    e.currentTarget.classList.add("dragging");
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const drop = (e, index) => {
    e.preventDefault();
    if (dragSourceElement !== index) {
      const updatedItems = [...items()];
      const draggedItem = updatedItems.splice(dragSourceElement, 1)[0];
      updatedItems.splice(index, 0, draggedItem);
      setItems(updatedItems);
    }
  };

  const dragEnd = (e) => {
    e.currentTarget.classList.remove("dragging");
  };

  return (
    <div class="p-40">
      <h1>拖动排序示例</h1>
      <ul
        id="sortable"
        style={{ padding: "0", "list-style": "none" }}
        class="grid grid-cols-4 gap-6"
      >
        <TransitionGroup name="slide">
          <Index each={items()}>
            {(item, index) => (
              <li
                draggable="true"
                onDragStart={(e) => dragStart(e, index)}
                onDragOver={dragOver}
                onDrop={(e) => drop(e, index)}
                onDragEnd={dragEnd}
                class="aspect-square"
              >
                <AppBox class="h-full">{item()}</AppBox>
              </li>
            )}
          </Index>
        </TransitionGroup>
      </ul>
    </div>
  );
}

export default Drop;
