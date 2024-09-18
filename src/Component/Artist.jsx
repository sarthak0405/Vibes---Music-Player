// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import { getArtist } from "../services/SpotifyService";
// import artist1 from "../Assets/artist1.png";

// const Artist = ({ artistId }) => {
//   const [artist, setArtist] = useState(null); // Initialize with null instead of empty string

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 3,
//   };

//   useEffect(() => {
//     const fetchArtistData = async () => {
//       try {
//         const data = await getArtist(artistId);
//         console.log("Fetched artist data:", data); // Log fetched data
//         setArtist(data);
//       } catch (error) {
//         console.error("Error fetching artist data:", error);
//       }
//     };
//     fetchArtistData();
//   }, [artistId]);

//   return (
//     <>
//       <h3 className="mt-5" style={{ fontWeight: "bolder" }}>
//         Your Favorite Artist
//       </h3>
//       <div className="slider-container mt-4 ms-5 me-3 ">
//         <Slider {...settings} style={{ width: "90%" }}>
//           <div>
//             <h3>
//               <div>
//                 {artist && artist.images && artist.images.length > 0 && (
//                   <img
//                     src={artist.images[0].url}
//                     alt={artist.name}
//                     style={{ width: "200px", height: "200px" }}
//                   />
//                 )}
//                 <p>{artist ? artist.name : ""}</p>
//               </div>
//             </h3>
//           </div>
//         </Slider>
//       </div>
//     </>
//   );
// };

// export default Artist;

import React, { useEffect, useState } from "react";
import { getArtist } from "../services/SpotifyService";

const Artist = ({ artistIds }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const artistsData = await Promise.all(
          artistIds.map(async (artistId) => {
            return await getArtist(artistId);
          })
        );
        setArtists(artistsData.filter((artist) => artist !== null));
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    fetchArtists();
  }, [artistIds]);

  return (
    <div>
      <h1>Artists</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            <img src={artist.images[0].url} alt={artist.name} />
            <p>{artist.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artist;
