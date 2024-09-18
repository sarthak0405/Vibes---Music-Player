import React from "react";
import "./signup.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { set } from "mongoose";

const Signup = () => {
  const Nav = useNavigate();
  const [usrnm, setusrnm] = useState("");
  const [pwrd, setPwrd] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setusrnm("");
    setPwrd("");
    setMail("");
    //for submitting data from frontEnd to backEnd
    alert("submitted");
    try {
      await axios.post("http://localhost:8000/register", {
        usrnm: usrnm,
        pwrd: pwrd,
        mail: mail,
      });
      //usrnm as a data would be sent on this port
      console.log("Data submitted successfully");
      Nav("/Welcome", { state: { usrnm } });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <div class="form-box">
          <div class="form-value">
            <form>
              <h2>Register</h2>
              <br />
              <div class="inputbox">
                <ion-icon name="person-outline"></ion-icon>
                <input
                  type="text"
                  value={usrnm}
                  id="input"
                  onChange={(e) => setusrnm(e.target.value)}
                  required
                />
                <label for="">Name</label>
              </div>
              <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  type="email"
                  value={mail}
                  id="input"
                  onChange={(e) => setMail(e.target.value)}
                  required
                />
                <label for="">Email</label>
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
              <div className="btnfr">
                <a className="btnlog" onClick={handleSubmit}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <label className="log">Register</label>
                </a>
              </div>
              <div class="register">
                <p>
                  Already Registered <a href="./logo.svg">Login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
