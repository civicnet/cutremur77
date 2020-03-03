import React from "react";
import "./App.css";
import { Timeline } from "./components/Timeline";
import { QuakeMap } from "./components/QuakeMap";

function App() {
  const [animationFrame, setAnimationFrame] = React.useState(0);

  return (
    <div className="App">
      <QuakeMap animationFrame={animationFrame} />
      <Timeline onAnimationFrame={setAnimationFrame} />
    </div>
  );
}

export default App;
