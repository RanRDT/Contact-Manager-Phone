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
    axios
      .get("http://localhost:3007/contact/getContacts", {
        headers: { username },
      })
      .then((response) => {
        setFilterContacts(response.data);
      });
    }, []);
    
    async function handelDeleteContact(name) {
      await axios
      .delete("http://localhost:3007/contact/deleteContact", {
        params: {
          username: localStorage.getItem("username"),
          contactName: name,
        },
      })
      .then((res) => setFilterContacts(res.data.contact));
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
