import { ParentProps, splitProps } from "solid-js";

export type TestProps = ParentProps<{
	open: boolean;
}>;
const Test = (props: TestProps) => {
	const [local] = splitProps(props, ["open"]);

	return <div>--{String(local.open)}</div>;
};
export default Test;
