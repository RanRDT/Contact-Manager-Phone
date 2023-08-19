import React, { useEffect, useState } from "react";
import "./history.css";
import { FiPhone, FiDelete } from "react-icons/fi";

import axios from "axios";

const History = () => {
  const [lastCall, setlastCall] = useState();
  const username = localStorage.getItem("username");
  useEffect(() => {
    axios
      .get("http://localhost:3007/user/getLastcall", {
        headers: { username },
      })
      .then((response) => {
        console.log(response);
        setlastCall(response.data);
      });
  }, []);

 
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
              <FiDelete className="contact-icon"/>
            </div>
          );
        })}
    </div>
  );
}

export default History