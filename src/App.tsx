import classes from "./app.module.css";
import { cn } from "./utils/style";
import { AppContext, appContextDefaultValue } from "./app-conetent";
import Layout from "./layout";
import { createStore } from "solid-js/store";

function App() {
  const [appContext, setAppContext] = createStore(appContextDefaultValue);

  return (
    <AppContext.Provider
      value={{
        ...appContext,
        updateAppContext: setAppContext,
      }}
    >
      <div class={cn(classes.app)}>
        <Layout />
      </div>
    </AppContext.Provider>
  );
}

export default App;
