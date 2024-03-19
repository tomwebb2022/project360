import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, Gallery } from './pages/index';
import { useState } from 'react';
import { emailList } from './data/emails';
import './App.css';

function App() {

  const [formOpen, setFormOpen] = useState(false);
  const [emails, setEmails] = useState(emailList);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage formOpen={formOpen} setFormOpen={setFormOpen} emails={emails} updateEmails={setEmails} />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}

export default App