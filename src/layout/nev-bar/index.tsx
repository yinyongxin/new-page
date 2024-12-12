import { cn } from "../../utils/style";
import classes from "./index.module.css";
const list = [
  {
    icon: "",
  },
];
const NavBar = () => {
  return (
    <nav class={cn(classes.navBar, "relative px-4 py-2")}>
      <div class="absolute inset-0 bg-black rounded-2xl overflow-hidden"></div>
      <div class="relative text-white">NavBar</div>
    </nav>
  );
};

export default NavBar;
