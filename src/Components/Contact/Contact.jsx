import React, { useEffect, useState } from "react";
import "./contact.css"
import axios from "axios";

const Contact = () => {
  const [contacts, setContacts] = useState();
  const username=localStorage.getItem("username");
  useEffect(() => {
    axios
      .get("http://localhost:3007/contact/getContacts",  {headers:{username}})
      .then((response) => {
        console.log(response);
        setContacts(response.data);
      });
  }, []);

  return (
    <div className="contact-main" >
      {contacts &&
        contacts.map((value, index) => {
          return (
            <div key={index} className="contact-one-item" >
              <div key={`name-${index}`}>{value.name}</div>
              <div key={`phone-${index}`}>{value.phone}</div>
              <div key={`email-${index}`}>{value.email}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Contact;
