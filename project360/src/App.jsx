import { useState } from 'react'
import './App.css'
// import examplegirl from './assets/examplegirl.jpg'
import BackgroundVideo from './components/BackgroundVideo'
import WhatIs from './components/WhatIs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BackgroundVideo />  

  <WhatIs />

    <section className="impact-statement">
      <h2>Impact Statement</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
    </section>
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