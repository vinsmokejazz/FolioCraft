import { useState } from 'react'
import { SideBar } from './components/bars/SideBar'
import { MainContent } from './components/bars/MainContent'
function App() {

  const[sideBarOpen,setSideBarOpen]=useState(true);

  return <>
  <div className='flex'>
     <SideBar/>
    <MainContent/>
  </div>
  </>
        
}

export default App
