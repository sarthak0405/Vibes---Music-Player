import React, { useEffect, useState } from "react";
import "./sign.css";
import axios from "axios";
import Welcome from "./Welcome";
import { Link, useNavigate } from "react-router-dom";
import { color } from "framer-motion";
const Signin = () => {
  const [usrnm, setusrnm] = useState("");
  const [pwrd, setPwrd] = useState("");
  const [message, setMessage] = useState("");
  const [welcome, setWelcome] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(`http://localhost:8000/login/`, {
        usrnm: usrnm,
        pwrd: pwrd,
      });

      if (response.data === "exist") {
        console.log("Data exists");

        navigate("/Welcome", { state: { usrnm } });
      } else {
        console.log("Data does not exist");
        setMessage("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred");
    }
  };

  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div class="inputbox">
                <ion-icon name="person-outline"></ion-icon>
                <input
                  type="text"
                  value={usrnm}
                  id="input"
                  onChange={(e) => setusrnm(e.target.value)}
                  required
                />
                <label for="">Username</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input
                  type="password"
                  value={pwrd}
                  id="input"
                  onChange={(e) => setPwrd(e.target.value)}
                  required
                />
                <label for="">Password</label>
              </div>
              &nbsp;
              <div className="forget">
                <label htmlFor="">
                  <input type="checkbox" />
                  Remember Me
                </label>{" "}
                <label>
                  <a>Forget Password</a>
                </label>
              </div>
              <div className="btnfr">
                <a className="btnlog">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <label
                    className="log"
                    onClick={() => handleSubmit({ usrnm })}
                  >
                    Login
                  </label>
                </a>
              </div>
              <div className="register">
                <p>
                  Don't have a account <Link to="/signup">Register</Link>
                </p>
                <u style={{ color: "red" }}>
                  <p style={{ color: "red" }}>{message}</p>
                </u>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
