import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-cyan-600 min-h-[80vh]">
        <div className="addtask">
          <h2 className="text-lg font-bold">Add task</h2>
          <input type="text" className="bg-amber-50"/>
          <button className=" bg-cyan-800 hover:bg-cyan-900 p-3 py-1 text-white rounded-md mx-5">Add</button>
        </div>
        <h2 className="text-lg font-bold">Your Tasks</h2>
        <div className="tasks">
          <div className="task flex">
            <div className="text"></div>
            <div className="buttons">
              <button className=" bg-cyan-800 hover:bg-cyan-900 p-3 py-1 text-white rounded-md mx-1">Change</button>
              <button className=" bg-cyan-800 hover:bg-cyan-900 p-3 py-1 text-white rounded-md mx-1">Remove</button>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
