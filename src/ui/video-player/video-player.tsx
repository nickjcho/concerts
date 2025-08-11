'use client';

import styles from './video-player.module.scss';
import { Video } from '@/models/video';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';
import { useEffect, useRef, useState } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SvgIcon from '@mui/icons-material/NavigateBefore';

export default function VideoPlayer({ videos }: { videos: Video[] }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);

  useEffect(() => {
    if (
      swiper &&
      prevRef.current &&
      nextRef.current &&
      swiper.params.navigation
    ) {
      if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper, prevRef, nextRef]);

  const handleSlideChange = (swiper: SwiperClass) => {
    document.querySelectorAll('video').forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
    setIsFirst(swiper.isBeginning);
    setIsLast(swiper.isEnd);
  };

  return (
    <div className={styles.card}>
      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
      >
        {videos.map((video: Video) => {
          return (
            <SwiperSlide className={styles.swiper_slide} key={video.title}>
              <div className={styles.video_title}>{video.title}</div>
              <video className={styles.video} controls>
                <source
                  src={video.src}
                  type="video/mp4" /> 
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div ref={prevRef} className={`${styles.swiper_button} ${styles.left} ${isFirst ? styles.disabled : ''}`}>
        <SvgIcon component={NavigateBeforeIcon} fontSize="large"/>
      </div>
      <div ref={nextRef} className={`${styles.swiper_button} ${styles.right} ${isLast ? styles.disabled : ''}`}>
        <SvgIcon component={NavigateNextIcon} fontSize="large"/>
      </div>
    </div>
  )
}