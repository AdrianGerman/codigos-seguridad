import { UseState } from "./UseState.js";
import { UseStateHook } from "./UseStateHook.js";
import { ClassState } from "./ClassState.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UseState name="Use State" />
      <UseStateHook name="Use State con Hooks" />
      <ClassState name="Class State" />
    </div>
  );
}

export default App;
