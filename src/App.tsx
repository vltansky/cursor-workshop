import { useState } from "react";
import wowLogo from "/wow.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black/90">
      <img src={wowLogo} className="w-64 h-64" alt="React logo" />
      <button
        onClick={() => setCount((count) => count + 1)}
        className="rounded-md bg-white text-primary  mt-5 px-4 py-2 hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
