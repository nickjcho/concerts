'use client';

import Link from "next/link";
import styles from './page.module.scss';
import { ConcertData, data, welcomeNotes } from "../../public/data";
import ConcertTile from "@/ui/concert-tile/concert-tile";
import MyModelCanvas from "@/ui/my-model/my-model-canvas";
import TypingText from "@/ui/typing-text/typing-text";

export default function Home() {
  const links = data.map((concert: ConcertData) => {
    return (
      <Link key={concert.id} href={`/concerts/${concert.id}`}>
        <ConcertTile concert={concert} />
      </Link>
    );
  });
  return (
    <div className={styles.page_container}>
      <div className={styles.concert_container}>
        {links}
      </div>
      <div className={styles.avatar_container}>
        <div className={styles.avatar_canvas}>
          <MyModelCanvas />
        </div>
        <div className={styles.avatar_textbox}>
          <TypingText text_list={welcomeNotes}/>
        </div>
      </div>
    </div>
  );
}
