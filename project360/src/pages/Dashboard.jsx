import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    async function getEmails() {
      try {
        const emailData = await axios.get("http://localhost:3000/emails");
        console.log(emailData.data);

        setEmailList(emailData.data);
      } catch (error) {
        console.error(error);
      }
    }

    getEmails();
    
  }, []);

  return (
    <div>
      {emailList.map((email, index) => {
        return (
          <div key={index}>
            <p>{email.name}</p>
            <p>{email.email}</p>
          </div>
        );
      })}
    </div>
  );
};



export default Dashboard;