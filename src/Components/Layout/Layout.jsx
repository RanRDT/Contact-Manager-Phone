import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  // function Logout(params) {
  //   localStorage.setItem("connect", false);
  // }
  return (
    <div className="layout">
      <header>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
        </svg>
        <h1>option</h1> {/* <button onClick={() => Logout()}>logout</button> */}
      </header>
      <Outlet />
      <footer>
        <Link to={"/"} className="" >KeyBord </Link>
        <Link to={"/history"}>Last Call</Link>
        <Link to={"/contact"}>Contact</Link>
      </footer>
    </div>
  );
};

export default Layout;
