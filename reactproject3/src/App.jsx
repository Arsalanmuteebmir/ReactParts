import { useState } from 'react'
import './App.css' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black
      p-4 rounded-xl
      '>Tailwind Test</h1>
      <div class="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
  <img class="m-1.5 h-max w-[calc(100%-12px)] rounded-[5px]" src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop" alt="image" />
  <div class="h-max w-full rounded px-3 py-2">
    <h6 class="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">
      UI/UX Review Check
    </h6>
    <p class="my-1 font-sans text-base text-slate-600 antialiased">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the main night life in Barcelona.
    </p>
  </div>
  <div class="w-full rounded px-3 pb-3 pt-1.5">
    <button class="inline-flex rounded-md border border-slate-800 bg-slate-800 px-4 py-2 text-center font-sans text-sm font-medium text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>
    </>
  )
}

export default App
