import { useState } from 'react'


import './App.css'
import examplegirl from './assets/examplegirl.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="background-image">
        <h1 className="title">ATEDO <br/> 360 </h1>
        <img src={examplegirl} alt="background" />
      </div>

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
    </>
  )
}

export default App
