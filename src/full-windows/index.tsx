import { useContext } from "solid-js";
import { AppContext } from "../app-conetent";
import AppBox from "../components/app-box";
import FullScreen from "../components/full-screen";
import PageMange from "./page-mange";

const FullWindows = () => {
	const { fullWindows } = useContext(AppContext);
	return (
		<>
			<PageMange open={fullWindows.current === "page-manage"} />
		</>
	);
};

export default FullWindows;
