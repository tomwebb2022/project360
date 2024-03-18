import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, Gallery } from './pages/index';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App