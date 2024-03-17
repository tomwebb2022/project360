import { useState } from 'react'
import './App.css'
// import examplegirl from './assets/examplegirl.jpg'
import BackgroundVideo from './components/BackgroundVideo'
import WhatIs from './components/WhatIs'
import ImpactStatement from './components/ImpactStatement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BackgroundVideo />  

  <WhatIs />
<ImpactStatement />

        <h1>
          {/* contact details will go here  */}
        </h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <p> where are you?!</p>
      
      </>
  )
}

export default App