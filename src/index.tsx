/* @refresh reload */
import { render } from "solid-js/web";
import "./styles/tailwind/index.css";
import "./styles/index.css";
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/gridstack-extra.min.css";

import App from "./App";

const root = document.getElementById("root");

render(() => <App />, root!);
