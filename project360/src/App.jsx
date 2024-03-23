import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage, Gallery, Dashboard, Login } from './pages/index';
import Footer from './components/common/Footer';
import { useState, useEffect } from 'react';
import { emailList } from './data/emails';
import axios from "axios";
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

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track authentication status
// change me to true if you want to view dashboard without logging in

  useEffect(() => {
    // Check user's authentication status when the component mounts
    async function checkAuthentication() {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          // Send the token in the request headers
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          // Verify the token on the server
          await axios.get("/users/api/authenticate");

          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error authenticating user:", error);
        setIsLoggedIn(false);
      }
    }

    checkAuthentication();

  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage formOpen={formOpen} setFormOpen={setFormOpen} emails={emails} updateEmails={setEmails} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer modalState={modalState} setModalState={setModalState} closeModal={closeModal} />
    </Router>
  )
}

export default App