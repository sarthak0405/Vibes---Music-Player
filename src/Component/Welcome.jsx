import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import bg from "../Assets/welcomebg2.avif";  
import "./Welcome.css";
// import welcometop from "../Assets/weltop1.webp";
// import { Container, Row, Col } from "react-bootstrap";  

const Welcome = () => {
  const location = useLocation();
  const usrnm = location.state?.usrnm;

  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/Home", { state: { usrnm } });
  }, 6000);

  return (
    <div className="mainbg">
      <div>
        {/* <img
          src={welcometop}
          style={{
            position: "absolute",
            right: "10px",
            width: "100%",
            top: "-100",
          }}
        ></img> */}
      </div>
      <p style={{ color: "white", fontSize: "50px" }}>Welcome {usrnm} </p>
    </div>
  );
};

export default Welcome;
