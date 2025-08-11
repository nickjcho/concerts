import { isValidElement, ReactNode, useState } from "react";
import styles from "./phone.module.scss";
import { AnimatePresence, motion } from 'framer-motion';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AlbumIcon from '@mui/icons-material/Album';
import SvgIcon from "@mui/icons-material/LibraryMusic";
import React from "react";

const Phone = ({ children }: { children: ReactNode }) => {
  const [contentOpen, setContentOpen] = useState(false);
  const [showApps, setShowApps] = useState(true);
  const [activeContent, setActiveContent] = useState("");

  const handleOpen = (contentType: string) => {
    setShowApps(false);
    setActiveContent(contentType)
    setContentOpen(true);
  };

  const handleClose = () => {
    setContentOpen(false);
    setTimeout(() => setShowApps(true), 350)
  };

  const buttonHover = {
    initial: { scale: 1, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    whileHover: { scale: 1.025 }
  }

  const childrenArray = React.Children.toArray(children);
  const content = childrenArray.filter ((child: ReactNode) => {
    return isValidElement<{ id?: string }>(child) && child.props.id === activeContent;
  });

  return (
    <div className={styles.phone_body}>
      <div className={styles.bezel}>
        <div className={styles.speaker_bar}></div>
      </div>
      <div className={styles.content}>
        {showApps && (
          <div className={styles.app_icons}>
            <motion.div
              className={styles.app_tile}
              onClick={() => handleOpen("poster")}
              variants={buttonHover}
              initial={"initial"}
              animate={"animate"}
              whileHover={"whileHover"}
            >
              <p>Tour Poster</p>
              <div className={styles.app_icon}>
                <SvgIcon component={LibraryMusicIcon} />
              </div>
            </motion.div>
            <motion.div
              className={styles.app_tile}
              onClick={() => handleOpen("videos")}
              variants={buttonHover}
              initial={"initial"}
              animate={"animate"}
              whileHover={"whileHover"}
            >
              <p>Videos</p>
              <div className={styles.app_icon}>
                <SvgIcon component={SlideshowIcon} />
              </div>
            </motion.div>
            <motion.div
              className={styles.app_tile}
              onClick={() => handleOpen("album")}
              variants={buttonHover}
              initial={"initial"}
              animate={"animate"}
              whileHover={"whileHover"}
            >
              <p>Featured Album</p>
              <div className={styles.app_icon}>
                <SvgIcon component={AlbumIcon} />
              </div>
            </motion.div>
          </div>
        )}

        <AnimatePresence>
          {contentOpen && (
            <motion.div
              className={styles.app_content}
              initial={{ scale: 0.2, opacity: 0, borderRadius: '50%' }}
              animate={{
                scale: 1,
                opacity: 1,
                borderRadius: '8px',
                transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] }
              }}
              exit={{
                scale: 0.2,
                opacity: 0,
                borderRadius: '8px',
                transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
              }}
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        className={styles.home_button}
        onClick={handleClose}
        whileTap={{ scale: 0.95 }}
        whileHover={{
          backgroundColor: "#e0e0e0"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
      </motion.div>
    </div>
  );
}

export default Phone;