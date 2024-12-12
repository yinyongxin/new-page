import NavBar from "./layout/nev-bar";
import classes from "./app.module.css";
import { cn } from "./utils/style";

function App() {
  return (
    <div class={cn("absolute inset-0", classes.app)}>
      <NavBar />
    </div>
  );
}

export default App;
