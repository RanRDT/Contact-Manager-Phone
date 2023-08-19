import React, { useEffect, useState, useContext } from "react";
import "./contact.css";
import { FiPhone, FiDelete } from "react-icons/fi";
import axios from "axios";
import  {Context } from "../../MainContext";
const Contact = ({handleCallClickContact}) => {
  const {filterContacts, setFilterContacts}=useContext(Context)
  console.log(filterContacts);
  const username = localStorage.getItem("username");
  // const [contacts, setContacts]=useState()
  useEffect(() => {
    const isLocalhost = window.location.hostname === "localhost";
    const renderBackendUrl = "https://backend-contact.onrender.com";
    const baseUrl = isLocalhost ? "http://localhost:3007" : renderBackendUrl;
  
    axios
      .get(`${baseUrl}/contact/getContacts`, {
        headers: { "username": localStorage.getItem("username") },
      })
      .then((response) => {
        setFilterContacts(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving contacts:", error);
      });
  }, []);
  
    
  async function handelDeleteContact(name) {
    const isLocalhost = window.location.hostname === "localhost";
    const renderBackendUrl = "https://backend-contact.onrender.com";
    const baseUrl = isLocalhost ? "http://localhost:3007" : renderBackendUrl;
  
    try {
      const response = await axios.delete(`${baseUrl}/contact/deleteContact`, {
        params: {
          username: localStorage.getItem("username"),
          contactName: name,
        },
      });
      setFilterContacts(response.data.contact);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  }
  
    
    return (
      <div className="contact-main">
      {filterContacts &&
        filterContacts.map((value, index) => {
          return (
            <div key={index} className="contact-one-item">
              <div className="contact-personal-info">
                <div key={`name-${index}`}>{value.name}</div>
                <div key={`phone-${index}`}>{value.phone}</div>
                <div key={`email-${index}`}>{value.email}</div>
              </div>
              <FiPhone
                className="contact-icon"
                onClick={() => handleCallClickContact(index)}
              />
              <FiDelete
                className="contact-icon"
                onClick={() => handelDeleteContact(value.name)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Contact;
