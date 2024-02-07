import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("february 07 2024");
  date.setDate(date.getDate() + count);

  function handleInc() {
    setStep((s) => s + 1);
  }

  function handleDec() {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  }

  return (
    <>
      <div>
        <button onClick={handleDec}>-</button>
        <span>Step :{step}</span>
        <button onClick={handleInc}>+</button>
      </div>

      <div>
        <div>
          <button onClick={() => setCount((c) => c - step)}>-</button>
          <span> Count: {count}</span>
          <button onClick={() => setCount((c) => c + step)}>+</button>
        </div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
}
