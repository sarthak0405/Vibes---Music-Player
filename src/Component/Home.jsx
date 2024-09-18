import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getTopTracks, getFeaturedPlaylists } from "../services/SpotifyService";
import Navi from "./Navi";
import cara from "../Assets/cara.gif";
import Top5 from "./Top5";
import Playlist from "./Playlist";
import Artist from "./Artist";
import randimg3 from "../Assets/randomimg3.jpeg";
import randimg2 from "../Assets/randomimg2.jpg";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import starfalling from "../Assets/starfalling.gif";
import poster from "../Assets/poster.webp";
import poster2 from "../Assets/poster2.jpg";
import poster3 from "../Assets/poster3.jpg";
import { Userlib } from "./Userlib";
import Toplist from "../services/Toplist";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [topTracks, setTopTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [showham, setShowham] = useState(false);
  const Navigate = useNavigate();
  const [toadd, setToadd] = useState([]);
  const [storedplaylist, setStoredplaylist] = useState([]);
  const location = useLocation();
  const usrnm = location.state?.usrnm;

  const navigateToPlaylistTracks = (playlistId, playlistname, playlistimg) => {
    Navigate(`/playlist/${playlistId}/${playlistname}`, {
      state: { playlistimg },
    });
  };
  const clickhamicon = () => {
    setShowham(true);
  };
  const clickcrossicon = () => {
    setShowham(false);
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchFeaturedPlaylists = async () => {
      try {
        const data = await getFeaturedPlaylists();
        setPlaylists(data.playlists.items);
      } catch (error) {
        console.error("Error fetching featured playlists:", error);
      }
    };

    fetchFeaturedPlaylists();
  }, []);

  const clicktoadd = async (playlist) => {
    try {
      if (playlists.length > 0) {
        setToadd([...toadd, playlist]);
        const todolength = toadd.length;
        await axios.post(`http://localhost:8000/addplaylist/${usrnm}`, {
          playlist: toadd[todolength - 1],
        });
      } else {
        console.log("Playlists are not yet loaded");
      }
      alert("added");
    } catch (err) {
      console.log(err);
    }
  };

  const getplaylist = async () => {
    const data = await axios.get(`http://localhost:8000/getplaylist/${usrnm}`);
    setStoredplaylist(data.data);
    console.log(storedplaylist);
  };
  useEffect(() => {
    getplaylist();
  });

  return (
    <>
      <Navi />
      <Container fluid className="layoutcontainer">
        <Row>
          <i onClick={clickhamicon} className=" fa-solid fa-bars hamicon"></i>
          <Col
            lg={3}
            sm={11}
            className={`mt-2  ${showham ? "ham" : "dontshowham"}`}
          >
            {/* Left side content */}

            <div className="home ">
              {/* Home and Search icons */}

              <div
                className="mt-3 homediv"
                style={{
                  display: "flex",

                  gap: "10px",
                  justifyContent: "space-around",
                  width: "20%",
                }}
              >
                <i
                  className="fa-solid fa-house"
                  style={{ paddingTop: "3px" }}
                ></i>
                <p>{usrnm}</p>
                <i
                  className="fa-solid fa-xmark crossicon "
                  style={{ marginLeft: "250px", fontSize: "20px" }}
                  onClick={clickcrossicon}
                ></i>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-around",
                  width: "20%",
                }}
              >
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ paddingTop: "5px" }}
                ></i>
                <p>
                  <Search />
                </p>
              </div>
            </div>
            {/* Library content */}

            <div className="library mt-2">
              <div style={{ display: "flex" }}>
                <h5
                  style={{
                    textAlign: "center",
                    backgroundColor: "white",
                    // borderRadius: "17px",
                    color: "black",
                    marginTop: "-2px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  Music
                </h5>

                <h5 className="ms-3">Podcast</h5>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
                className="mt-4"
              >
                <div style={{ display: "flex" }}>
                  <i class="fa-solid fa-bookmark"></i>
                  <h5 className="ms-2">Your Library : </h5>
                </div>
                <div>
                  <i
                    className="fa-solid fa-plus me-2"
                    style={{ fontSize: "23px", marginTop: "6px" }}
                  ></i>
                  <i
                    className="fa-solid fa-ellipsis"
                    style={{ fontSize: "23px" }}
                  ></i>
                </div>
              </div>

              {/* library added content */}
              <hr></hr>
              <h5 className="mt-3">
                {storedplaylist.map((e) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>
                      <img
                        src={e.images?.[0]?.url}
                        alt={e.name}
                        style={{ height: "50px", width: "50px" }}
                      />
                    </p>
                    <p className="ms-2" style={{ color: "white" }}>
                      {e.name}
                    </p>
                  </div>
                ))}
                {toadd.map((playlist) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>
                      <img
                        src={playlist.images?.[0]?.url}
                        alt={playlist.name}
                        style={{ height: "50px", width: "50px" }}
                      />
                    </p>
                    <p className="ms-2">{playlist.name} </p>
                  </div>
                ))}
              </h5>
            </div>
          </Col>

          {/* right side */}

          <Col
            fluid
            style={{
              border: "red",
              backgroundColor: "black",
            }}
            className=" mt-2 rightside "
          >
            <div className="carousal w-98" style={{ height: "200px" }}>
              {/* Carousel content */}
              <div
                style={{ backgroundColor: "rgb(28, 28, 28)" }}
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={randimg3}
                      className="d-block w-100"
                      alt="..."
                      height={"200px"}
                      // style={{ borderRadius: "15px" }}
                    />
                  </div>

                  <div className="carousel-item active">
                    <img
                      src={randimg2}
                      className="d-block w-100"
                      alt="..."
                      height={"200px"}
                      // style={{ borderRadius: "15px" }}
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    // className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    // className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <nav aria-label="breadcrumb" style={{ marginLeft: "35px" }}>
              {/* Breadcrumb content */}

              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="">All</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="">Music</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="">Podcast</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Categories
                </li>
              </ol>
            </nav>
            <div className="top5div">
              {/* Top 5 tracks */}
              <div>
                <h3 style={{ fontWeight: "bolder", marginLeft: "35px" }}>
                  Featured Playlists
                </h3>
                <div className="slider-container mt-4 ">
                  <Slider
                    {...settings}
                    style={{ width: "90%" }}
                    className="ms-lg-5 me-sm-5"
                  >
                    {playlists.map((playlist) => (
                      <div key={playlist.id}>
                        {/* <div
                          className="card playlistcard"
                          style={{
                            width: "13rem",
                            border: "7px solid transparent",
                            // borderImage: "linear-gradient(to right, black, #00aaff)",
                            borderImageSlice: "1",
                            height: "250px",
                            textAlign: "center",
                            cursor: "pointer  ",
                          }}
                        >
                          <img
                            src={playlist.images[0].url}
                            alt={playlist.name}
                            style={{
                              height: "200px",
                              width: "180px",
                            }}
                            className="ms-2 mt-2"
                            onClick={() =>
                              navigateToPlaylistTracks(
                                playlist.id,
                                playlist.name,
                                playlist.images[0].url
                              )
                            }
                          />

                          <p
                            className="card-text "
                            style={{
                              color: "black",
                              fontSize: "18px",
                              fontWeight: "bolder",
                            }}
                          >
                            {playlist.name}
                            <i
                              style={{ color: "black", marginLeft: "20px" }}
                              className="fa-solid fa-circle-plus"
                              onClick={() => clicktoadd(playlist)}
                            ></i>
                          </p>
                        </div> */}
                        <div
                          // className="card playlistcard"
                          style={{
                            width: "13rem",
                            border: "7px solid transparent",
                            borderImage:
                              "linear-gradient(to right, black, rgb(97, 2, 153))",
                            borderImageSlice: "1",
                            // border: "none",
                            padding: "0",
                            // borderRadius: "15px",
                            height: "250px",
                            textAlign: "center",
                          }}
                        >
                          <img
                            src={playlist.images[0].url}
                            alt={playlist.name}
                            style={{
                              height: "200px",
                              width: "180px",
                              // borderRadius: "17px",
                            }}
                            className="ms-2 mt-2"
                            onClick={() =>
                              navigateToPlaylistTracks(
                                playlist.id,
                                playlist.name,
                                playlist.images[0].url
                              )
                            }
                          />
                          <p
                            className="card-text "
                            style={{
                              color: "white",
                              fontSize: "18px",
                              fontWeight: "bolder",
                            }}
                          >
                            {playlist.name}
                            <i
                              style={{ color: "white", marginLeft: "20px" }}
                              className="fa-solid fa-circle-plus"
                              onClick={() => clicktoadd(playlist)}
                            ></i>
                          </p>
                        </div>
                      </div>
                      // <div key={playlist.id}>

                      // </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>

            {/* Other content */}

            {/* popular */}

            <div className="mt-5">
              <h3 style={{ fontWeight: "bolder" }}>Popular</h3>
            </div>

            <Container>
              <Row>
                <Col lg={5} sm={12}>
                  <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={poster}
                          className="d-block w-100"
                          alt="..."
                          height={"500px"}
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={poster3}
                          className="d-block w-100"
                          alt="..."
                          height={"500px"}
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={poster2}
                          className="d-block w-100"
                          alt="..."
                          height={"500px"}
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleFade"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </Col>
                <Col>
                  <div className="ms-lg-3" style={{ width: "100%" }}>
                    {playlists.slice(0, 5).map((e) => {
                      return (
                        <>
                          <div>
                            <ol>
                              <li
                                style={{
                                  marginTop: "8px",
                                  padding: "15px",
                                  backgroundColor: "rgb(27, 0, 33)",
                                }}
                              >
                                <img
                                  src={e.images[0].url}
                                  height={"60px"}
                                  width={"60px"}
                                ></img>
                                {e.name}
                              </li>
                            </ol>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </Container>
            <div>
              <h3 className="mt-5">Recommanded for You</h3>
              <Toplist />
            </div>
            <Artist />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
