import React, { useEffect, useState } from "react";
import "./history.css";
import { FiPhone, FiDelete } from "react-icons/fi";

import axios from "axios";

const History = () => {
  const [lastCall, setlastCall] = useState();
  const username = localStorage.getItem("username");
  useEffect(() => {
    const isLocalhost = window.location.hostname === "localhost";
    const renderBackendUrl = "https://backend-contact.onrender.com";
    const baseUrl = isLocalhost ? "http://localhost:3007" : renderBackendUrl;
  
    axios
      .get(`${baseUrl}/user/getLastcall`, {
        headers: { username: localStorage.getItem("username") },
      })
      .then((response) => {
        console.log(response);
        setlastCall(response.data);
      })
      .catch((error) => {
        console.error("Error fetching last call:", error);
      });
  }, []);
  

  async function handelDeleteLastContact(name) {
    const isLocalhost = window.location.hostname === "localhost";
    const renderBackendUrl = "https://backend-contact.onrender.com";
    const baseUrl = isLocalhost ? "http://localhost:3007" : renderBackendUrl;
  
    try {
      const response = await axios.delete(`${baseUrl}/user/deleteLastCall`, {
        params: {
          username: localStorage.getItem("username"),
          lastCallName: name,
        },
      });
      setlastCall(response.data.lastCall);
      console.log(response.data.lastCall);
    } catch (error) {
      console.error("Error deleting last call:", error);
    }
  }
  
  return (
    <div className="contact-main">
      {lastCall &&
        lastCall.map((value, index) => {
          return (
            <div key={index} className="contact-one-item">
              <div className="contact-personal-info">
                <div key={`name-${index}`}>{value.name}</div>
                <div key={`phone-${index}`}>{value.phone}</div>
                <div key={`email-${index}`}>{value.email}</div>
              </div>
              <FiPhone className="contact-icon" onClick={()=>console.log(index)}/>
              <FiDelete className="contact-icon" onClick={()=>handelDeleteLastContact(value.name)} />
            </div>
          );
        })}
    </div>
  );
}

export default History