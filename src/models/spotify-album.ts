import { SpotifyTrack } from "./spotify-track"

export interface SpotifyAlbum {
  album_url: string
  album_name: string
  tracks: SpotifyTrack[]
}