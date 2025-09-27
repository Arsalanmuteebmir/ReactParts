import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2
         rounded-3xl">
          <button onClick={()=>{
            setColor("red")
          }} 
          className="bg-red-700 rounded px-2 text-white">Red</button>
          <button onClick={()=>{
            setColor("blue")
          }} 
          className="bg-blue-700 rounded px-2 text-white">Blue</button>
          <button onClick={()=>{
            setColor("green")
          }} 
           className="bg-green-700 rounded px-2 text-white">Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
