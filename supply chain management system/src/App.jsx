import { useState } from 'react'
import LandingPage from './Pages/LandingPage';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage></LandingPage>
    </>
  );
}

export default App
