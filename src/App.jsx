import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Time from './Time'

function App() {
  const [open,setOpen] = useState(false)
  function forTime(){
    setOpen(!open)
  }
  return (
    <div>
      <button onClick={forTime} >Show Time</button>
      {open && <Time/>}
    </div>
  )
}

export default App
