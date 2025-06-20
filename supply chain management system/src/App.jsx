import { useState } from 'react'
import Header from './Pages/Components/Landing Page/Header';
import Features from './Pages/Components/Landing Page/Features';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <br /><br />
      <Features></Features>
    </>
  )
}

export default App
