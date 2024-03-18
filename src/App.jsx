import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  const add = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const sub = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={add}>Add Value</button>
      <button onClick={sub}>Sub Value</button>
    </>
  );
}

export default App;
