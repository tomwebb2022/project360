import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LandingPage, Gallery, Dashboard, Login } from "./pages/index";
import Footer from "./components/common/footer/Footer";
import { useState, useEffect, useCallback } from "react";
import { emailList } from "./data/emails";
import axios from "axios";
import "./App.css";
// import { set } from "mongoose";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitClick, setSubmitClick] = useState(false);

  const updateClick = useCallback(() => {
    submitClick ? setSubmitClick(false) : setSubmitClick(true);
  }, [submitClick]);


  const toggleForm = () => {
    setFormOpen(!formOpen);
  };

  const [emails, setEmails] = useState(emailList);

  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track authentication status
  // change me to true if you want to view dashboard without logging in

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

  function logout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    <Navigate to="/" />;
  }

  useEffect(() => {
    // Check user's authentication status when the component mounts
    async function checkAuthentication() {
      try {
        // Retrieve authentication status from the server
        const response = await axios.get("/users/authentication");
        const isAuthenticated = response.data
        // console.log("Response data:", isAuthenticated);
        // Set isLoggedIn based on the authentication status
        setIsLoggedIn(isAuthenticated);
      } catch (error) {
        console.error("Error authenticating user:", error);
        // Set isLoggedIn to false in case of error
        setIsLoggedIn(false);
      }
    }
  
    checkAuthentication();
  }, [updateClick]);
  // console.log("isLoggedIn", isLoggedIn);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              toggleForm={toggleForm}
              formOpen={formOpen}
              setFormOpen={setFormOpen}
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
              emails={emails}
              updateEmails={setEmails}
              modalState={setModalState}
            />
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? 
          <Dashboard 
          logout={logout} 
          toggleForm={toggleForm}
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          formSubmitted={formSubmitted}
          setFormSubmitted={setFormSubmitted}
          modalState={setModalState}/> : <Navigate to="/" />}
        />
        <Route
          path="/login" 
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login updateClick={updateClick} />}
        />
      </Routes>
      <Footer
        modalState={modalState}
        setModalState={setModalState}
        closeModal={closeModal}
      />
    </Router>
  );
}

export default App;
