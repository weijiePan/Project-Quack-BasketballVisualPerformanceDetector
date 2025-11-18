import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import Navbar from './components/Navbar'
import Upload from './pages/Upload'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Upload></Upload>
    </>
     
      
  )
}

export default App
