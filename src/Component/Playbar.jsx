import React from "react";
import Vidbg from "./vidbg";
import { useParams } from "react-router-dom";
const Playbar = () => {
  // const { name, image } = useParams();
  return (
    <>
      <Vidbg />
      <div>
        <div className="playbar">
          <div
            className="previous cursor-p"
            style={{ position: "relative", top: "-5px" }}
          >
            <i class="fa-solid fa-backward-fast plybrbtns"></i>
          </div>

          <div
            className="play cursor-p"
            style={{ position: "relative", top: "-5px" }}
          >
            <i class="fa-solid fa-play plybrbtns"></i>
          </div>
          <div
            className="next cursor-p"
            style={{ position: "relative", top: "-5px" }}
          >
            <i class="fa-solid fa-forward-fast plybrbtns"></i>
          </div>
        </div>

        <div className="seek">
          <div className="seekbar cursor-p">
            <div className="circle cursor-p"></div>
          </div>
        </div>
        <div className="volume">
          <i class="fa-solid fa-volume-high volic"></i>
          <div className="volbar">
            <input type="range" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Playbar;
