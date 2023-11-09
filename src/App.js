// import { UseState } from "./UseState.js";
import { UseStateHook } from "./UseStateHook.js";
import { ClassState } from "./ClassState.js";
import { UseReducer } from "./UseReducer.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <UseState name="Use State" /> */}
      <UseStateHook name="UseState" />
      <ClassState name="ClassState" />
      <UseReducer name="UseReducer" />
    </div>
  );
}

export default App;
