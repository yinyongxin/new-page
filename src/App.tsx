import NavBar from "./layout/nev-bar";
import classes from "./app.module.css";
import { cn } from "./utils/style";
import { AppContext, appContextDefaultValue } from "./app-conetent";
import AppPupopTest from "./test";

function App() {
  return (
    <AppContext.Provider
      value={{
        ...appContextDefaultValue,
      }}
    >
      <div class={cn(classes.app)}>
        <NavBar />
        <AppPupopTest />
      </div>
    </AppContext.Provider>
  );
}

export default App;
