import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOperation = (operation) => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) return; 

    switch (operation) {
      case "add":
        setResult((prev) => prev + value);
        break;
      case "subtract":
        setResult((prev) => prev - value);
        break;
      case "multiply":
        setResult((prev) => prev * value);
        break;
      case "divide":
        if (value !== 0) setResult((prev) => prev / value);
        else alert("Cannot divide by zero!");
        break;
      default:
        break;
    }

    setInputValue(""); 
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>Simple Calculator</h1>
        <h2 className="result">Result: {result}</h2>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
        <div className="buttons">
          <button className="btn blue" onClick={() => handleOperation("add")}>Add</button>
          <button className="btn blue" onClick={() => handleOperation("subtract")}>Subtract</button>
          <button className="btn blue" onClick={() => handleOperation("multiply")}>Multiply</button>
          <button className="btn blue" onClick={() => handleOperation("divide")}>Divide</button>
        </div>
        <div className="buttons">
          <button className="btn blue" onClick={() => setInputValue("")}>Reset Input</button>
          <button className="btn red" onClick={() => setResult(0)}>Reset Result</button>
        </div>
      </div>
    </div>
 
  );
}


export default App
