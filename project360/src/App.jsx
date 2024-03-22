import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, Gallery, Dashboard } from './pages/index';
import Footer from './components/common/Footer';
import { useState } from 'react';
import { emailList } from './data/emails';
import './App.css';

function App() {

  const [formOpen, setFormOpen] = useState(false);
  const [emails, setEmails] = useState(emailList);

  const [modalState, setModalState] = useState({
    privacyOpen: false,
    teamOpen: false,
    accessibilityOpen: false,
  });

  const closeModal = () => {
    setModalState({
      privacyOpen: false,
      teamOpen: false,
      accessibilityOpen: false,
    });
  };  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage formOpen={formOpen} setFormOpen={setFormOpen} emails={emails} updateEmails={setEmails} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer modalState={modalState} setModalState={setModalState} closeModal={closeModal} />
    </Router>
  )
}

export default App