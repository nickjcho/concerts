'use client';

import VideoPlayer from "../../../ui/video-player/video-player";
import { data } from "../../../../public/data";
import styles from './page.module.scss';
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { SpotifyAlbum } from "@/models/spotify-album";
import { SpotifyTrack } from "@/models/spotify-track";
import TypingText from "@/ui/typing-text/typing-text";
import AlbumTable from "@/ui/album-table/album-table";
import Phone from "@/ui/phone/phone";
import SpotifyPlayer from "@/ui/spotify-player/spotify-player";
import { useParams } from "next/navigation";
import MyModelCanvas from "@/ui/my-model/my-model-canvas";
  
export default function MainPage() {
  const params = useParams();
  const concertData = useMemo(() => {
    const filteredData = data.filter((concert) => {
      return concert.id === Number(params?.id);
    })
    return filteredData[0]

  }, [params]);
  const videos = concertData.videos;

  const [albumInfo, setAlbumInfo] = useState<SpotifyAlbum>({} as SpotifyAlbum);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTrackId, setActiveTrackId] = useState<string>("");

  useEffect(() => {
    const fetchArtist = (async () => {
      const res = await fetch(
        `/api/spotify?albumId=${encodeURIComponent(`${concertData.album_id}`)}`
      );
      const resData = await res.json();
      console.log(resData)
      const albumData: SpotifyAlbum = {
        album_url: resData.images.length ? resData.images[0].url : "",
        album_name: resData.name ? resData.name : "",
        tracks: resData.tracks.items.map((track: typeof resData.tracks.items[0]) => {
          const trackTotalSeconds = Math.floor(track.duration_ms / 1000);
          const trackMinutes = Math.floor(trackTotalSeconds / 60);
          let trackSeconds = (trackTotalSeconds % 60).toString();
          if (trackSeconds.length === 1) {
            trackSeconds = "0" + trackSeconds;
          }
          const trackData: SpotifyTrack = {
            track_number: track.track_number,
            track_id: track.id,
            name: track.name,
            duration: trackMinutes + ":" + trackSeconds
          }
          return trackData
        })
      }
      setAlbumInfo(albumData);
      setIsLoading(false);
    });
    fetchArtist();
  }, [concertData]);
    console.log(albumInfo);
  return (
    <div className={styles.page_container}>
      <div className={styles.page_wrapper}>
        <div className={styles.header_row}>
          <div className={styles.profile_photo}>
            <Image
              src={concertData.artist_photo}
              layout="responsive"
              height={100}
              width={100}
              alt="Artist photo"
            />
          </div>
          <div className={styles.header_text}>
            <div className={styles.flex_column}>
              <h1>{concertData.artist_name}</h1>
              <h3>{concertData.tour_name}</h3>
            </div>
            <div className={styles.tour_info}>
              <h4>{concertData.date} | {concertData.location} | {concertData.venue}</h4>
            </div>
          </div>
          <div className={styles.spotify_player}>
            <SpotifyPlayer trackId={activeTrackId}/>
          </div>
        </div>

        <div className={styles.content_row}>
          <div className={styles.phone}>
            <Phone>
              <div className={styles.phone_app_content} id="poster">
                <Image
                  src={concertData.poster_image}
                  layout="responsive"
                  height={100}
                  width={100}
                  alt="Artist poster"
                />
              </div>
              <div className={styles.phone_app_content} id="videos">
                <VideoPlayer videos={videos}/>
              </div>
              {!isLoading && (
                <div className={styles.phone_app_content} id="album">
                  <AlbumTable 
                    albumInfo={albumInfo}
                    albumRanking={concertData.album_ranking}
                    onTrackChange={setActiveTrackId}/>
                </div>
              )}
            </Phone>
          </div>
          
          <div className={styles.opinions_column}>
            <div className={styles.canvas_container}>
              <MyModelCanvas />
            </div>
            <TypingText text_list={concertData.concert_notes}/>
          </div>
        </div>
      </div>
    </div>
  )
}
