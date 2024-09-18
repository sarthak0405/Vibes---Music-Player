import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getFeaturedPlaylistTracks } from "../services/SpotifyService";
import { Container, Row, Col } from "react-bootstrap";

import shine from "../Assets/petals.gif";
import { Link } from "react-router-dom";
import { getPlaylistDetails } from "../services/SpotifyService";
import Join from "../comment/join/join";

const PlaylistTracksPage = () => {
  const { playlistId, playlistname } = useParams();
  const [playlistTracks, setPlaylistTracks] = useState([]);
  let [selectedTrack, setSelectedTrack] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [playlistDetails, setPlaylistDetails] = useState(null);
  const location = useLocation();
  const playlistimg = location.state.playlistimg;
  const navigate = useNavigate();
  const containerStyle = {
    filter: "brightness(100%)",
    background:
      "linear-gradient(-45deg, #f279ff, #85ddff, #e147f2, #4cc8f9, #f278ff, #40c9ff, #e81cff)",
    backgroundSize: "400% 400%",
    animation: "gradient 10s ease infinite",
  };

  const gotobigpage = (name, image) => {
    navigate(`/Vidbg/${name}/${image}`, { state: { name } });
  };
  useEffect(() => {
    const fetchPlaylistTracks = async () => {
      try {
        const tracks = await getFeaturedPlaylistTracks(playlistId);
        setPlaylistTracks(tracks.items);
      } catch (error) {
        console.error("Error fetching playlist tracks:", error);
      }
    };

    fetchPlaylistTracks();
  }, [playlistId]);

  const formatDuration = (duration_ms) => {
    const minutes = Math.floor(duration_ms / 60000);
    const seconds = Math.floor((duration_ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const playAudio = (track) => {
    setSelectedTrack(track);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTracks = playlistTracks.filter((track) =>
    track.track.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchPlaylistDetails = async () => {
      try {
        const details = await getPlaylistDetails(playlistId, playlistname);
        setPlaylistDetails(details);
      } catch (error) {
        console.error("Error fetching playlist details:", error);
      }
    };

    fetchPlaylistDetails();
  }, [playlistId, playlistname]);
  return (
    <>
      <Container fluid className={containerStyle}>
        <Row>
          <Col
            className="trackleftside"
            lg={8}
            style={{
              // backgroundColor: "green",
              height: "725px",
              overflowY: "scroll",
            }}
          >
            {/* abovesongs */}

            <div className="abovesongs col">
              <Link to="/Home">
                <i
                  class="fa-solid fa-arrow-left"
                  style={{ fontSize: "30px" }}
                ></i>
              </Link>

              <img
                src={playlistimg}
                height={"200px"}
                width={"200px"}
                className="mt-5 "
                alt="Poster"
              ></img>
              <div className="abovesongscontent col mt-lg-5">
                <h1 style={{ fontSize: "70px" }}>{playlistname}</h1>

                <p class="h6" className="none">
                  Ajay-Atul, Shreya Ghoshal, Arjit Singh and more ...
                </p>
                <p class="h6" className="none">
                  Made for you 50 Songs
                </p>
              </div>
            </div>

            {/* icons */}

            <div style={{ display: "flex" }} className="mb-5">
              <i
                class="fa-solid fa-circle-play"
                style={{
                  backgroundColor: "black",
                  fontSize: "48px",
                  marginRight: "30px",
                }}
              ></i>
              <i
                style={{
                  color: "white",
                  fontSize: "30px",
                  marginRight: "30px",
                }}
                class="fa-solid fa-shuffle"
              ></i>
              <i
                style={{
                  color: "white",
                  fontSize: "30px",
                  marginRight: "30px",
                }}
                class="fa-solid fa-download"
              ></i>
              <i
                class="fa-solid fa-circle-plus"
                style={{
                  color: "white",
                  fontSize: "30px",
                  marginRight: "30px",
                }}
              ></i>
              <i
                class="fa-solid fa-ellipsis"
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
              ></i>
              <input
                type="text"
                placeholder="Search track"
                value={searchQuery}
                onChange={handleSearch}
                className="me-2 none"
                style={{
                  marginLeft: "auto",
                  color: "black",
                  borderRadius: "10px",
                  height: "30px",
                }}
              />
              <i
                class="fa-solid fa-magnifying-glass ms-3"
                style={{ color: "white", fontSize: "30px" }}
              ></i>
            </div>
            <div>
              {/* table starts */}

              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <thead style={{ position: "sticky", marginBottom: "20px" }}>
                  <tr>
                    <th>
                      <p></p>
                    </th>
                    <th>#Track</th>
                    <th className="none">Artist</th>
                    <th className="none">Album</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <br />
                  {filteredTracks.map((track) => (
                    <tr
                      key={track.track.id}
                      onClick={() => playAudio(track)}
                      style={{ marginBottom: "20px" }}
                    >
                      <td
                        style={{ paddingBottom: "15px", paddingRight: "10px" }}
                      >
                        <img
                          src={track.track.album.images[0].url}
                          alt={`${track.track.name} Album Cover`}
                          style={{
                            height: "65px",
                            width: "65px",
                            borderRadius: "10px",
                          }}
                        />
                      </td>

                      <td>{track.track.name}</td>
                      <td className="none">{track.track.artists[0].name}</td>
                      <td className="none">{track.track.album.name}</td>
                      <td>{formatDuration(track.track.duration_ms)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>

          {/* right side */}

          <Col lg={4} className="trackrightside">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "725px",
                overflowY: "scroll",
              }}
            >
              {/* <h3>In order to enter Chat room enter your Nikname</h3> */}
              {selectedTrack && (
                <div className="trackdetaildiv" style={{ height: "550px" }}>
                  <h5>Currently Playing</h5>
                  <img
                    src={shine}
                    height={"460px"}
                    width={"100%"}
                    alt="Currently playing track"
                  />
                  <div
                    style={{
                      position: "relative",
                      top: "-280px",
                      textAlign: "center",
                      paddingRight: "60px",
                      paddingLeft: "50px",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                      backgroundColor: "black",
                      boxShadow: "1 1 50px purple",
                    }}
                  >
                    <img
                      className="mt-5 ms-4"
                      src={selectedTrack.track.album.images[0].url}
                      alt={`${selectedTrack.track.name} Album Cover`}
                      style={{
                        width: "230px",
                        height: "230px",
                        cursor: "pointer",
                        borderRadius: "12px",
                        zIndex: "1",
                      }}
                      onClick={() =>
                        gotobigpage(
                          selectedTrack.track.name,
                          selectedTrack.track.album.images[0].url
                        )
                      }
                    />
                    <h3 className="mt-3">{selectedTrack.track.name}</h3>
                    <h6>{selectedTrack.track.artists[0].name}</h6>
                    <h6>{selectedTrack.track.album.name}</h6>
                    <audio controls autoPlay>
                      <source
                        src={selectedTrack.track.preview_url}
                        type="audio/mpeg"
                      />
                    </audio>
                  </div>
                </div>
              )}
              <h5 style={{ color: "white" }}>#comments</h5>
              <Join />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlaylistTracksPage;
