import logo from "./logo.svg";
import "./App.css";
import low from "./Assets/low.jpg";
import high from "./Assets/high.jpg";
import ProgressiveImage from "./progressiveImage";
import AnimatedCheckmark from "react-animated-checkmark/lib/AnimatedCheckmark";
import { MODES } from "react-animated-checkmark";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [src, { blur }] = ProgressiveImage(low, high, setIsLoading);

  return (
    <div className="flex bg-gray-900 h-screen">
      <img src={src} className={`w-96 h-96 m-auto ${blur ? "blur" : ""}`} />
      <div className="flex flex-col m-auto">
        <AnimatedCheckmark mode={isLoading ? MODES.LOADING : MODES.SUCCESS} />
        <p className="m-auto text-xl text-white">
          {blur ? "Loading..." : "Loaded!"}
        </p>
      </div>
    </div>
  );
}

export default App;
