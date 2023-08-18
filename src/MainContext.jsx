import React, { createContext,useEffect,useState } from "react";
export const Context = createContext({});
import axios from "axios";

const MainContext = ({ children }) => {
  const [filterContacts, setFilterContacts] = useState([]);
// const username = localStorage.getItem("username");
// useEffect(()=>{
//     axios.get("http://localhost:3007/contact/getContacts", {
//         headers: { username },
//       }).then((data)=>setContacts(data.data));
// },[render])
  return (
    <div>
      <Context.Provider value={{filterContacts, setFilterContacts}}>
        {children}
        </Context.Provider>
    </div>
  );
};

export default MainContext;
