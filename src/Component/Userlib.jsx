import React, { useState, useEffect } from "react";
import { getUserPlaylists } from "../services/SpotifyService";

export const Userlib = () => {
  const [userPlaylists, setUserPlaylists] = useState([]);

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      try {
        const playlists = await getUserPlaylists(); // Fetch user playlists
        setUserPlaylists(playlists); // Set user playlists in state
      } catch (error) {
        console.error("Error fetching user playlists:", error);
      }
    };

    fetchUserPlaylists(); // Call the function to fetch user playlists
  }, []); // Empty dependency array to run effect only once

  // Render the component only when userPlaylists is not empty
  return (
    <>
      {userPlaylists.length > 0 &&
        userPlaylists.map((user) => {
          return (
            <>
              <h1>hii</h1>
              <h3>{user.name}</h3>
            </>
          );
        })}
    </>
  );
};
