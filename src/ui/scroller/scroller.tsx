import { ReactNode } from "react";
import styles from './scroller.module.scss';

const Scroller = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.scrollable}>
      <div className={styles.bezel}>
        <div className={styles.speaker_bar}></div>
      </div>
      <div className={styles.scrollable_content}>
        { children }
      </div>
      <div className={styles.home_button}></div>
    </div>
  );
}

export default Scroller;