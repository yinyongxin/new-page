import { onMount } from "solid-js";
import NavBar from "./nev-bar";
import { GridStack } from "gridstack";

const Layout = () => {
	onMount(() => {
		var grid = GridStack.init(
			{
				float: true,
			},
			gridStack
		);
		const serializedData = [
			{ x: 0, y: 0, w: 2, h: 2, content: "item 1" },
			{ x: 2, y: 3, w: 3, content: "item 2" },
			{ x: 1, y: 3, content: "item 3" },
		];

		grid.load(serializedData);
	});

	let gridStack!: HTMLDivElement;
	return (
		<>
			<NavBar />
			<main class="h-full w-full z-[99] p-28">
				<div class="h-full w-full overflow-auto">
					<div ref={gridStack}></div>
				</div>
       
			</main>
		</>
	);
};

export default Layout;
