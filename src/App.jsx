import { useState } from 'react'
import TopBox from './components/TopBox'
import { SidebarClass1 } from './components/answers/1-basic-project'
function App() {

  return <>
  <div className='h-screen bg-white dark:bg-amber-950 text-black dark:text-white'>
    <button onClick={()=>{
      document.querySelector("html").classList.toggle("dark")
    }}>Toggle theme</button>

    <div className='text-2xl dark:text-white  text-blue-500'>
      Hi there
    </div>

  </div>
  
  </>
        
}

export default App
