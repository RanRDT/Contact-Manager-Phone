import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../MainContext";
const Layout = () => {
  // function Logout(params) {
  //   localStorage.setItem("connect", false);
  // }
  const { setFilterContacts } = useContext(Context);
  const [contacts, setContacts] = useState();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3007/contact/getContacts", {
        headers: { username },
      })
      .then((response) => {
        setContacts(response.data);
      });
  }, []);
  function handelSearch(searchInput) {
    console.log(contacts);
    console.log(searchInput);
    const lowercaseSearchInput = searchInput.toLowerCase();
    const resultArr = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(lowercaseSearchInput);
    });
    setFilterContacts(resultArr);
    console.log(resultArr);
  }
  return (
    <div className="layout">
      <header>
        <div className="serach-bar">
          <svg
            onClick={() => {
              return setShowSearchBar((prev) => !prev), navigate("/contact");
            }}
            // id="layout-icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 24 24"
          >
            <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
          </svg>
          {showSearchBar && (
            <input type="text" onChange={(e) => handelSearch(e.target.value)} />
          )}
        </div>
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/external-call-smartphone-application-xnimrodx-lineal-color-xnimrodx.png"
          alt="external-call-smartphone-application-xnimrodx-lineal-color-xnimrodx"
        />
      </header>
      <Outlet />
      <footer>
        <Link to={"/"} className="latout-link">
          KeyBord{" "}
        </Link>
        <Link to={"/history"} className="latout-link">
          Last Call
        </Link>
        <Link to={"/contact"} className="latout-link">
          Contact
        </Link>
      </footer>
    </div>
  );
};

export default Layout;
