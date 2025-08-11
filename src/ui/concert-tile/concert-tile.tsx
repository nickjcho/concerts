'use client';
import { motion } from "framer-motion";

import styles from "./concert-tile.module.scss";
import { ConcertData } from "../../../public/data";

const ConcertTile = ({ concert }: { concert: ConcertData}) => {
  return (
    <motion.div 
      className={styles.concert_tile}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div 
        className={styles.concert_tile_background}
        whileHover={{ opacity: 0.25 }}
        style={{ backgroundImage: `url(${concert.artist_photo})` }}
      >
      </motion.div>
      <div className={styles.concert_tile_textbox}>
        <div className={styles.concert_tile_text}>{concert.artist_name}</div>
        <div className={styles.concert_tile_text}>{concert.date}</div>
      </div>
    </motion.div>
  )
}

export default ConcertTile;