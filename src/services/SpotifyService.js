import axios from "axios";

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

export const getTopTracks = async () => {
  const token = await getToken();
  const response = await axios.get(
    `${BASE_URL}/browse/new-releases?country=US&limit=5`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const getFeaturedPlaylists = async () => {
  const token = await getToken();
  const response = await axios.get(
    `${BASE_URL}/browse/featured-playlists?country=US&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const getFeaturedPlaylistTracks = async (playlistId) => {
  const token = await getToken();
  const response = await axios.get(
    `${BASE_URL}/playlists/${playlistId}/tracks`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
export const getUserPlaylists = async () => {
  const token = await getToken();
  const response = await axios.get(`${BASE_URL}/me/playlists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.items;
};
// export const getTopPlaylists = async () => {
//   const token = await getToken();
//   const response = await axios.get(
//     `${BASE_URL}/browse/featured-playlists?country=US&limit=5`,
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return response.data;
// };
// Modified getTopPlaylists function to fetch playlists starting from a specific offset
export const getTopPlaylists = async (offset = 20, limit = 30) => {
  const token = await getToken();
  const response = await axios.get(
    `${BASE_URL}/browse/featured-playlists?country=US&limit=${limit}&offset=${offset}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
export const getPlaylistDetails = async (playlistId) => {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {
      headers: {
        Authorization: "Bearer YOUR_ACCESS_TOKEN",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch playlist details");
  }

  return await response.json();
};
export const getArtist = async (artistId) => {
  const token = await getToken();
  const response = await axios.get(`${BASE_URL}/artists/${artistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
