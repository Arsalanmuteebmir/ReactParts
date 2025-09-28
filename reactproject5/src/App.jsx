import { useCallback, useEffect, useState,useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersallowed, setNumbers] = useState(false);
  const [scharactersallowed, setScharacters] = useState(false);
  const [password, setPassword] = useState("");
  //ref hook
  const passref = useRef(null)
  const passgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersallowed) str += "0123456789";
    if (scharactersallowed) str += "~`!@#$%^&*(){}_+|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersallowed, scharactersallowed]);
  const copypass = useCallback(()=>{
  passref.current?.select()
  window.navigator.clipboard.writeText(password)
  //passref.current?.setSelectionRange(0,4)
  },[password])
  useEffect(() => {
    passgenerator();
  }, [length, numbersallowed, scharactersallowed, passgenerator]);
  return (
    <>
      <div
        className="w-full bg-gray-700 max-w-md mx-auto shadow-md
     rounded-lg px-4 my-8 text-orange-500"
      >
        <h1 className="text-white text-center mb-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden  mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3  text-black bg-white"
            placeholder="password"
            value={password}
            readOnly 
            ref={passref}
          />
          <button
           onClick={copypass}
          className="bg-green-500 outline-none ml-2 rounded px-2 text-white">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={1}
              max={99}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbersallowed}
              id="numberInput"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={scharactersallowed}
              id="sCharacters"
              onChange={() => {
                setScharacters((prev) => !prev);
              }}
            />
            <label htmlFor="sCharacters">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
