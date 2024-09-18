// import React, { useState, useEffect } from "react";
// import { getTopPlaylists } from "../services/SpotifyService";
// import Slider from "react-slick";
// import Artist from "../Component/Artist";

// const Toplist = () => {
//   const [toplist, setToplist] = useState(null);

//   useEffect(() => {
//     const fetchToplist = async () => {
//       try {
//         const data = await getTopPlaylists();
//         setToplist(data.playlists.items); // Assuming that the response structure has 'playlists' object with 'items' array
//       } catch (error) {
//         console.error("Error fetching top playlists:", error);
//       }
//     };
//     fetchToplist();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <div className="slider-container mt-5  ">
//         {toplist && toplist.length > 0 ? (
//           <Slider
//             {...settings}
//             style={{ width: "90%" }}
//             className="ms-lg-5  me-sm-5"
//           >
//             {toplist.map((playlist) => (
//               <div key={playlist.id}>
//                 <h3>
//                   <div className="card" style={{ width: "13rem" }}>
//                     <img
//                       src={playlist.images[0].url}
//                       className="card-img-top"
//                       alt="..."
//                     />
//                   </div>
//                 </h3>
//               </div>
//             ))}
//           </Slider>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default Toplist;
import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTopTracks, getFeaturedPlaylists } from "../services/SpotifyService";
const Toplist = () => {
  const Navigate = useNavigate();
  const navigateToPlaylistTracks = (playlistId, playlistname, playlistimg) => {
    Navigate(`/playlist/${playlistId}/${playlistname}`, {
      state: { playlistimg },
    });
  };
  const [playlists, setPlaylists] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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

    // Call the functions to fetch top tracks and featured playlists
    // fetchTopTracks();
    fetchFeaturedPlaylists();
  }, []);
  return (
    <>
      <div className="top5div">
        {/* Top 5 tracks */}
        <div>
          <div className="slider-container mt-4 ">
            <Slider
              {...settings}
              style={{ width: "90%" }}
              className="ms-lg-5 me-sm-5"
            >
              {playlists.slice(5).map((playlist) => (
                <div key={playlist.id}>
                  <div
                    // className="card playlistcard"
                    style={{
                      width: "13rem",
                      // border: "7px solid transparent",
                      // borderImage: "linear-gradient(to right, black, #00aaff)",
                      // borderImageSlice: "1",
                      border: "none",
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
                    {/* 
                    <p
                      className="card-text "
                      style={{
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bolder",
                      }}
                    >
                      {playlist.name}
                    </p> */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toplist;
