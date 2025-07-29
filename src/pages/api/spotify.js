import { getSpotifyAccessToken } from "../../lib/spotify";

export default async function handler(req, res) {
  const { albumId ='' } = req.query;


  try {
    const token = await getSpotifyAccessToken();
    const spotifyRes = await fetch(`https://api.spotify.com/v1/albums/${albumId}?market=US`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await spotifyRes.json();

    if (!spotifyRes.ok) {
      return res.status(spotifyRes.status).json({ error: data });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error('Spotify proxy error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}