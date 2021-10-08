import './App.scss';
import React, { useState } from "react"

export default function App() {

  const [result, setResult] = useState("")
  const [prevResult, setPrev] = useState("0")

  const ops = ["/", "*", "-", "+", "."]


  const clearEntry = () => {
    setResult("")
  }

  const reset = () => {
    setPrev("0")
    setResult("")
  }

  const deleteNum = () => {
    if (result === "") return


    setResult(result.slice(0, -1))
  }

  const updateState = (operator) => {
    if (
      ops.includes(operator) && result === "" ||
      ops.includes(operator) && ops.includes(result.slice(-1))
    ) { return }

    setResult(result + operator)
   
  }

  const nums = () => {
    const numsArr = []

    for (let i = 1; i < 10; i++) {
      numsArr.push(
        <button key={i} onClick={() => updateState(i.toString())}>{i}</button>
      )
    }

    return numsArr.reverse()
  }

  const calculate = () => {
    try {
      setPrev(result + "=")
      setResult(eval(result).toString())
    } catch {
      setResult("")
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="display-prev" placeholder="0">{prevResult}</div>
          <div className="display-current">{result || "0"}</div>
        </div>


        <div className="operators">
          <button onClick={() => clearEntry()}>CE</button>
          <button onClick={() => reset()}>C</button>
          <button onClick={deleteNum}>DEL</button>
          <button onClick={() => updateState("/")}>/</button>
          <button onClick={() => updateState("*")}>*</button>
          <button onClick={() => updateState("-")}>-</button>
          <button onClick={() => updateState("+")}>+</button>

        </div>

        <div className="nums">
          {nums()}
          <button onClick={() => updateState("0")}>0</button>
          <button onClick={() => updateState(".")}>.</button>
          <button classname="equal" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}


