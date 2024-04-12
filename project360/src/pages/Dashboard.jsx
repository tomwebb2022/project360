import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Dashboard.css";
import UploadButton from "../components/dashboard/UploadButton";

const Dashboard = ({logout,  
  userName,
  formOpen,
  setFormOpen,
  formSubmitted,
  setFormSubmitted,
  closeForm,}) => {
  const [emailList, setEmailList] = useState([]);

  Dashboard.propTypes = {
    logout: PropTypes.func.isRequired,
  };

  useEffect(() => {
    async function getEmails() {
      try {
        const emailData = await axios.get("https://project360-1.onrender.com/emails")
        // console.log(emailData.data);

        setEmailList(emailData.data);
      } catch (error) {
        console.error(error);
      }
    }

    getEmails();
    
  }, []);


  return (
    <div className="dashboard-container">
    <h1>Welcome, {userName}</h1>
    <Link to="/">
    <button className="submit-button">Back to Home</button>
    </Link>
    <button className="logout-button" onClick={logout}>
      Logout
    </button>
    <p>Expand subscribers&apos; email list</p>
    {emailList.map((email, index) => {
      return (
        <div className="email-item" key={index}>
          <p>{email.name}</p>
          <p>{email.email}</p>
        </div>
      );
    })}
    <UploadButton
      formOpen={formOpen}
      setFormOpen={setFormOpen}
      formSubmitted={formSubmitted}
      setFormSubmitted={setFormSubmitted}
    />
  </div>
  );
};

export default Dashboard;