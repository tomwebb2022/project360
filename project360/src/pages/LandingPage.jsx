import BackgroundVideo from '../components/BackgroundVideo'
import WhatIs from '../components/WhatIs'
import ImpactStatement from '../components/ImpactStatement'

const LandingPage = () => {
  return (
    <>
  <BackgroundVideo />  

  <WhatIs />
<ImpactStatement />

        <h1>
          {/* contact details will go here  */}
        </h1>
        <div className="card">
            Edit <code>src/App.jsx</code> and save to test HMR
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <p> where are you?!</p>
      
      </>
  )
}

export default LandingPage
