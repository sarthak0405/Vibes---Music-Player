import "./App.css";
import Home from "./Component/Home";
import PlaylistTracksPage from "./Component/PlaylistTracksPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Component/signup";
import OpeningPage from "./Component/opening";
// import Ppplx from "./Component/opening";
// import Vidbg from "./Component/vidbg";
import Signin from "./Component/signin";
import Welcome from "./Component/Welcome";
import Playbar from "./Component/Playbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/" element={<OpeningPage />} />
          <Route path="/Playbar/:name/:image" element={<Playbar />} />
          <Route
            path="/playlist/:playlistId/:playlistname"
            element={<PlaylistTracksPage />}
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/playbar" element={<Playbar
          />} />
        </Routes>
      </BrowserRouter>
      {/* <Playbar /> */}
    </>
  );
}

export default App;
