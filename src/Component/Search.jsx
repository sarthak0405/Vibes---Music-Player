import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const CLIENT_ID = "3028502b8fa64f1792433f397acd0091";
  const CLIENT_SECRET = "f02955855f34477085b6df5f35c0cbbd";
  const BASE_URL = "https://api.spotify.com/v1";

  const getToken = async () => {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
        },
      }
    );
    return response.data.access_token;
  };

  const searchTracks = async (query) => {
    const token = await getToken();
    try {
      const response = await axios.get(
        `${BASE_URL}/search?q=${query}&type=track`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.tracks.items;
    } catch (error) {
      console.error("Error searching tracks:", error);
      return [];
    }
  };

  const handleInputChange = async (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      const results = await searchTracks(e.target.value);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for songs"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </form>
      <div className={searchResults.length > 0 ? "searchdiv" : "none"}>
        {searchResults.splice(0, 3).map((track) => (
          <div
            key={track.id}
            // style={{ marginBottom: "10px" }}
          >
            <span>{track.name}</span>
            <audio controls>
              <source src={track.preview_url} type="audio/mpeg" />
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
