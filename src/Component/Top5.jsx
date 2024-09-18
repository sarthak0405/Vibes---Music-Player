import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Top5 = ({ tracks }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      <div className="me-3 slidercondiv">
        <h2>Top 5 Tracks</h2>
        <div className="slider-container mt-4">
          <Slider {...settings} style={{ width: "95%" }} className="ms-3">
            {tracks.map((track) => (
              <div key={track.id}>
                <div
                  className="card top5card"
                  style={{
                    width: "13rem",
                    border: "7px solid transparent",
                    borderImage: "linear-gradient(to right, black, #00aaff)",
                    borderImageSlice: "1",
                    height: "280px",
                  }}
                >
                  {track.album &&
                    track.album.images &&
                    track.album.images.length > 0 && (
                      <img
                        src={track.album.images[0].url}
                        className="card-img-top"
                        alt={track.name}
                        style={{ height: "150px" }}
                      />
                    )}
                  <div className="card-body" style={{ height: "130px" }}>
                    <p
                      className="card-text top5cardtext"
                      style={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "bolder",
                        height: "130px",
                      }}
                    >
                      {track.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Top5;
