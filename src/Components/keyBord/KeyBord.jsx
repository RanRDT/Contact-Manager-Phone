import { useState, useEffect, useContext } from "react";
import { FiStar, FiPhone, FiChevronLeft, FiPlus } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./keyBord.css";

const KeyBord = () => {
  const navigate = useNavigate();
  const [outputPhone, setOutputPhone] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => sendContact(data);

  const handleDigitClick = (num) => {
    if (outputPhone.length < 11) {
      setOutputPhone((prevOutputPhone) => prevOutputPhone + num.trim());
    }
  };

  const handleBackspaceClick = () => {
    setOutputPhone((prevOutputPhone) => prevOutputPhone.slice(0, -1));
  };

  const handleCallClick = () => {};

  const connect = (params) => {
    const randomUserName = Math.random();

    if (localStorage.getItem("connect") === null) {
      axios.post("http://localhost:3007/user/creat", {
        userName: randomUserName,
        contact: [],
      });
      localStorage.setItem("connect", true);
      localStorage.setItem("username", randomUserName);
    } else {
      console.log("user exisst");
    }
  };
  useEffect(() => {
    connect();
  }, []);

  function sendContact(data) {
    console.log(data);
    if (Object.keys(data).length > 0) {
      axios.post("http://localhost:3007/contact/addContact", {
        userName: localStorage.getItem("username"),
        contact: data,
      });
    }
    navigate("/contact");
    // setRender((prev)=>prev++);
  }

  return (
    <div className="container">
      {showPopUp && (
        <div className="popup">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>
            <input
              type="text"
              {...register("name", {
                required: "Required ",
                pattern: {
                  value: /[a-zA-Z]/g,
                  message:
                    "please filled only capital letters and small letters ",
                },
              })}
            />
            <span>{errors.name && errors.name.message}</span>
            <label>Phone:</label>
            <input
              type="text"
              onChange={(e) => setOutputPhone(e.target.value)}
              defaultValue={outputPhone}
              {...register("phone", {
                required: "Required ",
                pattern: {
                  value: /[0][0-9]/g,
                  message: "please filled only numbers and start with 0 ",
                },
              })}
            />
            <span>{errors.phone && errors.phone.message}</span>
            <label>Email:</label>
            <input
              type="email"
              {...register("email", {
                required: "Required ",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address ",
                },
              })}
            />
            <span>{errors.email && errors.email.message}</span>
            <input
              type="submit"
              value="Add Contact "
              className="submit-contact"
            />
          </form>
          <div className="x" onClick={() => setShowPopUp(!showPopUp)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10s10-4.47,10-10S17.53,2,12,2z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59 L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59z"></path>
            </svg>
          </div>
        </div>
      )}
      <div id="outputPhone">{outputPhone}</div>
      <div className="row">
        <div className="digit" onClick={() => handleDigitClick("1")}>
          1
        </div>
        <div className="digit" onClick={() => handleDigitClick("2")}>
          2<div className="sub">ABC</div>
        </div>
        <div className="digit" onClick={() => handleDigitClick("3")}>
          3<div className="sub">DEF</div>
        </div>
      </div>
      <div className="row">
        <div className="digit" onClick={() => handleDigitClick("4")}>
          4<div className="sub">GHI</div>
        </div>
        <div className="digit" onClick={() => handleDigitClick("5")}>
          5<div className="sub">JKL</div>
        </div>
        <div className="digit" onClick={() => handleDigitClick("6")}>
          6<div className="sub">MNO</div>
        </div>
      </div>
      <div className="row">
        <div className="digit" onClick={() => handleDigitClick("7")}>
          7<div className="sub">PQRS</div>
        </div>
        <div className="digit" onClick={() => handleDigitClick("8")}>
          8<div className="sub">TUV</div>
        </div>
        <div className="digit" onClick={() => handleDigitClick("9")}>
          9<div className="sub">WXYZ</div>
        </div>
      </div>
      <div className="row">
        <div className="digit" onClick={() => handleDigitClick("*")}>
          *
        </div>
        <div className="digit" onClick={() => handleDigitClick("0")}>
          0
        </div>
        <div className="digit" onClick={() => handleDigitClick("#")}>
          #
        </div>
      </div>
      <div className="botrow">
        {outputPhone ? (
          <div onClick={() => setShowPopUp(!showPopUp)} className="icon dig">
            <FiPlus />
          </div>
        ) : (
          <div className="icon dig"></div>
        )}
        <div
          id="call"
          onClick={() => {
            let telURL = `tel:${outputPhone}`;
            <a href={telURL}></a>
          }}
        >
          <FiPhone />
        </div>
        <div className="icon dig" onClick={handleBackspaceClick}>
          <FiChevronLeft />
        </div>
      </div>
    </div>
  );
};

export default KeyBord;
