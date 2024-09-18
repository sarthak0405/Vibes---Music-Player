import "./style.css";
import Plx from "react-plx";
import bg from "../Assets/bg.png";
import backgroundimg from "../Assets/background.jpg";
import { Link } from "react-router-dom";
// import txt from "./text-img.webp"

export default function OpeningPage() {
  return (
    <div className="body">
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 2.6,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <img style={{ width: "100%" }} src={bg} alt="foreground" />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <img
          style={{ width: "100%" }}
          className="bg1"
          src={backgroundimg}
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: -2,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "26vw",
          width: "100%",
        }}
      >
        <p className="vibes">Vibes</p>
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: -5,
                endValue: 2,
                property: "opacity",
                zIndex: 100,
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: "0vw",
          top: "10vw",
          width: "100%",
        }}
      ></Plx>
      <div className="btns">
        <Link to="/login">
          <button className="openbtn1" style={{ zIndex: "300" }}>
            Sign In
          </button>
        </Link>
        <Link to="/Signup">
          <button className="openbtn2" style={{ zIndex: "300" }}>
            Sign Up
          </button>
        </Link>
      </div>

      {/* <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div> */}
    </div>
  );
}
