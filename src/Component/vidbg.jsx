import React from "react";
import vidbg from "../Assets/playbg.mp4";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Vidbg = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="middle">
          <h1></h1>
          {/* <img src={image}></img>
          <h1>{name}</h1> */}
        </div>
        <video
          src={vidbg}
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "99vh",
            objectFit: "cover",
            filter: "blur(8px)",
          }}
        ></video>
      </div>
    </>
  );
};

export default Vidbg;
