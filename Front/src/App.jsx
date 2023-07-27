// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout"
import History from "./Components/History/History"
import Contact from "./Components/Contact/Contact"
import KeyBord from "./Components/keyBord/KeyBord"
import "./App.css";

function App() {
  return (
    <>
     <Routes>
      <Route path={"/"} element={<Layout/>} >
        <Route index element={<KeyBord/>} />
        <Route path="/history" element={<History/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
     </Routes>
    </>
  );
}

export default App;
