import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-blue-400 text-black p-4 rounded-xl'>Tailwind Css</h1><br />
    <Card username="BATMAN 1" btntext="View Profile →"/><br /><br />
    <Card username="BATMAN 2"  btntext="click me →"/><br /><br />
    </>
  )
}

export default App
