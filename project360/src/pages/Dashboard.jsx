import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Dashboard.css";
import UploadButton from "../components/dashboard/UploadButton";
import { Projct360Logo } from "../assets";

const Dashboard = ({
  logout,
  userName,
  formOpen,
  setFormOpen,
  formSubmitted,
  setFormSubmitted,
  closeForm,
}) => {
  const [emailList, setEmailList] = useState([]);
  const [isEmailListExpanded, setIsEmailListExpanded] = useState(false);

  Dashboard.propTypes = {
    logout: PropTypes.func.isRequired,
  };

  useEffect(() => {
    async function getEmails() {
      try {
        const emailData = await axios.get("https://project360-1.onrender.com/emails");
        setEmailList(emailData.data);
      } catch (error) {
        console.error(error);
      }
    }

    getEmails();
  }, []);

  return (
    <section className="dashboard-container">
  <div className="logo-container">
        <Link to="/">
    <img src={Projct360Logo} alt="Project360 Logo" className="logo" />
  </Link>
      </div>
      <h1>Welcome, {userName}</h1>
      <Link to="/gallery" className="gallery-like-link">
        Enter the gallery
      </Link>
      <div className="button-container">
      <UploadButton
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
      />
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
      </div>
      <p onClick={() => setIsEmailListExpanded(!isEmailListExpanded)} className="text-link">
        Expand subscribers&apos; email list
      </p>
      <AnimatePresence>
        {isEmailListExpanded && (
          <motion.div
            className="email-list-container"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
          >
            {emailList.map((email, index) => (
              <div className="email-item" key={index}>
                <p>{email.name}</p>
                <p>{email.email}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Dashboard;
