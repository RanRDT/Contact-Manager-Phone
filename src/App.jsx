import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import History from "./Components/History/History";
import Contact from "./Components/Contact/Contact";
import KeyBord from "./Components/keyBord/KeyBord";
import axios from "axios";
import "./App.css";

function App() {
  function handleCallClickContact(num) {
    const isLocalhost = window.location.hostname === "localhost";
    const renderBackendUrl = "https://back-contact.onrender.com";
    const baseUrl = isLocalhost ? "http://localhost:3007" : renderBackendUrl;
  
    axios.post(`${baseUrl}/user/addToLastCall`, {
      userName: localStorage.getItem("username"),
      idContact: num,
    });
  }
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route index element={<KeyBord/>} />
          <Route path="/history" element={<History />} />
          <Route
            path="/contact"
            element={<Contact handleCallClickContact={handleCallClickContact} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
