import { useState } from "react";

import "./App.css";

function App() {

  const [counter, setCounter]  = useState(15)



  const addValue = () => {
    setCounter(counter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>GULSHAN AUR REACT</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>INCREMENT {counter}</button> 
      <br /><br />
      <button onClick={removeValue}>DECREMENT {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App;