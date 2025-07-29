import { SpotifyAlbum } from "@/models/spotify-album";
import Image from "next/image";
import styles from "./album-table.module.scss";
import { SpotifyTrack } from "@/models/spotify-track";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MyToggleButton from "../my-toggle-button/my-toggle-button";

const AlbumTable = ({ albumInfo, albumRanking, onTrackChange }: {
  albumInfo: SpotifyAlbum,
  albumRanking: { track_no: number, rank: number }[],
  onTrackChange: (trackId: string) => void
}) => {
  const [activeOrder, setActiveOrder] = useState('track');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newOrder: string,
  ) => {
    if (newOrder !== null) {
      setActiveOrder(newOrder);
    }
  };
  const [tracks, setTracks] = useState<Map<number, SpotifyTrack>>(new Map<number, SpotifyTrack>());

  useEffect(() => {
    const tracksMap = new Map<number, SpotifyTrack>();
    albumInfo.tracks.map((track: SpotifyTrack) => {
      tracksMap.set(track.track_number, track);
    });
    setTracks(tracksMap);
  }, [albumInfo]);

  let trackOrder: number[];
  if (activeOrder === "mine") {
    const sortedRanking = albumRanking.slice();
    sortedRanking.sort((a, b) => {
      return a.rank - b.rank;
    });
    trackOrder = sortedRanking.map((val: { track_no: number, rank: number }) => {
      return val.track_no;
    });
  } else {
    trackOrder = albumInfo.tracks.map((track) => {
      return track.track_number;
    });
  }

  return (
    <div className={styles.album_table}>
      <div className={styles.rank_toggle}>
        <ToggleButtonGroup
          color="primary"
          value={activeOrder}
          exclusive
          onChange={handleChange}
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
            border: "4px solid #56cfef",
            width: "100%"
          }}
        >
          <MyToggleButton value="track">Track Order</MyToggleButton>
          <MyToggleButton value="mine">My Ranking</MyToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className={styles.album_header}>
        <div className={styles.album_image}>
          <Image
            key={albumInfo.album_url}
            src={albumInfo.album_url}
            height={100}
            width={100}
            alt="Artist photo"
          />
          <div className={styles.album_info}>
            <h3>{albumInfo.album_name}</h3>
            <p>{albumInfo.tracks.length} tracks</p>
          </div>
        </div>
      </div>

      <div className={styles.album_tracks}>
        {trackOrder.map((order: number) => {
          const track = tracks.get(order);
          return (track && 
            <motion.div
                onClick={() => onTrackChange(track.track_id)}
                className={styles.album_row}
                key={track.track_number}
                layout
                whileHover={{ scale: 1.025 }}
              >
                <p>{track.name}</p>
                <p className={styles.track_duration}>{track.duration}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}

export default AlbumTable;