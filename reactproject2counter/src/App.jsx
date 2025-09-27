import { useState } from 'react'
import './App.css'

function App() {
  const[counter,setCounter] =  useState(0)
  const addCounter = ()=>{
    setCounter(counter+1)
  }
  const remCounter = ()=>{
    setCounter(counter-1)
    if(counter == 0){
      setCounter(counter)
    }
  }
  
  return (
    <>
      <h1>Hello bro</h1>
      <h3>Counter :{counter}</h3>
      <button 
      onClick={addCounter}
      >Add Value</button>
      <br />
      <button
      onClick={remCounter}
      >Decrease Value</button>
    </>
  )
}


export default App
